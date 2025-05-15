// LibraryPage.jsx
import { useEffect, useState } from "react";
import { Heading } from "../components/heading";
import { Link } from "react-router-dom";
import absImg from "../assets/abs.svg";
import chestImg from "../assets/chest.svg";
import shoulderImg from "../assets/shoulders.svg";
import backImg from "../assets/back.svg";
import legsImg from "../assets/legs.svg";
import armImg from "../assets/arm.svg";

const categoryImageMap = {
  Chest: chestImg,
  Back: backImg,
  Shoulders: shoulderImg,
  Arms: armImg,
  Abs: absImg,
  Legs: legsImg,
};

function LibraryPage() {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://wger.de/api/v2/exercisecategory/")
      .then((res) => res.json())
      .then((data) => {
        console.log("💡 API 카테고리 목록:", data.results);
        // 예: [{ id: 1, name: 'Chest' }, ...]
        const formatted = data.results.map((cat) => ({
          id: cat.id,
          name: cat.name,
          image: categoryImageMap[cat.name] || "", // 없는 건 비워둠
          description: `${cat.name} 부위의 운동을 확인해보세요.`,
        }));
        setCategories(formatted);
      });

  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Heading>운동 부위별 라이브러리</Heading>
      <p className="text-gray-500 mb-6">운동 부위를 선택해 관련 동작을 확인해보세요.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link to={`/library/${cat.id}`} key={cat.id}>
            <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 bg-white">
              {/* 이미지 없음: 대체 텍스트로 출력 */}
              {cat.image ? (
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-48 object-cover object-center mt-4"
                />
              ) : (
                <div className="flex items-center justify-center h-48 bg-gray-100 text-gray-500 text-xl">
                  {cat.name}
                </div>
              )}

              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-900">{cat.name}</h2>
                <p className="text-sm text-gray-600 mt-2">{cat.description}</p>
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
