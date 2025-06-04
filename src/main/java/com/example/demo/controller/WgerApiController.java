package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class WgerApiController {

    private final String WGER_API_URL = "https://wger.de/api/v2/exercise/?language=2"; // 영어(2) 운동 리스트 API

    @GetMapping("/api/wger/exercises")
    public ResponseEntity<String> getWgerExercises() {
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(WGER_API_URL, String.class);
        return ResponseEntity.ok(response);
    }
}
