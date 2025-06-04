package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class WgerApiService {

    private final RestTemplate restTemplate;

    @Autowired
    public WgerApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    // 전체 운동 목록 호출 예시
    public String getExerciseList() {
        String url = "https://wger.de/api/v2/exercise/?language=2";  // language=2는 영어
        return restTemplate.getForObject(url, String.class);
    }

    // 상세 운동 조회 (id 기반)
    public String getExerciseById(int exerciseId) {
        String url = "https://wger.de/api/v2/exercise/" + exerciseId + "/?language=2";
        return restTemplate.getForObject(url, String.class);
    }
}
