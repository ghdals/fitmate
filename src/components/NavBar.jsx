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
    <nav className="w-full shadow-md bg-slate-50 p-4 flex justify-between items-center">
      <div className="text-xl text-teal-500 font-bold"><Link to="/">Fitmate</Link></div>
      <div className="flex items-center space-x-4">
        <Link to="/library">LIBRARY</Link>
        <Link to="/register">SIGN UP</Link>

        {!isAuthenticated ? (
          <Link to="/login">LOGIN</Link>
        ) : (
          <>
            <span className="text-sm">{user?.name}님</span>
            <button onClick={handleLogout}>LOGOUT</button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
