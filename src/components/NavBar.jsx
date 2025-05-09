import { Link, useNavigate } from "react-router-dom";  // useNavigate를 추가
import { useState, useEffect } from "react";

function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // 컴포넌트가 마운트될 때, 로그인 상태 확인
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsLoggedIn(true);  // 토큰이 있으면 로그인 상태로 간주
    }
  }, []);

  // 로그아웃 처리
  const handleLogout = () => {
    localStorage.removeItem("authToken");  // 토큰 삭제
    setIsLoggedIn(false);  // 로그인 상태 업데이트
    navigate("/login");  // 로그인 페이지로 리다이렉트
  };

  return (
    <nav className="w-full bg-black text-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold mr-220">
        <Link to="/">FITMATE</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/library" className="hover:text-gray-400">LIBRARY</Link>

        {/* 로그인 상태에 따라 다른 버튼 표시 */}
        {isLoggedIn ? (
          <>
            <Link to="/my" className="hover:text-gray-400">My Page</Link>
            <button
              onClick={handleLogout}
              className="hover:text-gray-400 text-white bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <Link to="/login" className="text-white hover:text-gray-400 no-underline">LOGIN</Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
