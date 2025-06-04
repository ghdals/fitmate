package com.example.demo.dto;

import java.util.List;

public class ExerciseDto {

    private Long id;  // 운동 ID
    private String name;  // 운동 이름
    private String description;  // 운동 설명
    private List<String> muscles;  // 타겟 근육 목록
    private List<String> equipment;  // 사용 장비 목록
    private String category;  // 운동 카테고리명

    // 기본 생성자
    public ExerciseDto() {}

    // Getter / Setter
    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
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
    public List<String> getMuscles() {
        return muscles;
    }
    public void setMuscles(List<String> muscles) {
        this.muscles = muscles;
    }
    public List<String> getEquipment() {
        return equipment;
    }
    public void setEquipment(List<String> equipment) {
        this.equipment = equipment;
    }
    public String getCategory() {
        return category;
    }
    public void setCategory(String category) {
        this.category = category;
    }
}
