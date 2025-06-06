import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  // 로그아웃 처리
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="w-full bg-black text-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/" className="hover:text-gray-300 transition-colors">
            FITMATE
          </Link>
        </div>
        
        <div className="flex items-center space-x-6">
          <Link 
            to="/library" 
            className="hover:text-gray-300 transition-colors"
          >
            LIBRARY
          </Link>
          
          {isLoggedIn ? (
            <div className="flex items-center space-x-6">
              <Link 
                to="/my" 
                className="hover:text-gray-300 transition-colors"
              >
                MY PAGE
              </Link>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">
                  {user?.name || '사용자'}님
                </span>
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 bg-red-600 hover:bg-red-700 rounded text-sm transition-colors"
                >
                  로그아웃
                </button>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <Link 
                to="/login" 
                className="px-4 py-1 border border-white rounded hover:bg-white hover:text-black transition-colors"
              >
                로그인
              </Link>
              <Link 
                to="/register" 
                className="px-4 py-1 bg-blue-600 hover:bg-blue-700 rounded transition-colors"
              >
                회원가입
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;