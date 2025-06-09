import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { Heading } from "../components/heading";

// TODO: 외부 JSON 또는 API로 추출 가능
const categoryInfoMap = {
  "10": { name: "Abs", koName: "복부" },
  "8": { name: "Arms", koName: "팔" },
  "12": { name: "Back", koName: "등" },
  "14": { name: "Calves", koName: "종아리" },
  "15": { name: "Chest", koName: "가슴" },
  "11": { name: "Legs", koName: "다리" },
  "9": { name: "Shoulders", koName: "어깨" },
  "13": { name: "Cardio", koName: "유산소" }
};

function LibraryDetailPage() {
  const { id } = useParams();
  const location = useLocation();
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [categoryInfo, setCategoryInfo] = useState(null);
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // 공통 데이터 처리 함수
  const formatExercises = (data) =>
    data.map((exercise) => ({
      id: exercise.id,
      name: exercise.name || "이름 없음",
      description: exercise.description || "설명이 없습니다.",
      imageUrl: exercise.imageUrl || ""
    }));

  useEffect(() => {
    const keyword = new URLSearchParams(location.search).get("keyword");
    setSearchKeyword(keyword || "");
    setIsSearchMode(!!keyword);
    setError("");
    setExercises([]);

    if (keyword) {
      fetchSearchResults(keyword);
    } else if (id) {
      const catInfo = categoryInfoMap[id];
      if (!catInfo) {
        setError("알 수 없는 카테고리입니다.");
        setIsLoading(false);
        return;
      }
      setCategoryInfo(catInfo);
      fetchCategoryExercises(catInfo.name);
    }
  }, [id, location.search]);

  const fetchCategoryExercises = async (categoryName) => {
    setIsLoading(true);
    try {
      const url = `${API_BASE_URL}/api/exercises/category?name=${encodeURIComponent(categoryName)}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      setExercises(formatExercises(data));
    } catch (error) {
      console.error("❗ 카테고리 운동 불러오기 실패:", error);
      if (error.name === "TypeError") {
        setError("서버에 연결할 수 없습니다.");
      } else {
        setError("운동 목록을 불러오는데 실패했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSearchResults = async (keyword) => {
    setIsLoading(true);
    try {
      const url = `${API_BASE_URL}/api/exercises/search?keyword=${encodeURIComponent(keyword)}`;
      const response = await fetch(url);

      if (!response.ok) throw new Error("검색 실패");

      const data = await response.json();
      setExercises(formatExercises(data));
    } catch (error) {
      console.error("❗ 검색 실패:", error);
      if (error.name === "TypeError") {
        setError("서버에 연결할 수 없습니다.");
      } else {
        setError("검색에 실패했습니다.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6 md:p-20">
      {/* 헤더 */}
      <div className="text-center mb-8">
        <Heading>
          {isSearchMode
            ? `"${searchKeyword}" 검색 결과`
            : `${categoryInfo?.koName || "운동"} 라이브러리`}
        </Heading>
        <p className="text-gray-500 mt-2">
          {isSearchMode
            ? `"${searchKeyword}" 관련 운동 목록입니다.`
            : `${categoryInfo?.koName} 부위에 해당하는 운동들을 확인해보세요.`}
        </p>
      </div>

      {/* 에러 */}
      {error && (
        <div className="text-center text-red-500 mb-6 p-4 bg-red-50 rounded-lg">
          {error}
        </div>
      )}

      {/* 로딩 또는 결과 */}
      {isLoading ? (
        <div className="text-center text-gray-500 py-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <p className="mt-2">
            {isSearchMode ? "검색 중..." : "운동 목록을 불러오는 중..."}
          </p>
        </div>
      ) : exercises.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">
            {isSearchMode ? "검색 결과가 없습니다." : "운동 목록이 없습니다."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-8 justify-items-center w-full">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="w-full bg-white rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
            >
              {exercise.imageUrl ? (
                <img
                  src={exercise.imageUrl}
                  alt={exercise.name}
                  className="w-32 h-32 object-cover rounded-lg mb-4"
                />
              ) : (
                <div className="w-32 h-32 flex items-center justify-center bg-gray-100 text-gray-400 rounded-lg mb-4">
                  No Image
                </div>
              )}
              <h3 className="text-lg font-bold mb-2 text-center">{exercise.name}</h3>
              <p className="text-gray-600 text-sm text-center line-clamp-3">
                {exercise.description}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* 총 개수 */}
      {!isLoading && exercises.length > 0 && (
        <div className="mt-8 text-center text-gray-500 text-sm">
          {isSearchMode
            ? `총 ${exercises.length}개의 검색 결과가 있습니다.`
            : `총 ${exercises.length}개의 운동이 있습니다.`}
        </div>
      )}
    </div>
  );
}

export default LibraryDetailPage;
