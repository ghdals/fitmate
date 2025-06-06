import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { login, logout } from '../store/slices/authSlice';
import NavBar from "../components/NavBar";
import LandingPage from "../pages/LandingPage";
import LibraryPage from "../pages/LibraryPage";
import DetailPage from "../pages/DetailPage";
import RegisterPage from "../pages/RegisterPage";
import MyPage from "../pages/MyPage";
import LoginPage from "../pages/LoginPage";
import NotFound from "../pages/NotFound";
import Step1Page from "../pages/Step1Page";
import Step2Page from "../pages/Step2Page";
import Step3Page from "../pages/Step3Page";
import Step4Page from "../pages/Step4Page";
import LibraryDetailPage from "../pages/LibraryDetailPage";
import ProfilePage from "../pages/ProfilePage";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);

  // 앱 로드 시 토큰 확인
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem('authToken');
      if (token) {
        try {
          const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
          const response = await axios.get(`${API_BASE_URL}/users/me`, {
            headers: { Authorization: `Bearer ${token}` }
          });
          
          dispatch(login({
            id: response.data.id,
            email: response.data.email,
            name: response.data.name || response.data.email.split('@')[0]
          }));
        } catch (error) {
          console.error('인증 확인 실패:', error);
          localStorage.removeItem('authToken');
          dispatch(logout());
        }
      }
    };

    checkAuth();
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Routes>
        {/* 공개 */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/library/:name" element={<LibraryDetailPage />} />

        {/* 로그인 필요 */}
        <Route 
          path="/step1" 
          element={isLoggedIn ? <Step1Page /> : <Navigate to="/login" state={{ from: '/step1' }} replace />} 
        />
        <Route 
          path="/step2" 
          element={isLoggedIn ? <Step2Page /> : <Navigate to="/login" state={{ from: '/step2' }} replace />} 
        />
        <Route 
          path="/step3" 
          element={isLoggedIn ? <Step3Page /> : <Navigate to="/login" state={{ from: '/step3' }} replace />} 
        />
        <Route 
          path="/step4" 
          element={isLoggedIn ? <Step4Page /> : <Navigate to="/login" state={{ from: '/step4' }} replace />} 
        />
        <Route 
          path="/my" 
          element={isLoggedIn ? <MyPage /> : <Navigate to="/login" state={{ from: '/my' }} replace />} 
        />
        
        {/* 인증 페이지 - 로그인한 사용자는 접근 불가 */}
        <Route 
          path="/register" 
          element={!isLoggedIn ? <RegisterPage /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/login" 
          element={!isLoggedIn ? <LoginPage /> : <Navigate to="/" replace />} 
        />
        
        {/* 로그인 필요 */}
        {/* 프로필 페이지 확인하기 위해서 잠깐깐
        <Route 
          path="/profile" 
          element={isLoggedIn ? <ProfilePage /> : <Navigate to="/login" state={{ from: '/profile' }} replace />} 
        />
        */}
        <Route
          path="/profile"
          element={<ProfilePage />} 
        />
        
        {/* 관리자 페이지 */}
        {/*<Route
          path="/admin"
          element={<AdminPage />} 
        />*/}
        
        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;