import { useEffect, useState } from "react";
import { Heading } from "../components/heading";
import { Link } from "react-router-dom";

// 이미지 파일들을 import
import chestImg from '../assets/chest.svg';
import backImg from '../assets/back.svg';
import shoulderImg from '../assets/shoulders.svg';
import armImg from '../assets/arm.svg';
import absImg from '../assets/abs.svg';
import legsImg from '../assets/legs.svg';

const dummyCategories = [
  { name: "가슴", image: chestImg, description: "가슴 근육을 강화하고 아름다운 라인을 만들기 위한 운동입니다." },
  { name: "등", image: backImg, description: "등 근육을 강화하여 자세를 개선하고 상체 힘을 키우는 운동입니다." },
  { name: "어깨", image: shoulderImg, description: "어깨 근육을 강화하여 유연성과 안정성을 향상시키는 운동입니다." },
  { name: "팔", image: armImg, description: "팔 근육을 집중적으로 단련하여 상체 균형을 맞추는 운동입니다." },
  { name: "복부", image: absImg, description: "복근을 만들고 허리 라인을 다듬는 운동으로 체지방을 줄이는 데 도움이 됩니다." },
  { name: "하체", image: legsImg, description: "하체 근육을 발달시켜 전신 균형을 맞추고 체력을 향상시키는 운동입니다." },
];

function LibraryPage() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // 실제 API 요청 자리
    setCategories(dummyCategories);
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Heading>운동 부위별 라이브러리</Heading>
      <p className="text-gray-500 mb-6">운동 부위를 선택해 관련 동작을 확인해보세요.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <Link to={`/library/${cat.name}`} key={index}>

            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 bg-white">
              <img src={cat.image} alt={cat.name} className="w-full h-48 object-cover object-center mt-4" />
              <div className="p-4">
                {/* 부위 이름 */}
                <h2 className="text-xl font-semibold text-gray-900">{cat.name}</h2>
                {/* 부위 설명 */}
                <p className="text-sm text-gray-600 mt-2">{cat.description}</p>
                {/* 자세히 보기 버튼 */}
                <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  자세히 보기
                </button>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LibraryPage;
