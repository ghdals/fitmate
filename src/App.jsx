import './App.css'
import AppRoutes from "./routes/AppRoutes";
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="w-full min-h-screen bg-black">
      <NavBar />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <AppRoutes />
      </div>
    </div>
  );
}


export default App;
