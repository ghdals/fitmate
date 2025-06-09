package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class WgerApiService {

    private final RestTemplate restTemplate;

    @Autowired
    public WgerApiService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    // 전체 운동 목록 호출
    public String getExerciseList() {
        String url = "https://wger.de/api/v2/exercise/?language=2";  // language=2는 영어
        return restTemplate.getForObject(url, String.class);
    }

    // 단일 운동 정보 호출
    public String getExerciseById(int exerciseId) {
        String url = "https://wger.de/api/v2/exercise/" + exerciseId + "/?language=2";
        return restTemplate.getForObject(url, String.class);
    }

    // ✅ 카테고리 ID → 이름 맵 생성
    @SuppressWarnings("unchecked")
    public Map<Integer, String> getCategoryIdNameMap() {
        String url = "https://wger.de/api/v2/exercisecategory/?limit=100";

        Map<Integer, String> result = new HashMap<>();
        try {
            Map<String, Object> response = restTemplate.getForObject(url, Map.class);
            List<Map<String, Object>> categories = (List<Map<String, Object>>) response.get("results");

            for (Map<String, Object> category : categories) {
                Integer id = (Integer) category.get("id");
                String name = (String) category.get("name");
                result.put(id, name);
            }

            return result;
        } catch (Exception e) {
            System.out.println("❌ 카테고리 정보 로딩 실패: " + e.getMessage());
            return result;
        }
    }
}
