package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;

@Document(collection = "users")
public class User {

    @Id
    private String id;

    private String username;
    private String email;
    private String password;
    private int age;
    private String gender;
    private String fitness_level;
    private Date created_at;
    private String profile_picture;
    private String goal;  
    private String frequency_per_week; 
    private String duration_per_session;
    private double height;
    private double weight;
   

    // Getter
    public String getId() {
        return id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public int getAge() {
        return age;
    }

    public String getGender() {
        return gender;
    }

    public String getFitness_level() {
        return fitness_level;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public String getProfile_picture() {
        return profile_picture;
    }
    public String getGoal() {
        return goal;
    }

    public String getFrequency_per_week() {
        return frequency_per_week;
    }

    public String getDuration_per_session() {
        return duration_per_session;
    }
    // Setter
    public void setUsername(String username) {
        this.username = username;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public void setFitness_level(String fitness_level) {
        this.fitness_level = fitness_level;
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public void setProfile_picture(String profile_picture) {
        this.profile_picture = profile_picture;
    }
    public void setGoal(String goal) {
        this.goal = goal;
    }

    public void setFrequency_per_week(String frequency_per_week) {
        this.frequency_per_week = frequency_per_week;
    }

    public void setDuration_per_session(String duration_per_session) {
        this.duration_per_session = duration_per_session;
    }
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

}
