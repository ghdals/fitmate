import React, { useState } from 'react';

// 2. 외부 라이브러리 임포트
import 'react-calendar/dist/Calendar.css';

// 3. 컴포넌트 임포트
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import WorkoutCalendar from "../components/WorkoutCalendar";
import WorkoutRoutine from "../components/WorkoutRoutine";

const ProfilePage = () => {
  const [userData, setUserData] = useState({
    name: "홍길동",
    email: "user@example.com",
    height: "175",
    weight: "70",
    gender: "male",
    exerciseLevel: "beginner",
    goal: "weight_loss",
    frequency: "3",
    duration: "60"
  });

  const [selectedDate, setSelectedDate] = useState(new Date());

  const workoutRoutine = [
    {
      day: "월요일",
      exercises: [
        { name: "벤치프레스", sets: 3, reps: 10 },
        { name: "스쿼트", sets: 3, reps: 12 },
        { name: "데드리프트", sets: 3, reps: 8 }
      ]
    },
    {
      day: "수요일",
      exercises: [
        { name: "푸시업", sets: 3, reps: 15 },
        { name: "풀업", sets: 3, reps: 10 },
        { name: "덤벨컬", sets: 3, reps: 12 }
      ]
    },
    {
      day: "금요일",
      exercises: [
        { name: "런지", sets: 3, reps: 12 },
        { name: "플랭크", sets: 3, reps: 30 },
        { name: "크런치", sets: 3, reps: 20 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 프로필 헤더 */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <ProfileHeader userData={userData} />
      </div>

      {/* 캘린더와 오늘의 운동 */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <WorkoutCalendar 
          workoutRoutine={workoutRoutine} 
          selectedDate={selectedDate} 
          setSelectedDate={setSelectedDate}
        />
      </div>

      {/* 프로필 정보 섹션 */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 프로필 통계 */}
          <div className="bg-white rounded-lg shadow p-6">
            <ProfileStats userData={userData} />
          </div>

          {/* 운동 루틴 */}
          <div className="bg-white rounded-lg shadow p-6">
            <WorkoutRoutine workoutRoutine={workoutRoutine} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;