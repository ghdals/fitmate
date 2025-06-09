import React from 'react';
import { Text } from "../components/text";

const ProfileStats = ({ userData }) => {
  // BMI 계산 함수
  const calculateBMI = () => {
    const height = parseFloat(userData.height);
    const weight = parseFloat(userData.weight);
    if (height <= 0 || weight <= 0) return 0;
    return (weight / ((height / 100) * (height / 100))).toFixed(1);
  };

  // BMI 범주 분류 함수
  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "저체중";
    else if (bmi < 23) return "정상";
    else if (bmi < 25) return "과체중";
    else if (bmi < 30) return "비만";
    else return "고도 비만";
  };

  const bmi = calculateBMI();
  const bmiCategory = getBMICategory(bmi);

  // BMI 프로그레스 바 계산
  const getProgressWidth = (bmi) => {
    if (bmi < 18.5) return '0%';
    else if (bmi < 23) return '25%';
    else if (bmi < 25) return '50%';
    else if (bmi < 30) return '75%';
    else return '100%';
  };

  const getProgressColor = (category) => {
    switch (category) {
      case '저체중': return 'bg-red-500';
      case '정상': return 'bg-green-500';
      case '과체중': return 'bg-yellow-500';
      case '비만': return 'bg-orange-500';
      case '고도 비만': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  // BMI 계산 설명 텍스트
  const bmiDescription = `BMI는 키와 몸무게로 계산한 
  대략적인 체질량지수예요.
  계산식: 체중(kg) ÷ 키(m)²
  예: 70kg, 175cm의 경우
  BMI = 70 ÷ (1.75 × 1.75) = 22.86`;

  return (
    <div className="space-y-4">
      {/* BMI 정보 */}
      <div className="bg-blue-50 p-4 rounded-lg relative">
        <h2 className="text-lg font-semibold mb-2">BMI 지수</h2>
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-2xl font-bold text-blue-600">{bmi}</p>
            <p className="text-sm text-gray-600">{bmiCategory}</p>
          </div>
          <div className="relative">
            <div className="group inline-block">
              <div className="bg-blue-100 rounded-full p-2 hover:bg-blue-200 cursor-help">
                <svg
                  className="w-6 h-6 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 bottom-full mb-4 px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200 text-gray-600 text-sm whitespace-pre-line min-w-[300px] pointer-events-none z-10">
                {bmiDescription}
              </div>
            </div>
          </div>
        </div>

        {/* BMI 범주 시각화 */}
        <div className="mt-2">                      
          <div className="flex justify-between text-xs text-gray-600 mb-2">
            <span className="opacity-0">-</span>
            <span>18.5 미만<br/>저체중</span>
            <span>18.5~23<br/>정상</span>
            <span>23~25<br/>과체중</span>
            <span>25~30<br/>비만</span>
            <span>30 이상<br/>고도 비만</span>
            <span className="opacity-0">-</span>
          </div>
          
          <div className="w-full h-2 bg-gray-200 rounded-full">
            <div 
              className="h-full rounded-full transition-all duration-300 bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
              style={{ width: getProgressWidth(bmi) }}
            ></div>
          </div>

          {/* BMI 범주 설명 */}
          <div className="mt-2 text-sm text-gray-600">
            <p className="font-semibold">{bmiCategory}에 대한 설명:</p>
            <p className="mt-1">
              {(() => {
                switch (bmiCategory) {
                  case '저체중':
                    return '체중이 너무 적어 건강에 좋지 않을 수 있어요. 영양 섭취를 늘려 체중을 늘리는 것이 좋을 수 있습니다.';
                  case '정상':
                    return '체중이 건강한 범위에 있어요. 현재 생활 습관을 유지하는 것이 좋습니다.';
                  case '과체중':
                    return '체중이 정상 범위를 약간 초과하고 있어요. 건강한 식사와 운동으로 체중을 관리하는 것이 좋습니다.';
                  case '비만':
                    return '체중이 비만 범주에 있어요. 건강을 위해 체중 감량이 필요할 수 있습니다.';
                  case '고도 비만':
                    return '체중이 고도 비만 범주에 있어요. 건강을 위해 전문가와 상담하여 체중 감량 계획을 세우는 것이 좋습니다.';
                  default:
                    return '';
                }
              })()}
            </p>
          </div>
        </div>
      </div>

      {/* 운동 통계 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold text-gray-600">주 운동 횟수</h3>
          <p className="text-2xl font-bold">{userData.frequency}회</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold text-gray-600">운동 시간</h3>
          <p className="text-2xl font-bold">{userData.duration}분</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold text-gray-600">운동 목표</h3>
          <p className="text-2xl font-bold">
            {userData.goal === 'weight_loss' ? '체중 감량' : 
             userData.goal === 'muscle_gain' ? '근육 증가' : '유지'}
          </p>
        </div>
      </div>

      {/* 운동 성과 */}
      <div className="mt-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-sm font-semibold text-gray-600 mb-2">운동 성과</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Text>이번 주 운동 횟수</Text>
              <span className="font-medium">{userData.weeklyFrequency || 0}회</span>
            </div>
            <div className="flex justify-between items-center">
            <Text>이번 주 운동 시간</Text>
              <span className="font-medium">{userData.weeklyDuration || 0}분</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;