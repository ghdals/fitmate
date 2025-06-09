package com.example.demo.service;

import com.example.demo.model.Exercise;
import com.example.demo.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class WgerService {

    private final RestTemplate restTemplate;
    private final ExerciseRepository exerciseRepository;

    @Value("${google.translate.api-key}")
    private String googleApiKey;

    private final String API_BASE = "https://wger.de/api/v2";

    public WgerService(RestTemplate restTemplate, ExerciseRepository exerciseRepository) {
        this.restTemplate = restTemplate;
        this.exerciseRepository = exerciseRepository;
    }

    public void fetchAndSaveExercises() {
        String url = API_BASE + "/exercise/?language=2&limit=500";
        Map<String, Object> response = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(buildHeaders()), Map.class).getBody();
        if (response == null || !response.containsKey("results")) return;

        List<Map<String, Object>> exercises = (List<Map<String, Object>>) response.get("results");

        for (Map<String, Object> wgerExercise : exercises) {
            String id = String.valueOf(wgerExercise.get("id"));
            if (exerciseRepository.existsByExerciseId(id)) continue;

            String rawName = (String) wgerExercise.get("name");
            String rawDescription = (String) wgerExercise.get("description");

            if ((rawName == null || rawName.isBlank()) || (rawDescription == null || rawDescription.isBlank())) {
                Map<String, Object> translation = getTranslationFromApi(id);
                if (translation != null) {
                    rawName = (String) translation.get("name");
                    rawDescription = (String) translation.get("description");
                }
            }

            if (rawName == null || rawName.isBlank() || rawDescription == null || rawDescription.isBlank()) {
                System.out.println("⚠️ name 또는 description 비어 있음. ID: " + id);
                continue;
            }

            String name = translateToKorean(rawName);
            String description = translateToKorean(rawDescription);

            Integer rawCategoryId = (Integer) wgerExercise.get("category");
            String categoryId = String.valueOf(rawCategoryId);
            String categoryName = getCategoryNameById(rawCategoryId);

            String infoUrl = API_BASE + "/exerciseinfo/" + id + "/";
            Map<String, Object> info = restTemplate.exchange(infoUrl, HttpMethod.GET, new HttpEntity<>(buildHeaders()), Map.class).getBody();

            List<String> muscles = getNamesFromIds((List<Map<String, Object>>) info.getOrDefault("muscles", List.of()), "muscle");
            List<String> secondary = getNamesFromIds((List<Map<String, Object>>) info.getOrDefault("muscles_secondary", List.of()), "muscle");
            List<String> equips = getNamesFromIds((List<Map<String, Object>>) info.getOrDefault("equipment", List.of()), "equipment");

            String imageUrl = "";
            String imageApi = API_BASE + "/exerciseimage/?exercise=" + id;
            Map<String, Object> imageResponse = restTemplate.exchange(imageApi, HttpMethod.GET, new HttpEntity<>(buildHeaders()), Map.class).getBody();
            List<Map<String, Object>> imgResults = (List<Map<String, Object>>) imageResponse.getOrDefault("results", List.of());
            if (!imgResults.isEmpty() && imgResults.get(0).containsKey("image")) {
                imageUrl = (String) imgResults.get(0).get("image");
            }

            Exercise ex = new Exercise();
            ex.setExerciseId(id);
            ex.setName(name);
            ex.setDescription(description);
            ex.setCategoryId(categoryId);
            ex.setCategoryName(categoryName);
            ex.setTargetMuscles(muscles);
            ex.setSecondaryMuscles(secondary);
            ex.setEquipments(equips);
            ex.setImageUrl(imageUrl);

            exerciseRepository.save(ex);
        }
    }

    private Map<String, Object> getTranslationFromApi(String id) {
        String url = API_BASE + "/exercise-translation/?exercise=" + id;
        try {
            Map<String, Object> response = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(buildHeaders()), Map.class).getBody();
            List<Map<String, Object>> results = (List<Map<String, Object>>) response.get("results");
            if (results.isEmpty()) return null;
            return results.get(0);
        } catch (Exception e) {
            return null;
        }
    }

    private List<String> getNamesFromIds(List<Map<String, Object>> list, String type) {
        return list.stream().map(m -> {
            Integer id = (Integer) m.get("id");
            String url = API_BASE + "/" + type + "/" + id + "/";
            try {
                Map<String, Object> result = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(buildHeaders()), Map.class).getBody();
                return result != null && result.containsKey("name") ? (String) result.get("name") : null;
            } catch (Exception e) {
                return null;
            }
        }).filter(Objects::nonNull).collect(Collectors.toList());
    }

    private String getCategoryNameById(Integer categoryId) {
        String url = API_BASE + "/exercisecategory/" + categoryId + "/";
        try {
            Map<String, Object> response = restTemplate.exchange(url, HttpMethod.GET, new HttpEntity<>(buildHeaders()), Map.class).getBody();
            return response != null && response.containsKey("name") ? (String) response.get("name") : "기타";
        } catch (Exception e) {
            return "기타";
        }
    }

    private String translateToKorean(String text) {
        if (text == null || text.isBlank()) return "";

        String url = "https://translation.googleapis.com/language/translate/v2?key=" + googleApiKey;

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("q", text);
        requestBody.put("target", "ko");
        requestBody.put("format", "text");

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        try {
            Thread.sleep(300);
            ResponseEntity<Map> response = restTemplate.postForEntity(url, entity, Map.class);
            if (response.getStatusCode() == HttpStatus.OK && response.getBody() != null) {
                Map<String, Object> data = (Map<String, Object>) response.getBody().get("data");
                List<Map<String, Object>> translations = (List<Map<String, Object>>) data.get("translations");
                return translations.get(0).get("translatedText").toString();
            }
        } catch (Exception e) {
            System.out.println("❌ Google 번역 실패: " + text);
        }

        return text;
    }

    private HttpHeaders buildHeaders() {
        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Token 10e1fc2156d40e43ab07689b94436c0d52b5edf2");
        headers.set("Accept", "application/json");
        return headers;
    }
}
