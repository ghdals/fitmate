package com.example.demo.calendar.controller;

import com.example.demo.calendar.dto.RecurringWorkoutCheckRequest;
import com.example.demo.calendar.dto.RecurringWorkoutCheckResponse;
import com.example.demo.calendar.service.RecurringWorkoutCheckService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/recurring-checks")
public class RecurringWorkoutCheckController {

    private final RecurringWorkoutCheckService service;

    public RecurringWorkoutCheckController(RecurringWorkoutCheckService service) {
        this.service = service;
    }

    @PostMapping
    public void toggleCheck(@RequestBody RecurringWorkoutCheckRequest request) {
        service.toggleCheck(request.getUserId(), request.getMonth(), request.getDay());
    }

    @GetMapping
    public List<RecurringWorkoutCheckResponse> getAllChecks(@RequestParam String userId) {
        return service.getAllChecks(userId);
    }
}