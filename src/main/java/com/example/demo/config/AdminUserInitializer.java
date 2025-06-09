package com.example.demo.config;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.Date;

@Configuration
public class AdminUserInitializer {

    @Bean
    public CommandLineRunner createAdminUser(UserRepository userRepository) {
        return args -> {
            if (!userRepository.existsByEmail("admin@test.com")) {
                User admin = new User();
                admin.setUsername("관리자");
                admin.setEmail("admin@test.com");
                admin.setPassword("admin1234"); // ⚠ 테스트용, 배포 전 반드시 암호화
                admin.setFitness_level("관리자");
                admin.setGoal("관리자");
                admin.setCreated_at(new Date());

                userRepository.save(admin);
                System.out.println("✅ 관리자 계정이 생성되었습니다.");
            }
        };
    }
}
