package com.example.demo.service;

import com.example.demo.model.Exercise;
import com.example.demo.repository.ExerciseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExerciseService {

    @Autowired
    private ExerciseRepository exerciseRepository;

    // 모든 운동 조회
    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    // 운동 아이디로 상세 조회
    public Optional<Exercise> getExerciseByExerciseId(String exerciseId) {
        return exerciseRepository.findByExerciseId(exerciseId);
    }

    // 검색(이름 포함) 같은건 나중에 추가 가능
}
