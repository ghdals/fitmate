package com.example.demo.dto;

public class UserSummaryDto {
    private String username;
    private String email;
    private String fitnessLevel;
    private String goal;

    public UserSummaryDto() {}

    public UserSummaryDto(String username, String email, String fitnessLevel, String goal) {
        this.username = username;
        this.email = email;
        this.fitnessLevel = fitnessLevel;
        this.goal = goal;
    }

    public String getUsername() { return username; }
    public String getEmail() { return email; }
    public String getFitnessLevel() { return fitnessLevel; }
    public String getGoal() { return goal; }

    public void setUsername(String username) { this.username = username; }
    public void setEmail(String email) { this.email = email; }
    public void setFitnessLevel(String fitnessLevel) { this.fitnessLevel = fitnessLevel; }
    public void setGoal(String goal) { this.goal = goal; }
}
