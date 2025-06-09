// components/WorkoutRoutine.jsx
import React from 'react';
import { Text, Strong } from "../components/text";

const WorkoutRoutine = ({ workoutRoutine }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold mb-4">
        <span className="px-2 py-1">
          운동 루틴
        </span>
      </h2>
      <div className="space-y-4">
        {workoutRoutine.map((day, index) => (
          <div key={index} className="border-l-4 border-blue-200 pl-4">
            <h3 className="text-lg font-semibold text-blue-800 mb-2">{day.day}</h3>
            <ul className="space-y-2">
              {day.exercises.map((exercise, exIndex) => (
                <li key={exIndex} className="flex justify-between">
                  <Text>{exercise.name}</Text>
                  <Strong>{exercise.sets}세트 {exercise.reps}회</Strong>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutRoutine;