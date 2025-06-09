import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"; 
import { Heading } from "../components/heading";

function LibraryDetailPage() {
    const { id } = useParams(); // 카테고리 ID
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();
    const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

    useEffect(() => {
        console.log("현재 파라미터 id:", id, typeof id);

        if (!id) {
            console.warn("❗ id가 없음. useEffect 종료");
            return;
        }

        const fetchExercises = async () => {
            try {
                const categoryId = Number(id);
                console.log("변환된 categoryId:", categoryId);

                const response = await axios.get(`${API_BASE_URL}/exercises/category/${categoryId}`);
                const data = response.data;
                console.log("운동 데이터:", data.results);
                
                const formatted = data.results.map((ex) => {
                    const translated = ex.translations?.[0];

                    return {
                        name: translated?.name || "이름 없음",
                        description: translated?.description || "설명이 없습니다.",
                        image: "", // 필요 시 추가
                    };
                });

                setExercises(formatted);
            } catch (error) {
                console.error("운동 데이터 불러오기 오류:", error);
                setExercises([]);
            }
        };
        fetchExercises();
    }, [id, API_BASE_URL]);

    return (
        <div className="max-w-6xl mx-auto p-20">
            
            <div className="text-center mb-8">
                <Heading>운동 라이브러리</Heading>
                <p className="text-gray-500 mt-2">
                    이 부위에 해당하는 운동들을 확인해보세요.
                </p>
            </div>

            {exercises.length === 0 ? (
                <p className="text-gray-500 text-center">운동 목록이 없습니다.</p>
            ) : (
                <div className="flex flex-col gap-4">
                    {exercises.map((exercise, index) => (
                        <div
                            key={index}
                            className="flex items-center bg-white shadow-sm rounded-lg p-4"
                        >
                            <div className="w-24 h-24 bg-gray-200 rounded-md flex items-center justify-center mr-4 text-sm text-gray-500">
                                No Image
                            </div>
                            <div className="flex-1">
                                <h3 className="text-lg font-semibold text-gray-900">
                                    {exercise.name}
                                </h3>
                                <p
                                    className="text-sm text-gray-600 mt-1"
                                    dangerouslySetInnerHTML={{ __html: exercise.description }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LibraryDetailPage;