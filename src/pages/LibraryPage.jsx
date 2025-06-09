// LibraryPage.jsx
import { useEffect, useState } from "react";
import { Heading } from "../components/heading";
import { Link, useNavigate } from "react-router-dom";
import absImg from "../assets/abs.svg";
import chestImg from "../assets/chest.svg";
import shoulderImg from "../assets/shoulders.svg";
import backImg from "../assets/back.svg";
import legsImg from "../assets/legs.svg";
import armImg from "../assets/arm.svg";
import calvesImg from "../assets/calves.svg";
import cardioImg from "../assets/cardio.png";

// 카테고리 ID를 기반으로 한 매핑 테이블
const categoryInfoMap = {
  "10": { name: "Abs", koName: "복부", image: absImg },
  "8": { name: "Arms", koName: "팔", image: armImg },
  "12": { name: "Back", koName: "등", image: backImg },
  "14": { name: "Calves", koName: "종아리", image: calvesImg },
  "15": { name: "Chest", koName: "가슴", image: chestImg },
  "11": { name: "Legs", koName: "다리", image: legsImg },
  "9": { name: "Shoulders", koName: "어깨", image: shoulderImg },
  "13": { name: "Cardio", koName: "유산소", image: cardioImg }
};

function LibraryPage() {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [categories, setCategories] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  // 전체 운동 데이터 가져오기
  useEffect(() => {
    fetchExercises();
  }, []);

  const fetchExercises = async () => {
    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch(`${API_BASE_URL}/api/exercises`);
      if (!response.ok) throw new Error("API 호출 실패");
      
      const data = await response.json();
      console.log("💡 API 운동 목록:", data);
      
      // 카테고리별로 그룹화
      const categoryGroups = groupByCategory(data);
      setCategories(categoryGroups);
      
    } catch (error) {
      console.error("운동 데이터 가져오기 실패:", error);
      setError("운동 데이터를 불러오는데 실패했습니다.");
      setCategories([]);
    } finally {
      setIsLoading(false);
    }
  };

  // 카테고리별로 운동 그룹화
  const groupByCategory = (exerciseData) => {
    const groups = {};
    
    exerciseData.forEach(exercise => {
      const catId = exercise.categoryId;
      const catInfo = categoryInfoMap[catId] || { name: "기타", koName: "기타", image: "" };
      
      if (!groups[catId]) {
        groups[catId] = {
          id: catId,
          name: catInfo.koName,
          image: catInfo.image,
          description: `${catInfo.koName} 부위의 운동을 확인해보세요.`,
          exerciseCount: 0
        };
      }
      groups[catId].exerciseCount++;
    });
    
    return Object.values(groups);
  };

  // 검색 기능
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchKeyword.trim()) {
      fetchExercises(); // 검색어가 없으면 전체 목록 표시
      return;
    }
    navigate(`/library/search?keyword=${encodeURIComponent(searchKeyword)}`);

    setIsLoading(true);
    setError("");
    
    try {
      const response = await fetch(
        `${API_BASE_URL}/api/exercises/search?keyword=${encodeURIComponent(searchKeyword)}`
      );
      if (!response.ok) throw new Error("검색 실패");
      
      const data = await response.json();
      console.log("🔍 검색 결과:", data);
      
      const categoryGroups = groupByCategory(data);
      setCategories(categoryGroups);
      
    } catch (error) {
      console.error("검색 실패:", error);
      setError("검색에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-20">
      {/* 제목 */}
      <div className="text-center mb-8">
        <Heading>운동 가이드</Heading>
      </div>

      {/* 검색 기능 */}
      <form onSubmit={handleSearch} className="max-w-md mx-auto mb-10">
        <div className="flex">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              className="block w-full h-12 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-l-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="데드리프트, 스쿼트 등..."
            />
          </div>
          <button
            type="submit"
            className="h-12 px-4 text-sm font-medium text-white bg-blue-600 rounded-r-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 transition-colors"
          >
            Search
          </button>
        </div>
      </form>

      {/* 안내 문구 */}
      <p className="text-gray-500 mb-6 text-center">
        {searchKeyword ? 
          `"${searchKeyword}" 검색 결과입니다.` : 
          "운동 부위를 선택해 관련 동작을 확인해보세요."
        }
      </p>

      {/* 에러 메시지 */}
      {error && (
        <div className="text-center text-red-500 mb-6 p-4 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      {/* 로딩 상태 */}
      {isLoading ? (
        <div className="text-center text-gray-500 py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2">운동 데이터를 불러오는 중...</p>
        </div>
      ) : (
        /* 카테고리 그리드 */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.length === 0 ? (
            <div className="col-span-full text-center text-gray-500 py-8">
              {searchKeyword ? "검색 결과가 없습니다." : "운동 데이터가 없습니다."}
            </div>
          ) : (
            categories.map((category) => (
              <Link to={`/library/${category.id}`} key={category.id}>
                <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105 bg-white cursor-pointer">
                  {/* 카테고리 이미지 */}
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover object-center"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-48 bg-gradient-to-br from-blue-50 to-blue-100 text-blue-600 text-xl font-semibold">
                      {category.name}
                    </div>
                  )}

                  {/* 카테고리 정보 */}
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h2 className="text-xl font-semibold text-gray-900">
                        {category.name}
                      </h2>
                      <span className="text-sm text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                        {category.exerciseCount}개
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <div className="text-blue-600 hover:text-blue-800 font-medium transition-colors">
                      자세히 보기 →
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default LibraryPage;
