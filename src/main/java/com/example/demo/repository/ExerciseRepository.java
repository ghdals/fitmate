package com.example.demo.repository;

import com.example.demo.model.Exercise;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface ExerciseRepository extends MongoRepository<Exercise, String> {
    boolean existsByExerciseId(String exerciseId);

    // ✅ 부분 일치 + 대소문자 무시
    List<Exercise> findByCategoryNameContainingIgnoreCase(String categoryName);

    List<Exercise> findByNameContainingIgnoreCaseOrDescriptionContainingIgnoreCase(String name, String desc);
}
