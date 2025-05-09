import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MyPage() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;  // API_BASE_URL 환경 변수로 API 주소 관리

  // useEffect로 사용자 정보 요청
  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('authToken'); // localStorage에서 토큰 가져오기

      if (!token) {
        // 토큰이 없으면 로그인 페이지로 이동
        navigate("/login");
        return;
      }

      try {
        const response = await axios.get(`${API_BASE_URL}/users/login`, {
          headers: {
            Authorization: `Bearer ${token}`, // 토큰을 Authorization 헤더에 추가
          },
        });

        setUser(response.data);
        setLoading(false);
      } catch (error) {
        console.error("사용자 정보 로드 실패:", error);
        setError("사용자 정보를 불러오는 데 실패했습니다.");
        setLoading(false);
      }
    };

    fetchUserData();
  }, [navigate, API_BASE_URL]);

  if (loading) {
    return <div>Loading...</div>;  // 스피너로 교체 가능
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="my-page">
      <h1>My Profile</h1>
      {user ? (
        <div>
          <p><strong>이름:</strong> {user.username}</p>
          <p><strong>이메일:</strong> {user.email}</p>
          {/* 여기에 다른 사용자 정보 추가 가능 */}
        </div>
      ) : (
        <p>사용자 정보를 불러올 수 없습니다.</p>
      )}
    </div>
  );
}

export default MyPage;
