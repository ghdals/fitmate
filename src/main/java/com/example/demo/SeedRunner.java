
package com.example.demo;

import com.example.demo.service.WgerService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class SeedRunner implements CommandLineRunner {

    private final WgerService wgerService;

    public SeedRunner(WgerService wgerService) {
        this.wgerService = wgerService;
    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Fetching exercises from wger...");
        wgerService.fetchAndSaveExercises();
        System.out.println("Done seeding exercises.");
    }
}
