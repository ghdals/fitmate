import UserStatus from "./UserStatus";

function NavBar() {
    return (
      <nav className="w-full bg-black text-white shadow-md p-4 flex justify-between items-center">
        <div className="text-xl font-bold mr-220">FITMATE</div>
        <div className="flex items-center space-x-4">
          <a href="#service" className="hover:text-gray-400">LIBRARY</a> {/* text white를 text-white로 수정 */}
          <a href="#introduce" className="text-white hover:text-gray-400 no-underline">SIGN UP</a>
          
          {/* <UserStatus /> */}
        </div>
      </nav>
    );
  }

export default NavBar;
