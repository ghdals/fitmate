// src/main/java/com/example/demo/service/WgerService.java
package com.example.demo.service;

import com.example.demo.model.Exercise;
import com.example.demo.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;
import java.util.Map;

@Service
public class WgerService {

    private static final String WGER_EXERCISES_URL = "https://wger.de/api/v2/exercise/?language=2&limit=1000";

    @Autowired
    private RestTemplate restTemplate;

    @Autowired
    private ExerciseRepository exerciseRepository;

    public void fetchAndSaveExercises() {
        Map<String, Object> response = restTemplate.getForObject(WGER_EXERCISES_URL, Map.class);

        if (response != null && response.containsKey("results")) {
            List<Map<String, Object>> exercises = (List<Map<String, Object>>) response.get("results");

            for (Map<String, Object> wgerExercise : exercises) {
                String exerciseId = String.valueOf(wgerExercise.get("id"));
                // 중복 체크
                if (exerciseRepository.existsByExerciseId(exerciseId)) {
                    // 이미 있으면 저장하지 않고 넘어감
                    continue;
                }

                Exercise exercise = new Exercise();
                exercise.setExerciseId(exerciseId);
                exercise.setName((String) wgerExercise.get("name"));
                exercise.setCategoryId(String.valueOf(wgerExercise.get("category")));
                exercise.setDescription((String) wgerExercise.get("description"));
                exercise.setImageUrl(""); // 이미지 없으면 빈값

                exerciseRepository.save(exercise);
            }
        }
    }

}
