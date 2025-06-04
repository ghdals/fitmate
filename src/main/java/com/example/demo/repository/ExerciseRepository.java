package com.example.demo.repository;

import com.example.demo.model.Exercise;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ExerciseRepository extends MongoRepository<Exercise, String> {
    Optional<Exercise> findByExerciseId(String exerciseId);

    // 중복 여부 확인 메서드 추가
    boolean existsByExerciseId(String exerciseId);
}
