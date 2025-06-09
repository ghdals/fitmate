package com.example.demo.controller;

import com.example.demo.dto.GptRequestDto;
import com.example.demo.dto.GptResponseDto;
import com.example.demo.model.Routine;
import com.example.demo.repository.RoutineRepository;
import com.example.demo.service.GptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;

@RestController
@RequestMapping("/api/gpt")
public class GptController {

    private final GptService gptService;
    private final RoutineRepository routineRepository;

    @Autowired
    public GptController(GptService gptService, RoutineRepository routineRepository) {
        this.gptService = gptService;
        this.routineRepository = routineRepository;
    }

    @PostMapping("/health")
    public GptResponseDto getHealthPlan(@RequestBody GptRequestDto requestDto) {
        String result = gptService.generateHealthPlan(
            requestDto.getHeight(),
            requestDto.getWeight(),
            requestDto.getGender(),
            requestDto.getFrequency(),
            requestDto.getGoal(),
            requestDto.getLevel()
        );

        // 루틴 DB 저장
        Routine routine = new Routine();
        routine.setName("GPT 추천 루틴");
        routine.setDescription(result);
        routine.setCreatedAt(LocalDateTime.now());
        routine.setUserId(null); // 추후 로그인 연동 시 사용

        routineRepository.save(routine);

        return new GptResponseDto(result);
    }

    @GetMapping("/")
    public String home() {
        return "GPT Health API is running!";
    }
}
