package com.example.demo.repository;

import com.example.demo.model.Routine;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface RoutineRepository extends MongoRepository<Routine, String> {
    List<Routine> findByUserId(String userId);  // 특정 유저 루틴 조회용
}
