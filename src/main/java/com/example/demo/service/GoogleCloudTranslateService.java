package com.example.demo.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;

@Service
public class GoogleCloudTranslateService {

    @Value("${google.translate.api-key}")
    private String apiKey;

    public String translateText(String text, String sourceLang, String targetLang) {
        String url = "https://translation.googleapis.com/language/translate/v2?key=" + apiKey;

        // 요청 바디 생성
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("q", text);
        requestBody.put("source", sourceLang);
        requestBody.put("target", targetLang);
        requestBody.put("format", "text");

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        RestTemplate restTemplate = new RestTemplate();
        ResponseEntity<Map> response = restTemplate.postForEntity(url, entity, Map.class);

        // 응답 파싱
        if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
            Map<String, Object> data = (Map<String, Object>) response.getBody().get("data");
            if (data != null && data.get("translations") != null) {
                Map<String, String> translation = (Map<String, String>) ((java.util.List<?>) data.get("translations")).get(0);
                return translation.get("translatedText");
            }
        }

        return "(번역 실패)";
    }
}
