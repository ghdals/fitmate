package com.example.demo.calendar.dto;

public class RecurringWorkoutCheckRequest {
    private String userId;
    private int month;
    private int day;

    public String getUserId() { return userId; }
    public void setUserId(String userId) { this.userId = userId; }

    public int getMonth() { return month; }
    public void setMonth(int month) { this.month = month; }

    public int getDay() { return day; }
    public void setDay(int day) { this.day = day; }
}