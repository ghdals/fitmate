//src/pages/ResultPage.jsx

import { useEffect, useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';
import { Button } from '../components/button';
import { AlertTriangle } from 'lucide-react';


// Mock 데이터 호출 함수 (OpenAI API 대체)
const mockFetchUserRoutine = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          day: '월요일',
          title: '상체 근력 강화',
          duration: '60-75분',
          exercises: [
            {
              name: '벤치프레스',
              sets: 4,
              reps: [8, 8, 6, 6],
              weight: '체중의 0.8-1.0배',
              rest: '2-3분',
              notes: '가슴을 열고 어깨뼈를 모아주세요'
            },
            {
              name: '인클라인 덤벨프레스',
              sets: 3,
              reps: [10, 10, 8],
              weight: '적당한 무게',
              rest: '90초',
              notes: '30도 각도로 설정'
            },
            {
              name: '푸시업',
              sets: 3,
              reps: [15, 12, 10],
              weight: '자체중량',
              rest: '60초',
              notes: '무릎을 바닥에 대고 시작해도 됩니다'
            }
          ]
        },
        {
          day: '수요일',
          title: '하체 근력 및 코어',
          duration: '50-65분',
          exercises: [
            {
              name: '스쿼트',
              sets: 4,
              reps: [12, 10, 8, 8],
              weight: '체중의 0.5-0.7배',
              rest: '2-3분',
              notes: '무릎이 발가락을 넘지 않도록 주의'
            },
            {
              name: '데드리프트',
              sets: 3,
              reps: [8, 6, 6],
              weight: '체중의 1.0-1.2배',
              rest: '3분',
              notes: '허리를 곧게 펴고 힙을 먼저 들어올리세요'
            },
            {
              name: '런지',
              sets: 3,
              reps: [10, 10, 10],
              weight: '덤벨 5-10kg',
              rest: '90초',
              notes: '양쪽 다리 번갈아가며'
            }
          ]
        },
        {
          day: '금요일',
          title: '전신 근력 및 유산소',
          duration: '45-60분',
          exercises: [
            {
              name: '풀업 (또는 렛풀다운)',
              sets: 3,
              reps: [8, 6, 5],
              weight: '자체중량 (또는 적당한 무게)',
              rest: '2분',
              notes: '천천히 올라가고 천천히 내려오세요'
            },
            {
              name: '버피',
              sets: 3,
              reps: [10, 8, 8],
              weight: '자체중량',
              rest: '90초',
              notes: '빠르게 하지 말고 정확한 폼으로'
            },
            {
              name: '플랭크',
              sets: 3,
              reps: ['30초', '45초', '60초'],
              weight: '자체중량',
              rest: '90초',
              notes: '몸을 일직선으로 유지'
            }
          ]
        }
      ]);
    }, 1200);
  });
};

const ResultPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [routine, setRoutine] = useState([]);

  const fetchRoutine = async () => {
    setIsLoading(true);
    const data = await mockFetchUserRoutine();
    setRoutine(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRoutine();
  }, []);

  if (isLoading) return <LoadingSpinner />;

  return (
    <div className="min-h-screen bg-white px-4 py-10">
      <div className="max-w-5xl mx-auto">
        {/* 타이틀 */}
        <h1 className="text-4xl font-bold text-center text-slate-600 mb-2">
          당신만을 위한 맞춤 루틴
        </h1>
        <p className="text-center text-slate-600 text-lg mb-10">
          개인 조건을 기반으로 설계된 3일 프로그램
        </p>

        {/* 요약 통계 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-teal-50 border border-teal-100 p-4 rounded-xl shadow-sm text-center">
            <p className="text-3xl font-bold text-teal-600">{routine.length}</p>
            <p className="text-slate-600 text-sm">주간 세션 수</p>
          </div>
          <div className="bg-purple-50 border border-purple-100 p-4 rounded-xl shadow-sm text-center">
            <p className="text-3xl font-bold text-purple-600">
              {routine.reduce((sum, day) => sum + day.exercises.length, 0)}
            </p>
            <p className="text-slate-600 text-sm">총 운동 종목</p>
          </div>
        </div>

        {/* 루틴 상세 카드 */}
        <div className="space-y-8">
          {routine.map((day, idx) => (
            <div key={idx} className="rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
              <div className="bg-cyan-300 p-6">
                <h2 className="text-2xl font-bold">{day.day}</h2>
                <p className="text-lg">{day.title}</p>
                <p className="text-sm mt-1 opacity-90">소요시간: {day.duration}</p>
              </div>
              <div className="bg-white p-6 space-y-4">
                {day.exercises.map((ex, exIdx) => (
                  <div key={exIdx} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">{ex.name}</h3>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>세트:</strong> {ex.sets}세트 × {ex.reps.join(', ')}회</li>
                      <li><strong>중량:</strong> {ex.weight}</li>
                      <li><strong>휴식:</strong> {ex.rest}</li>
                    </ul>
                    {ex.notes && (
                      <div className="mt-3 bg-blue-50 text-blue-800 text-sm p-3 rounded-md border border-blue-200">
                        💡 {ex.notes}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 액션 버튼 */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
          <Button
            onClick={fetchRoutine}
            className="px-6 py-3 rounded-xl shadow"
          >
            🔄 새로운 루틴 보기
          </Button>
          <Button
            onClick={() => window.print()}
            className="px-6 py-3 rounded-xl shadow"
          >
            🖨️ 인쇄하기
          </Button>
        </div>

        {/* 주의사항 */}
        <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <div className="flex items-center gap-2 mb-2 text-yellow-800 font-semibold text-lg">
            <AlertTriangle size={20} />
            운동 시 주의사항
          </div>
          <ul className="list-none text-sm text-yellow-700 space-y-1">
            <li>운동 전후 충분한 스트레칭을 실시하세요</li>
            <li>자신의 체력에 맞는 중량으로 시작하세요</li>
            <li>올바른 자세가 가장 중요합니다</li>
            <li>충분한 수분 섭취와 휴식을 취하세요</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
