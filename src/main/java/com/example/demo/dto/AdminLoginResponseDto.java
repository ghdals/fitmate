package com.example.demo.dto;

public class AdminLoginResponseDto {
    private String username;
    private String email;
    private String role;

    public AdminLoginResponseDto() {}

    public AdminLoginResponseDto(String username, String email, String role) {
        this.username = username;
        this.email = email;
        this.role = role;
    }

    public String getUsername() { return username; }
    public String getEmail() { return email; }
    public String getRole() { return role; }

    public void setUsername(String username) { this.username = username; }
    public void setEmail(String email) { this.email = email; }
    public void setRole(String role) { this.role = role; }
}
