import { Routes, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import LandingPage from "../pages/LandingPage";
import LibraryPage from "../pages/LibraryPage";
import DetailPage from "../pages/DetailPage";
import RegisterPage from "../pages/RegisterPage";
import NotFound from "../pages/NotFound";
import Step1Page from "../pages/Step1Page";
import Step2Page from "../pages/Step2Page";

const AppRoutes = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/library" element={<LibraryPage />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/step1" element={<Step1Page />} />
        <Route path="/step2" element={<Step2Page />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
