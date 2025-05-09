import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/slices/authSlice';
import { Link, useNavigate } from 'react-router-dom';

function NavBar() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="w-full bg-black text-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold"><Link to="/">FITMATE</Link></div>
      <div className="flex items-center space-x-4">
        <Link to="/library" className="hover:text-gray-400">LIBRARY</Link>
        <Link to="/register" className="hover:text-gray-400">SIGN UP</Link>

        {!isAuthenticated ? (
          <Link to="/login" className="hover:text-gray-400">LOGIN</Link>
        ) : (
          <>
            <span className="text-sm">{user?.name}님</span>
            <button onClick={handleLogout} className="hover:text-gray-400">LOGOUT</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
