import { useEffect, useState } from "react";
import { Heading } from "../components/heading";
//import { Card } from "../components/card"; // 카드 컴포넌트를 따로 만들었다고 가정
import { Link } from "react-router-dom";

const dummyCategories = [
  { name: "가슴", image: "/images/chest.jpg" },
  { name: "등", image: "/images/back.jpg" },
  { name: "어깨", image: "/images/shoulder.jpg" },
  { name: "팔", image: "/images/arm.jpg" },
  { name: "복부", image: "/images/abs.jpg" },
  { name: "하체", image: "/images/legs.jpg" },
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

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <Link to={`/library/${cat.name}`} key={index}>
            <div className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200 bg-white">
              <img src={cat.image} alt={cat.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h2 className="text-xl font-semibold">{cat.name}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default LibraryPage;
