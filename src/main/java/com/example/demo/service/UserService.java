package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // 회원가입 처리
    public User registerUser(User user) {
        if (userRepository.existsByUsername(user.getUsername())) {
            throw new RuntimeException("이미 존재하는 아이디입니다.");
        }

        // 추후 비밀번호 암호화 추가 가능
        return userRepository.save(user);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    // ⭐ 운동목표/빈도/시간 업데이트 메서드 추가 ⭐
    public void updateUserPreferences(String userId, String goal, String frequency, String duration) {
        User user = userRepository.findById(userId).orElseThrow(() ->
                new RuntimeException("사용자를 찾을 수 없습니다."));

        user.setGoal(goal);
        user.setFrequency_per_week(frequency);
        user.setDuration_per_session(duration);

        userRepository.save(user);
    }
    public void updateStepInfo(String userId, String height, String weight, String gender, String level) {
        Optional<User> optionalUser = userRepository.findById(userId);
        if (optionalUser.isPresent()) {
            User user = optionalUser.get();
            user.setHeight(Double.parseDouble(height));
            user.setWeight(Double.parseDouble(weight));
            user.setGender(gender);
            user.setFitness_level(level);
            userRepository.save(user);
        } else {
            throw new RuntimeException("User not found");
        }
    }

}
