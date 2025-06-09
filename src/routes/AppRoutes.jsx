import { Routes, Route, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
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
import AdminDashboard from "../pages/admin/AdminDashboard";
import UserManagement from "../pages/admin/UserManagement";
import ExerciseManagement from "../pages/admin/ExerciseManagement";

const AppRoutes = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isAdmin } = useSelector((state) => state.auth);

  // 앱 로드 시 토큰 확인
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      dispatch(login({ token }));
    }
  }, [dispatch]);

  return (
    <>
      <NavBar />
      <Routes>
        {/* 공개 라우트 */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/library/:category" element={<LibraryDetailPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />

        {/* 인증 필요 라우트 */}
        <Route path="/mypage" element={isLoggedIn ? <MyPage /> : <Navigate to="/login" />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/step1" element={isLoggedIn ? <Step1Page /> : <Navigate to="/login" />} />
        <Route path="/step2" element={isLoggedIn ? <Step2Page /> : <Navigate to="/login" />} />
        <Route path="/step3" element={isLoggedIn ? <Step3Page /> : <Navigate to="/login" />} />
        <Route path="/step4" element={isLoggedIn ? <Step4Page /> : <Navigate to="/login" />} />

        {/* 관리자 전용 라우트 */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/exercises" element={<ExerciseManagement />} />
      </Routes>
    </>
  );
};

export default AppRoutes;