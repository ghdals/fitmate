package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document(collection = "routines")
public class Routine {

    @Id
    private String id;

    private String name; // 루틴 이름 (예: GPT 추천 루틴)
    private String description; // GPT가 생성한 HTML 루틴
    private LocalDateTime createdAt;

    // 필요 시 추가: 사용자 ID
    private String userId;

    // 기본 생성자
    public Routine() {}

    public Routine(String name, String description, String userId) {
        this.name = name;
        this.description = description;
        this.createdAt = LocalDateTime.now();
        this.userId = userId;
    }

    // Getter & Setter
    public String getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }
}
