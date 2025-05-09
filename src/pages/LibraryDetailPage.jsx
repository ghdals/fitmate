import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Heading } from "../components/heading";

// 부위별 운동 데이터
const exerciseData = {
  어깨: [
    {
      name: "오버헤드 프레스w",
      description: "어깨를 강화하고 전체 상체 힘을 키우는 운동입니다.",
      image: "https://example.com/overhead-press.jpg",
    },
    {
      name: "덤벨 숄더 프레스",
      description: "덤벨을 사용하여 어깨 근육을 고립시키는 운동입니다.",
      image: "https://example.com/dumbbell-shoulder-press.jpg",
    },
    {
      name: "사이드 레터럴 레이즈",
      description: "어깨의 외측을 타겟으로 하는 운동입니다.",
      image: "https://example.com/side-lateral-raise.jpg",
    },
    {
      name: "프론트 레이즈",
      description: "어깨 앞쪽 근육을 집중적으로 운동시키는 동작입니다.",
      image: "https://example.com/front-raise.jpg",
    },
  ],
  가슴: [
    {
      name: "벤치 프레스",
      description: "가슴 근육을 중점적으로 단련하는 대표적인 운동입니다.",
      image: "https://example.com/bench-press.jpg",
    },
    {
      name: "푸쉬업",
      description: "집에서 할 수 있는 기본적인 가슴 운동입니다.",
      image: "https://example.com/push-up.jpg",
    },
  ],
  등: [
    {
      name: "랫 풀다운",
      description: "광배근을 강화해 넓은 등을 만드는 데 효과적입니다.",
      image: "https://example.com/lat-pulldown.jpg",
    },
  ],
  // 필요 시 추가 가능
};

function LibraryDetailPage() {
  const { name } = useParams(); // URL 파라미터로 부위명 받기
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log("현재 파라미터 name:", name);  // 파라미터 값 확인용

    // 파라미터로 받은 name 값이 exerciseData에 있는지 확인
    if (name && exerciseData[name]) {
      setExercises(exerciseData[name]);  // 해당 부위 운동 데이터 설정
    } else {
      // 잘못된 부위명일 경우
      setExercises([]);
    }
  }, [name]);

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* 뒤로 가기 버튼 */}
      <button
        onClick={() => navigate("/library")}
        className="text-blue-500 hover:underline mb-4"
      >
        ← 라이브러리로 돌아가기
      </button>

      {/* 동적으로 부위명 출력 */}
      <Heading>{name} 운동 라이브러리</Heading>
      <p className="text-gray-500 mb-6">
        {name} 부위를 강화할 수 있는 다양한 운동들을 확인해보세요.
      </p>

      {exercises.length === 0 ? (
        <p className="text-gray-500">운동 목록이 없습니다.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {exercises.map((exercise, index) => (
            <div
              key={index}
              className="flex items-center bg-white shadow-sm rounded-lg p-4"
            >
              <img
                src={exercise.image}
                alt={exercise.name}
                className="w-24 h-24 object-cover rounded-md mr-4"
              />
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900">
                  {exercise.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {exercise.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LibraryDetailPage;
