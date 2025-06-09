package com.example.demo.controller;

import com.example.demo.model.Routine;
import com.example.demo.repository.RoutineRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/routines")
public class RoutineController {

    private final RoutineRepository routineRepository;

    public RoutineController(RoutineRepository routineRepository) {
        this.routineRepository = routineRepository;
    }

    // 전체 루틴 조회
    @GetMapping
    public List<Routine> getAllRoutines() {
        return routineRepository.findAll();
    }

    // 특정 유저의 루틴 조회
    @GetMapping("/user/{userId}")
    public List<Routine> getRoutinesByUserId(@PathVariable String userId) {
        return routineRepository.findByUserId(userId);
    }

    // 루틴 저장
    @PostMapping
    public Routine createRoutine(@RequestBody Routine routine) {
        return routineRepository.save(routine);
    }
}
