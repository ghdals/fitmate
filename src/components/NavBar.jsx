import { Link } from "react-router-dom";
// import UserStatus from "./UserStatus";

function NavBar() {
  return (
    <nav className="w-full bg-black text-white shadow-md p-4 flex justify-between items-center">
      <div className="text-xl font-bold mr-220">
        <Link to="/">FITMATE</Link>
      </div>
      <div className="flex items-center space-x-4">
        <Link to="/library" className="hover:text-gray-400">LIBRARY</Link>
        <Link to="/register" className="text-white hover:text-gray-400 no-underline">SIGN UP</Link>

        {/* <UserStatus /> */}
      </div>
    </nav>
  );
}

export default NavBar;
