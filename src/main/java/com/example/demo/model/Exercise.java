package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "exercises")
public class Exercise {

    @Id
    private String id;  // MongoDB ObjectId

    private String exerciseId;        // Wger API 운동 고유 ID
    private String name;              // 운동 이름 (한국어 번역 포함)
    private String imageUrl;          // 대표 이미지 URL
    private String description;       // 설명 (한국어 번역 포함)
    private List<String> equipments;  // 필요한 장비들
    private List<String> bodyParts;   // 적용 부위 (예: 가슴, 등 등) - 지금은 비워둬도 됨
    private String exerciseType;      // 운동 유형 (선택사항)
    private List<String> targetMuscles;       // 주 타겟 근육 ID
    private List<String> secondaryMuscles;    // 보조 근육 ID
    private String videoUrl;          // 영상 URL (추후 확장 가능)
    private List<String> keywords;    // 키워드 (추후 확장 가능)
    private String overview;          // 개요 (선택사항)
    private List<String> instructions;        // 지침 (선택사항)
    private List<String> exerciseTips;        // 팁 (선택사항)
    private List<String> variations;          // 변형 운동 ID
    private List<String> relatedExerciseIds;  // 연관 운동 ID
    private String categoryId;        // 운동 카테고리 ID
    private String categoryName;

    // === Getters & Setters ===

    public String getId() { return id; }
    public void setId(String id) { this.id = id; }

    public String getExerciseId() { return exerciseId; }
    public void setExerciseId(String exerciseId) { this.exerciseId = exerciseId; }

    public String getName() { return name; }
    public void setName(String name) { this.name = name; }

    public String getImageUrl() { return imageUrl; }
    public void setImageUrl(String imageUrl) { this.imageUrl = imageUrl; }

    public String getDescription() { return description; }
    public void setDescription(String description) { this.description = description; }

    public List<String> getEquipments() { return equipments; }
    public void setEquipments(List<String> equipments) { this.equipments = equipments; }

    public List<String> getBodyParts() { return bodyParts; }
    public void setBodyParts(List<String> bodyParts) { this.bodyParts = bodyParts; }

    public String getExerciseType() { return exerciseType; }
    public void setExerciseType(String exerciseType) { this.exerciseType = exerciseType; }

    public List<String> getTargetMuscles() { return targetMuscles; }
    public void setTargetMuscles(List<String> targetMuscles) { this.targetMuscles = targetMuscles; }

    public List<String> getSecondaryMuscles() { return secondaryMuscles; }
    public void setSecondaryMuscles(List<String> secondaryMuscles) { this.secondaryMuscles = secondaryMuscles; }

    public String getVideoUrl() { return videoUrl; }
    public void setVideoUrl(String videoUrl) { this.videoUrl = videoUrl; }

    public List<String> getKeywords() { return keywords; }
    public void setKeywords(List<String> keywords) { this.keywords = keywords; }

    public String getOverview() { return overview; }
    public void setOverview(String overview) { this.overview = overview; }

    public List<String> getInstructions() { return instructions; }
    public void setInstructions(List<String> instructions) { this.instructions = instructions; }

    public List<String> getExerciseTips() { return exerciseTips; }
    public void setExerciseTips(List<String> exerciseTips) { this.exerciseTips = exerciseTips; }

    public List<String> getVariations() { return variations; }
    public void setVariations(List<String> variations) { this.variations = variations; }

    public List<String> getRelatedExerciseIds() { return relatedExerciseIds; }
    public void setRelatedExerciseIds(List<String> relatedExerciseIds) { this.relatedExerciseIds = relatedExerciseIds; }

    public String getCategoryId() { return categoryId; }
    public void setCategoryId(String categoryId) { this.categoryId = categoryId; }
    public String getCategoryName() { return categoryName; }
    public void setCategoryName(String categoryName) { this.categoryName = categoryName; }
}
