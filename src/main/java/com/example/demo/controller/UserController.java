package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User savedUser = userService.registerUser(user);
            return ResponseEntity.ok(savedUser);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User loginUser) {
        User user = userService.findByEmail(loginUser.getEmail());

        if (user != null && user.getPassword().equals(loginUser.getPassword())) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.status(401).body("이메일 또는 비밀번호가 틀렸습니다.");
        }
    }

    @PatchMapping("/{userId}/preferences")
    public ResponseEntity<?> updateUserPreferences(
            @PathVariable String userId,
            @RequestBody Map<String, String> preferences) {

        String goal = preferences.get("goal");
        String frequency = preferences.get("frequency_per_week");
        String duration = preferences.get("duration_per_session");

        userService.updateUserPreferences(userId, goal, frequency, duration);
        return ResponseEntity.ok(Map.of("message", "운동 목표/빈도/시간이 저장되었습니다."));
    }

    // ✅ [추가] 키, 몸무게, 성별, 레벨 저장 API
    @PatchMapping("/{userId}/step-info")
    public ResponseEntity<?> updateStepInfo(
            @PathVariable String userId,
            @RequestBody Map<String, String> stepInfo) {

        String height = stepInfo.get("height");
        String weight = stepInfo.get("weight");
        String gender = stepInfo.get("gender");
        String level = stepInfo.get("level");

        userService.updateStepInfo(userId, height, weight, gender, level);
        return ResponseEntity.ok(Map.of("message", "신체 정보 및 운동 레벨이 저장되었습니다."));
    }
}
