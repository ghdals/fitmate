import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import LandingPage from "../pages/LandingPage";
import LibraryPage from "../pages/LibraryPage";
import DetailPage from "../pages/DetailPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";
import Step1Page from "../pages/Step1Page";
import Step2Page from "../pages/Step2Page";
import LoginPage from "../pages/LoginPage";
import Step3Page from "../pages/Step3Page";
import Step4Page from "../pages/Step4Page";
import ResultPage from "../pages/ResultPage";
import LibraryDetailPage from "../pages/LibraryDetailPage";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/step1" element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="/step3" element={<Step3Page/>} />
        <Route path="/step4" element={<Step4Page/>} /> 
        <Route path="/result" element={<ResultPage/>} /> 
        <Route path="/library/:id" element={<LibraryDetailPage/>} /> 
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
