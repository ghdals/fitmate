package com.example.demo.calendar.service;

import com.example.demo.calendar.domain.RecurringWorkoutCheck;
import com.example.demo.calendar.dto.RecurringWorkoutCheckRequest;
import com.example.demo.calendar.dto.RecurringWorkoutCheckResponse;
import com.example.demo.calendar.repository.RecurringWorkoutCheckRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RecurringWorkoutCheckService {

    private final RecurringWorkoutCheckRepository repository;

    public RecurringWorkoutCheckService(RecurringWorkoutCheckRepository repository) {
        this.repository = repository;
    }

    public void toggleCheck(String userId, int month, int day) {
        var existing = repository.findByUserIdAndMonthAndDay(userId, month, day);
        if (existing.isPresent()) {
            repository.delete(existing.get());
        } else {
            RecurringWorkoutCheck check = new RecurringWorkoutCheck();
            check.setUserId(userId);
            check.setMonth(month);
            check.setDay(day);
            repository.save(check);
        }
    }

    public List<RecurringWorkoutCheckResponse> getAllChecks(String userId) {
        return repository.findAllByUserId(userId).stream()
                .map(check -> new RecurringWorkoutCheckResponse(check.getMonth(), check.getDay()))
                .collect(Collectors.toList());
    }
}