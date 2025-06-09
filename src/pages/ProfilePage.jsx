import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'react-calendar/dist/Calendar.css';
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import WorkoutCalendar from "../components/WorkoutCalendar";
import WorkoutRoutine from "../components/WorkoutRoutine";

// 더미 데이터 정의
const dummyUserData = {
  name: "홍길동",
  email: "user@example.com",
  height: "175",
  weight: "70",
  gender: "male",
  exerciseLevel: "beginner",
  goal: "weight_loss",
  frequency: "3",
  duration: "60"
};

const dummyWorkoutRoutine = [
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

const ProfilePage = () => {
  const [userData, setUserData] = useState(dummyUserData);
  const [workoutRoutine, setWorkoutRoutine] = useState(dummyWorkoutRoutine);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // API 호출 시도
        const token = localStorage.getItem('authToken');
        if (!token) {
          // 로그인 토큰이 없을 때 더미 데이터 사용
          setUserData(dummyUserData);
          setWorkoutRoutine(dummyWorkoutRoutine);
          return;
        }

        const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
        const headers = {
          Authorization: `Bearer ${token}`
        };

        // 사용자 프로필 데이터 가져오기
        const profileResponse = await axios.get(`${API_BASE_URL}/users/profile`, { headers });
        setUserData(profileResponse.data);

        // 운동 루틴 데이터 가져오기
        const routineResponse = await axios.get(`${API_BASE_URL}/users/workout-routine`, { headers });
        setWorkoutRoutine(routineResponse.data);
      } catch (err) {
        // API 호출 실패 시 더미 데이터 사용
        console.error('데이터 로드 실패:', err);
        setUserData(dummyUserData);
        setWorkoutRoutine(dummyWorkoutRoutine);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) return <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>;

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