package com.example.demo.dto;

public class GptResponseDto {
    private String healthPlan;

    public GptResponseDto() {}

    public GptResponseDto(String healthPlan) {
        this.healthPlan = healthPlan;
    }

    public String getHealthPlan() {
        return healthPlan;
    }

    public void setHealthPlan(String healthPlan) {
        this.healthPlan = healthPlan;
    }
}
