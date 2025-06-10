// src/pages/ResultPage.jsx
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Heading } from "../components/heading";

function ResultPage() {
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // formSlice에서 전체 입력값 가져오기
  const {
    name,
    email,
    password,
    height,
    weight,
    gender,
    exerciseLevel,
    frequency,
    duration
  } = useSelector((state) => state.form);

  const handleSubmit = async () => {
    const userData = {
      name,
      email,
      password,
      height,
      weight,
      gender,
      exerciseLevel,
      frequency,
      duration,
    };

    try {
       const response = await axios.post(`${API_BASE_URL}/api/users/${userId}/step-info`, userData);
      console.log("회원가입 성공:", response.data);
      navigate("/login"); // 로그인 페이지로 이동
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      alert("회원가입에 실패했습니다. 입력 내용을 다시 확인해주세요.");
    }
  };

  return (
    <StepLayout>
      <Heading>회원가입을 완료하시겠습니까?</Heading>
      <p className="text-gray-600 mb-4">
        아래 버튼을 누르면 입력한 정보로 회원가입이 완료됩니다.
      </p>
      <Button className="w-full" onClick={handleSubmit}>
        회원가입 완료
      </Button>
    </StepLayout>
  );
}

export default ResultPage;
