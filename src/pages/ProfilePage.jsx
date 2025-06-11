// src/pages/ProfilePage.jsx
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { login } from '../store/slices/authSlice';
import 'react-calendar/dist/Calendar.css';

// 컴포넌트
import ProfileHeader from "../components/ProfileHeader";
import ProfileStats from "../components/ProfileStats";
import WorkoutCalendar from "../components/WorkoutCalendar";
import WorkoutRoutine from "../components/WorkoutRoutine";

// 더미 데이터 정의
const dummyUserData = {
  id: "dummy_user_123",
  name: "홍길동",
  username: "홍길동", // Redux 호환성을 위해 추가
  email: "user@example.com",
  height: "175",
  weight: "72",
  gender: "male",
  exerciseLevel: "beginner",
  level: "beginner", // Redux 호환성을 위해 추가
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
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.user);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [workoutRoutine, setWorkoutRoutine] = useState(dummyWorkoutRoutine);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 통합된 데이터 fetching 로직
  useEffect(() => {
    const fetchAllData = async () => {
      try {
        // 1. 토큰 확인
        const token = localStorage.getItem('authToken');
        
        // 2. Redux에 사용자 데이터가 없거나 토큰이 없으면 더미 데이터 사용
        if (!token || !userData?.id) {
          console.log('토큰 없음 또는 사용자 정보 없음 - 더미 데이터 사용');
          dispatch(login(dummyUserData));
          setWorkoutRoutine(dummyWorkoutRoutine);
          setLoading(false);
          return;
        }

        // 3. API 호출 헤더 설정
        const headers = {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        };

        // 4. 사용자 프로필 데이터 업데이트
        try {
          const profileResponse = await axios.get(
            `${API_BASE_URL}/api/users/${userData.id}`, 
            { headers }
          );
          dispatch(login(profileResponse.data));
        } catch (profileErr) {
          console.warn('프로필 API 호출 실패, 기존 Redux 데이터 유지:', profileErr);
          // Redux에 이미 있는 데이터 유지
        }

        // 5. 운동 루틴 데이터 가져오기
        try {
          const routineResponse = await axios.get(
            `${API_BASE_URL}/api/users/workout-routine`, 
            { headers }
          );
          setWorkoutRoutine(routineResponse.data);
        } catch (routineErr) {
          console.warn('운동 루틴 API 호출 실패, 더미 데이터 사용:', routineErr);
          setWorkoutRoutine(dummyWorkoutRoutine);
        }

      } catch (err) {
        // 전체적인 오류 발생 시 더미 데이터 사용
        console.error('데이터 로드 실패, 더미 데이터로 fallback:', err);
        dispatch(login(dummyUserData));
        setWorkoutRoutine(dummyWorkoutRoutine);
        setError('일부 데이터를 불러오지 못했습니다. 샘플 데이터를 표시합니다.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, [userData?.id, dispatch, API_BASE_URL]);

  // 로딩 상태
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // 사용자 데이터가 없는 경우 (Redux와 더미 데이터 모두 실패)
  if (!userData) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="text-4xl mb-4">🔒</div>
        <h2 className="text-xl font-semibold mb-2">로그인이 필요합니다</h2>
        <p className="text-gray-600 mb-4">프로필 보기를 위해 로그인해주세요</p>
        <a 
          href="/login" 
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          로그인 페이지로 이동
        </a>
      </div>
    );
  }

  // 정상 렌더링
  return (
    <div className="min-h-screen bg-white">
      {/* 에러 메시지 표시 */}
      {error && (
        <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4">
          <p className="font-medium">알림</p>
          <p>{error}</p>
        </div>
      )}

      {/* 프로필 헤더 */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <ProfileHeader 
          userData={{
            name: userData.name || userData.username,
            username: userData.username || userData.name,
            email: userData.email
          }}
        />
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
            <ProfileStats 
              userData={{
                goal: dummyUserData.goal,
                height: dummyUserData.height,
                weight: dummyUserData.weight,
                duration: dummyUserData.duration,
                frequency: dummyUserData.frequency,

              }}
            />
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