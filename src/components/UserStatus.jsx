import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/slices/userSlice";

const UserStatus = () => {
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();
  
    return (
      <div className="p-4 border rounded-lg shadow-md">
        {user.isAuthenticated ? (
          <>
            <p className="text-lg font-bold">환영합니다, {user.name}님!</p>
            <button
              className="mt-2 px-4 py-2 bg-red-500 text-white rounded"
              onClick={() => dispatch(logout())}
            >
              로그아웃
            </button>
          </>
        ) : (
          <>
            <p className="text-gray-700">로그인이 필요합니다.</p>
            <button
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
              onClick={() => dispatch(login("홍길동"))}
            >
              로그인
            </button>
          </>
        )}
      </div>
    );
  };

export default UserStatus;
