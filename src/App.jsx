import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AppRoutes from "./routes/AppRoutes";
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="min-h-screen bg-black">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <AppRoutes />
      </div>
    </div>
  );
}


export default App;
