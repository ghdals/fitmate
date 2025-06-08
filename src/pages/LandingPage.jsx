// src/pages/LandingPage.jsx

import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../assets/logo.svg";
import { Button } from "../components/button"

const LandingPage = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // 로그인 상태 확인

  const handleStartClick = () => {
    if (isLoggedIn === true) {
      navigate("/step1");
    } else {
      navigate("/login");
    }
    // navigate("/step1");
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
      {/* Features Section: 서비스 특징 소개 */}
      <section className="bg-white py-32 px-8 md:px-24 text-black w-full">
        <div className="max-w-[1440px] mx-auto">
          <div className="space-y-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-8 tracking-tight">
              왜 Fitmate인가요?
            </h2>
            <div className="text-center mb-12">
              <span className="inline-block font-mono px-1 py-1 text-teal-500 font-semibold">
                Fitmate
              </span>
              <span className="text-gray-700 ml-2">
                와 함께라면, 누구나 쉽게 운동 습관을 완성할 수 있어요.
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Feature 1: 개인 맞춤형 루틴 */}
              <div className="relative p-8 flex flex-col items-center">
                <div className="w-24 h-24 mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-50 to-indigo-100 flex items-center justify-center p-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    <span className="block px-2 py-1">
                      개인 맞춤형 루틴
                    </span>
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    <span className="block font-semibold">
                      AI가 당신의 경험과 목표를 분석하여
                    </span>
                    최적의 루틴을 제안해요.
                  </p>
                  <div className="space-y-3">
                    {[
                      "AI 기반 맞춤 루틴 제공",
                      "주 3-5회 운동 계획",
                      "진행 상황 맞춤 조정"
                    ].map((item, index) => (
                      <p key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-blue-700 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feature 2: 일정 맞춤형 운동 */}
              <div className="relative p-8 flex flex-col items-center">
                <div className="w-24 h-24 mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-50 to-indigo-100 flex items-center justify-center p-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    <span className="block px-2 py-1">
                      일정 맞춤형 운동
                    </span>
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    <span className="block font-semibold">
                      개인 일정에 맞춘 운동 계획으로
                    </span>
                    지속 가능한 습관을 형성해요.
                  </p>
                  <div className="space-y-3">
                    {[
                      "일정과 충돌하지 않는 운동 시간 추천",
                      "매일 15-30분의 효율적인 운동",
                      "진행 상황에 따른 동기 부여"
                    ].map((item, index) => (
                      <p key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-blue-700 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Feature 3: 진행 상황 추적 */}
              <div className="relative p-8 flex flex-col items-center">
                <div className="w-24 h-24 mb-8">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-50 to-indigo-100 flex items-center justify-center p-4">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-8 h-8 text-blue-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4">
                    <span className="px-2 py-1">
                      진행 상황 추적
                    </span>
                  </h3>
                  <p className="text-gray-700 text-lg mb-6">
                    <span className="block font-semibold">
                      운동 성과를 시각적으로 확인하고
                    </span>
                    동기 부여를 받을 수 있어요.
                  </p>
                  <div className="space-y-3">
                    {[
                      "운동량과 성과 추적",
                      "목표 달성률 시각화",
                      "개선사항 추천"
                    ].map((item, index) => (
                      <p key={index} className="flex items-center">
                        <svg className="w-4 h-4 text-blue-700 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-600">{item}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section: 이용 방법 */}
      {/* 이용 방법 가이드 - 가운데 정렬 개선 */}
      <section className="bg-gradient-to-r from-sky-100 to-teal-100 py-24 px-6 md:px-12 text-black w-full">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-blue-800 mb-16 text-center">당신의 맞춤 루틴, 이렇게 완성돼요!</h2>
          <div className="relative flex justify-center">
            {/* 세로선 */}
            {/* <div className="absolute left-1/2 -translate-x-1/2 top-6 w-1 bg-gray-200 h-[320px] z-0"></div> */}
            <div className="flex flex-col items-center w-full z-10">
              {[
                { step: "1", title: "기본 정보 입력", desc: "키, 몸무게, 성별 등 기본 정보를 입력하세요." },
                { step: "2", title: "운동 레벨 선택", desc: "초급, 중급, 상급 중 자신의 수준을 선택하세요." },
                { step: "3", title: "목표 설정", desc: "감량, 벌크업, 유지 중 하나를 선택하세요." },
                { step: "4", title: "세부 목표 설정", desc: "운동 가능한 시간과 횟수를 선택하세요." },
                { step: "5", title: "운동 시작", desc: "맞춤형 운동 계획에 따라 운동을 시작하세요!" }
              ].map(({ step, title, desc }, index) => (
                <div key={step} className="relative flex flex-col items-center mb-10 last:mb-0 w-full">
                  {/* Step 번호 */}
                  <div className="w-12 h-12 rounded-full bg-white text-black font-bold flex items-center justify-center border-2 border-blue-400 text-xl z-10">
                    {step}
                  </div>
                  {/* Step 내용 */}
                  <div className="mt-4 text-center max-w-xs">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-gray-600">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 text-center">
            <Button type="button"
              onClick={handleStartClick}
              className="mt-6 px-6 py-3 shadow-md"
            >
              시작하기
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LandingPage;
