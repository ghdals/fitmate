package com.example.demo.controller;

import com.example.demo.dto.AdminLoginRequestDto;
import com.example.demo.dto.AdminLoginResponseDto;
import com.example.demo.dto.UserSummaryDto;
import com.example.demo.model.Exercise;
import com.example.demo.model.User;
import com.example.demo.repository.ExerciseRepository;
import com.example.demo.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    private final UserRepository userRepository;
    private final ExerciseRepository exerciseRepository;

    public AdminController(UserRepository userRepository, ExerciseRepository exerciseRepository) {
        this.userRepository = userRepository;
        this.exerciseRepository = exerciseRepository;
    }

    // ✅ 관리자 로그인
    @PostMapping("/login")
    public AdminLoginResponseDto login(@RequestBody AdminLoginRequestDto loginRequest) {
        User user = userRepository.findByEmail(loginRequest.getEmail());

        if (user != null && user.getPassword().equals(loginRequest.getPassword())) {
            if (user.getEmail().equals("admin@test.com")) {
                return new AdminLoginResponseDto(user.getUsername(), user.getEmail(), "admin");
            }
        }

        throw new RuntimeException("관리자 로그인 실패: 이메일 또는 비밀번호가 틀렸습니다.");
    }

    // ✅ 유저 요약 정보 리스트 (이름, 이메일, 운동레벨, 목표)
    @GetMapping("/users")
    public List<UserSummaryDto> getAllUsers() {
        return userRepository.findAll().stream()
                .map(user -> new UserSummaryDto(
                        user.getUsername(),
                        user.getEmail(),
                        user.getFitness_level(),
                        user.getGoal()
                ))
                .collect(Collectors.toList());
    }

    // ✅ 유저 삭제
    @DeleteMapping("/user/{id}")
    public void deleteUser(@PathVariable String id) {
        userRepository.deleteById(id);
    }

    // ✅ 전체 운동 가져오기
    @GetMapping("/exercises")
    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    // ✅ 운동 삭제
    @DeleteMapping("/exercise/{id}")
    public void deleteExercise(@PathVariable String id) {
        exerciseRepository.deleteById(id);
    }

    // ✅ 운동 수동 추가
    @PostMapping("/exercise")
    public Exercise createExercise(@RequestBody Exercise exercise) {
        return exerciseRepository.save(exercise);
    }
}
