package com.example.demo.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "exercises")
public class Exercise {

    @Id
    private String id;  // MongoDB ObjectId

    private String exerciseId;  // 외부에서 받은 운동 고유 ID
    private String name;
    private String imageUrl;
    private String description;
    private List<String> equipments;
    private List<String> bodyParts;
    private String exerciseType;
    private List<String> targetMuscles;
    private List<String> secondaryMuscles;
    private String videoUrl;
    private List<String> keywords;
    private String overview;
    private List<String> instructions;
    private List<String> exerciseTips;
    private List<String> variations;
    private List<String> relatedExerciseIds;

    // 새로 추가한 필드
    private String categoryId;

    // 기존 getter/setter + 새 필드 getter/setter

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getExerciseId() {
        return exerciseId;
    }

    public void setExerciseId(String exerciseId) {
        this.exerciseId = exerciseId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getEquipments() {
        return equipments;
    }

    public void setEquipments(List<String> equipments) {
        this.equipments = equipments;
    }

    public List<String> getBodyParts() {
        return bodyParts;
    }

    public void setBodyParts(List<String> bodyParts) {
        this.bodyParts = bodyParts;
    }

    public String getExerciseType() {
        return exerciseType;
    }

    public void setExerciseType(String exerciseType) {
        this.exerciseType = exerciseType;
    }

    public List<String> getTargetMuscles() {
        return targetMuscles;
    }

    public void setTargetMuscles(List<String> targetMuscles) {
        this.targetMuscles = targetMuscles;
    }

    public List<String> getSecondaryMuscles() {
        return secondaryMuscles;
    }

    public void setSecondaryMuscles(List<String> secondaryMuscles) {
        this.secondaryMuscles = secondaryMuscles;
    }

    public String getVideoUrl() {
        return videoUrl;
    }

    public void setVideoUrl(String videoUrl) {
        this.videoUrl = videoUrl;
    }

    public List<String> getKeywords() {
        return keywords;
    }

    public void setKeywords(List<String> keywords) {
        this.keywords = keywords;
    }

    public String getOverview() {
        return overview;
    }

    public void setOverview(String overview) {
        this.overview = overview;
    }

    public List<String> getInstructions() {
        return instructions;
    }

    public void setInstructions(List<String> instructions) {
        this.instructions = instructions;
    }

    public List<String> getExerciseTips() {
        return exerciseTips;
    }

    public void setExerciseTips(List<String> exerciseTips) {
        this.exerciseTips = exerciseTips;
    }

    public List<String> getVariations() {
        return variations;
    }

    public void setVariations(List<String> variations) {
        this.variations = variations;
    }

    public List<String> getRelatedExerciseIds() {
        return relatedExerciseIds;
    }

    public void setRelatedExerciseIds(List<String> relatedExerciseIds) {
        this.relatedExerciseIds = relatedExerciseIds;
    }

    public String getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(String categoryId) {
        this.categoryId = categoryId;
    }
}
