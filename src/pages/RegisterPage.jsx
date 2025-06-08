// src/pages/RegisterPage.jsx
import { useState } from "react";
import axios from "axios";
import { AuthLayout } from "../components/auth-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { Strong, Text, TextLink } from "../components/text";
import { Logo } from "../components/logo";

// 회원가입 페이지 컴포넌트
function RegisterPage() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // 환경 변수에서 API 주소 불러오기
  
  // 회원가입 폼 데이터 관리 (id → 아이디, username → 이름)
  const [form, setForm] = useState({ id: "", username: "", email: "", password: "" });

  // 입력 값 변경 시 상태 업데이트
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  // 폼 제출 시 백엔드 API 요청 (회원가입 처리)
  const handleSubmit = async (e) => {
    e.preventDefault(); // 기본 폼 제출 방지
    try {
      const response = await axios.post(`http://54.85.169.70:8080/api/users/signup`, form);
      console.log("회원가입 응답:", response.data); // 응답 데이터 확인용 로그 추가
      alert(`${form.username}님, 회원가입이 완료되었습니다! 로그인하여 서비스를 이용해 보세요.`);
    } catch (error) {
      console.error("회원가입 오류:", error.response?.data || error.message);
      alert("회원가입 실패: " + (error.response?.data || "Unknown error")); // 오류 발생 시 메시지 표시
    }
  };

  return (
    <AuthLayout>
      {/* 회원가입 폼 */}
      <form onSubmit={handleSubmit} className="grid w-full max-w-sm grid-cols-1 gap-8">
        <Logo className="h-6 text-zinc-950 dark:text-white forced-colors:text-[CanvasText]" />
        <Heading>Create your account</Heading>

        {/* 아이디 입력 필드 */}
        <Field>
          <Label>ID</Label>
          <Input name="id" value={form.id} onChange={handleChange} />
        </Field>

        {/* 이름 입력 필드 */}
        <Field>
          <Label>Username</Label>
          <Input name="username" value={form.username} onChange={handleChange} />
        </Field>

        {/* 이메일 입력 필드 */}
        <Field>
          <Label>Email</Label>
          <Input type="email" name="email" value={form.email} onChange={handleChange} />
        </Field>

        {/* 비밀번호 입력 필드 */}
        <Field>
          <Label>Password</Label>
          <Input type="password" name="password" autoComplete="new-password" value={form.password} onChange={handleChange} />
        </Field>

        {/* 회원가입 버튼 */}
        <Button type="submit" className="w-full">
          Create account
        </Button>

        {/* 로그인 페이지 이동 링크 */}
        <Text>
          Already have an account?{" "}
          <TextLink href="/login">
            <Strong>Sign in</Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  );
}

export default RegisterPage;