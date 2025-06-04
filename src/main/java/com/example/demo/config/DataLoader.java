package com.example.demo.config; // 또는 service 패키지

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import com.example.demo.service.WgerService;

@Component
public class DataLoader implements CommandLineRunner {

    private final WgerService wgerService;

    public DataLoader(WgerService wgerService) {
        this.wgerService = wgerService;
    }

    @Override
    public void run(String... args) throws Exception {
        wgerService.fetchAndSaveExercises();
        System.out.println("운동 데이터 저장 완료");
    }
}
