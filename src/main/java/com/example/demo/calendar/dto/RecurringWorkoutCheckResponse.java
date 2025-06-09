package com.example.demo.calendar.dto;

public class RecurringWorkoutCheckResponse {
    private int month;
    private int day;

    public RecurringWorkoutCheckResponse(int month, int day) {
        this.month = month;
        this.day = day;
    }

    public int getMonth() { return month; }
    public void setMonth(int month) { this.month = month; }

    public int getDay() { return day; }
    public void setDay(int day) { this.day = day; }
}