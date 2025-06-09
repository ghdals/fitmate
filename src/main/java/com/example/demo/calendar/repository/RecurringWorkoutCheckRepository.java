package com.example.demo.calendar.repository;

import com.example.demo.calendar.domain.RecurringWorkoutCheck;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.Optional;

public interface RecurringWorkoutCheckRepository extends MongoRepository<RecurringWorkoutCheck, String> {
    Optional<RecurringWorkoutCheck> findByUserIdAndMonthAndDay(String userId, int month, int day);
    List<RecurringWorkoutCheck> findAllByUserId(String userId);
}