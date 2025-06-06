import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { Text, Strong } from '../components/text';

const WorkoutCalendar = ({ workoutRoutine, selectedDate, setSelectedDate }) => {
  // 선택된 날짜의 요일을 구하는 함수
  const getDayOfWeek = (date) => {
    const days = ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"];
    return days[date.getDay()];
  };

  // 선택된 날짜의 운동 정보를 구하는 함수
  const getSelectedDayExercises = () => {
    const dayOfWeek = getDayOfWeek(selectedDate);
    const routine = workoutRoutine.find(r => r.day === dayOfWeek);
    return routine ? routine.exercises : [];
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* 캘린더 섹션 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          <span className="bg-blue-50 px-2 py-1 rounded-full">
            캘린더
          </span>
        </h2>
        <div className="flex justify-center">
          <Calendar 
            value={selectedDate} 
            onChange={setSelectedDate} 
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* 오늘의 운동 섹션 */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-blue-800 mb-4">
          <span className="bg-blue-50 px-2 py-1 rounded-full">
            오늘의 운동
          </span>
        </h2>
        <div className="space-y-4">
          {getSelectedDayExercises().map((exercise, index) => (
            <div key={index} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
              <Text className="font-medium">{exercise.name}</Text>
              <Strong className="text-blue-800">{exercise.sets}세트 × {exercise.reps}회</Strong>
            </div>
          ))}
          
          {/* 운동 목록과 팁 사이의 여백 */}
          <div className="h-7" />

          {/* 운동이 있는 날만 팁 표시 */}
          {getSelectedDayExercises().length > 0 && (
            <div className="p-3 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800 font-semibold">운동 팁</p>
              <Text>
                단백질 보충은 근육 성장에 도움이 될 수 있어요.
              </Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkoutCalendar;
