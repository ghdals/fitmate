package com.example.demo.controller;

import com.example.demo.model.Exercise;
import com.example.demo.service.ExerciseService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exercises")
public class ExerciseController {

    private final ExerciseService service;

    public ExerciseController(ExerciseService service) {
        this.service = service;
    }

    @GetMapping
    public List<Exercise> getAllExercises() {
        return service.getAllExercises();
    }

    @GetMapping("/category")
    public List<Exercise> getExercisesByCategory(@RequestParam String name) {
        return service.getExercisesByCategory(name);
    }
    @GetMapping("/search")
    public List<Exercise> searchExercises(@RequestParam String keyword) {
        return service.searchExercises(keyword);
    }

}
