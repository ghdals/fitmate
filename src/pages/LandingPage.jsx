// src/pages/LandingPage.jsx

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.svg";
import { Button } from "../components/button"

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // 로그인 상태 확인

  const handleStartClick = () => {
    if (isLoggedIn===true) {
      navigate("/step1");
    } else {
      navigate("/register");
    }
  };

  return (
    <>
      <section className="bg-gradient-to-r from-blue-200 to-cyan-200">
        <div className="flex flex-col items-center justify-center h-screen w-full">
          <p className="text-9xl font-mono">Fitmate</p>
          <img src={logo} alt="동양 캐릭터" className="h-50 mt-4" />
          <p className="mt-4 text-lg">당신을 위한 맞춤형 운동 플랜</p>
          <Button type="button"
            onClick={handleStartClick}
            className="mt-6 px-6 py-3 shadow-md"
          >
            시작하기
          </Button>
        </div>

      </section>
      {/* 목적 설명 */}
      {/* 목적 설명 */}
      <section className="bg-white py-16 px-8 text-black text-center">
        <h2 className="text-3xl font-bold mb-6">왜 FITMATE인가요?</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          FITMATE는 여러분의 운동 경험, 목표, 일정 등을 분석하여
          <br />
          개인 맞춤형 운동 루틴을 제공하는 AI 트레이너입니다.
        </p>
      </section>

      {/* 이용 방법 가이드 */}
      <section className="bg-teal-300 py-20 px-8 text-black">
        <h2 className="text-3xl font-bold text-center mb-12">이용 방법</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. 기본 정보 입력</h3>
            <p>키, 몸무게, 성별을 입력하세요</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. 운동 레벨 선택</h3>
            <p>초급, 중급, 상급 중 자신의 수준을 골라요</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. 목표 설정</h3>
            <p>감량, 벌크업, 유지 중 하나를 선택하세요</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">4. 운동 빈도 선택</h3>
            <p>일주일에 운동 가능한 횟수를 알려주세요</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={handleStartClick}
            className="px-6 py-3 rounded-md bg-neutral-50 text-black shadow-md hover:bg-cyan-200 transition"
          >
            지금 시작하기
          </button>

        </div>
      </section>
    </>
  );
};

export default LandingPage;
