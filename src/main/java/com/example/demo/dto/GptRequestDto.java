package com.example.demo.dto;

public class GptRequestDto {
    private double height;
    private double weight;
    private String gender; // ✅ 성별
    private String frequency; // ✅ 주당 운동 횟수
    private String goal; // ✅ 운동 목적
    private String level; // ✅ 운동 수준

    // 기본 생성자
    public GptRequestDto() {}

    // 전체 파라미터 생성자
    public GptRequestDto(double height, double weight, String gender, String frequency, String goal, String level) {
        this.height = height;
        this.weight = weight;
        this.gender = gender;
        this.frequency = frequency;
        this.goal = goal;
        this.level = level;
    }

    // Getter & Setter
    public double getHeight() {
        return height;
    }

    public void setHeight(double height) {
        this.height = height;
    }

    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getFrequency() {
        return frequency;
    }

    public void setFrequency(String frequency) {
        this.frequency = frequency;
    }

    public String getGoal() {
        return goal;
    }

    public void setGoal(String goal) {
        this.goal = goal;
    }

    public String getLevel() {
        return level;
    }

    public void setLevel(String level) {
        this.level = level;
    }
}
