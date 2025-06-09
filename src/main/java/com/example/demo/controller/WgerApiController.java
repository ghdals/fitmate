package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class WgerApiController {

    private final RestTemplate restTemplate;

    // 생성자 주입
    public WgerApiController(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    private static final String WGER_API_URL = "https://wger.de/api/v2/exercise/?language=2";

    @GetMapping("/api/wger/exercises")
    public ResponseEntity<String> getWgerExercises() {
        String response = restTemplate.getForObject(WGER_API_URL, String.class);
        return ResponseEntity.ok(response);
    }
}
