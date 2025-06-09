package com.example.demo.service;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import org.springframework.web.reactive.function.client.WebClientResponseException;
import reactor.core.publisher.Mono;
import reactor.util.retry.Retry;

import java.time.Duration;
import java.util.List;
import java.util.Map;

@Service
public class GptService {

    @Value("${openai.api.key}")
    private String openaiApiKey;

    private WebClient webClient;

    @PostConstruct
    public void init() {
        this.webClient = WebClient.builder()
                .baseUrl("https://api.openai.com/v1/chat/completions")
                .defaultHeader("Authorization", "Bearer " + openaiApiKey)
                .defaultHeader("Content-Type", "application/json")
                .build();
    }

    public String generateHealthPlan(double height, double weight, String gender, String frequency, String goal, String level) {
        int daysPerWeek = switch (frequency) {
            case "1-2회" -> 2;
            case "3-4회" -> 4;
            case "5-6회" -> 6;
            case "매일" -> 7;
            default -> 3;
        };

        String prompt = String.format(
            """
            당신은 전문 피트니스 트레이너입니다.

            사용자의 정보:
            - 키: %.1fcm
            - 몸무게: %.1fkg
            - 성별: %s
            - 운동 빈도: 주 %s
            - 목표: %s
            - 운동 수준: %s

            아래 조건에 맞춰 일주일 건강 계획을 HTML 형식으로 작성해주세요:

            1. 사용자의 체형을 간단히 분석해주세요 (BMI 포함).
            2. 운동 루틴은 주 %d일 분량만 요일을 정해서 구성해주세요.
            3. 상체, 하체, 복근, 유산소 운동을 골고루 포함해주세요. 부위별로 최소 3~4개 정도의 운동을 알려주세요.
            4. 각 운동은 이름, 세트 수, 반복 횟수, 자세한 설명을 포함해주세요.
            5. 운동 시간은 1~2시간 이내로 맞춰주세요.
            6. 식단은 아침/점심/저녁으로 하루 예시만 간단히 작성해주세요.
            7. HTML 태그 (예: <h3>, <ul>, <li>)를 활용해 가독성 좋게 작성해주세요.
            """,
            height, weight, gender, frequency, goal, level, daysPerWeek
        );

        Map<String, Object> requestBody = Map.of(
            "model", "gpt-3.5-turbo",
            "messages", List.of(
                Map.of("role", "system", "content", "당신은 전문 피트니스 트레이너입니다."),
                Map.of("role", "user", "content", prompt)
            )
        );

        try {
            Mono<Map> responseMono = webClient.post()
                    .bodyValue(requestBody)
                    .retrieve()
                    .bodyToMono(Map.class)
                    .retryWhen(Retry.fixedDelay(3, Duration.ofSeconds(2))
                            .filter(throwable -> throwable instanceof WebClientResponseException.TooManyRequests));

            Map response = responseMono.block();
            List<Map<String, Object>> choices = (List<Map<String, Object>>) response.get("choices");
            Map<String, Object> message = (Map<String, Object>) choices.get(0).get("message");
            return (String) message.get("content");

        } catch (WebClientResponseException.TooManyRequests e) {
            return "API 요청이 너무 많아 처리할 수 없습니다. 잠시 후 다시 시도해주세요.";
        } catch (Exception e) {
            e.printStackTrace();
            return "건강 계획 생성 중 오류가 발생했습니다: " + e.getMessage();
        }
    }
}
