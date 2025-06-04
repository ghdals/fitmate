package com.example.demo.controller;

import com.example.demo.model.Exercise;
import com.example.demo.service.ExerciseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exercises")
public class ExerciseController {

    @Autowired
    private ExerciseService exerciseService;

    // 전체 운동 리스트 조회
    @GetMapping
    public ResponseEntity<List<Exercise>> getAllExercises() {
        List<Exercise> exercises = exerciseService.getAllExercises();
        return ResponseEntity.ok(exercises);
    }

    // 운동 상세 조회
    @GetMapping("/{exerciseId}")
    public ResponseEntity<?> getExerciseById(@PathVariable String exerciseId) {
        return exerciseService.getExerciseByExerciseId(exerciseId)
                .map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
