// src/pages/LoginPage.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice";
import { AuthLayout } from "../components/auth-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { Text, TextLink, Strong } from "../components/text";

function LoginPage() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // 입력값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // 로그인 요청 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // 유효성 검사
    if (!form.email || !form.password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    setIsLoading(true);

    try {
      // 환경변수 사용으로 수정
      const response = await axios.post(`${API_BASE_URL}/api/users/login`, form);
      console.log("로그인 성공:", response.data);

      // JWT 토큰을 localStorage에 저장
      localStorage.setItem("authToken", response.data.token);

      // Redux 상태 업데이트
      dispatch(login({
        id: response.data.user?.id,
        username: response.data.user?.username,
        email: response.data.user?.email
      }));

      // localStorage에 로그인 정보 저장 (자동 로그인 유지용)
      localStorage.setItem("auth", JSON.stringify({
        isLoggedIn: true,
        user: {
          id: response.data.user?.id,
          username: response.data.user?.username,
          email: response.data.user?.email
        }
      }));

      // 로그인 후 LandingPage로 이동
      navigate("/");
      alert("로그인 성공!");
    } catch (error) {
      console.error("로그인 오류:", error.response?.data || error.message);
      
      // 서버에서 반환하는 구체적인 에러 메시지 사용
      const errorMessage = error.response?.data?.message || 
                          error.response?.data || 
                          "이메일 또는 비밀번호가 잘못되었습니다.";
      setError(`로그인 실패: ${errorMessage}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="grid w-full max-w-sm grid-cols-1 gap-8">
        <Heading>Sign in</Heading>

        {/* 이메일 입력 필드 */}
        <Field>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Field>

        {/* 비밀번호 입력 필드 */}
        <Field>
          <Label>Password</Label>
          <Input
            type="password"
            name="password"
            autoComplete="current-password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </Field>

        {/* 에러 메시지 표시 */}
        {error && <div className="text-red-500 text-sm">{error}</div>}

        {/* 로그인 버튼 */}
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "로그인 중..." : "Sign in"}
        </Button>

        {/* 회원가입 링크 */}
        <Text>
          Don't have an account?{" "}
          <TextLink href="/register">
            <Strong>Register</Strong>
          </TextLink>
        </Text>
      </form>
    </AuthLayout>
  );
}

export default LoginPage;
