import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Heading } from "../components/heading";

function LibraryDetailPage() {
    const { id } = useParams(); // 카테고리 ID
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("현재 파라미터 id:", id, typeof id);

        if (!id) {
            console.warn("❗ id가 없음. useEffect 종료");
            return;
        }

        const categoryId = Number(id);
        console.log("변환된 categoryId:", categoryId);

        const url = `https://wger.de/api/v2/exerciseinfo/?category=${categoryId}&language=10`;
        console.log("요청 URL:", url);

        fetch(url)
            .then((res) => {
                console.log("응답 상태:", res.status);
                return res.json();
            })
            .then((data) => {
                console.log("첫 번째 결과:", data.results[0]);

                const formatted = data.results.map((ex) => {
                    const translated = ex.translations?.[0];

                    return {
                        name: translated?.name || "이름 없음",
                        description: translated?.description || "설명이 없습니다.",
                        image: "", // 필요 시 추가
                    };
                });

                setExercises(formatted);
            })

            .catch((err) => {
                console.error("❗fetch 실패:", err);
                setExercises([]);
            });
    }, [id]);




    return (
        <div className="max-w-4xl mx-auto p-6">
            <button
                onClick={() => navigate("/library")}
                className="text-blue-500 hover:underline mb-4"
            >
                ← 라이브러리로 돌아가기
            </button>

            <Heading>운동 라이브러리</Heading>
            <p className="text-gray-500 mb-6">
                이 부위에 해당하는 운동들을 확인해보세요.
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
    console.log("id 값:", id, typeof id);
}


export default LibraryDetailPage;
