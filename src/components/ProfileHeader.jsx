// components/ProfileHeader.jsx
import { Button } from "../components/button";
import logo from "../assets/logo.svg";

const ProfileHeader = ({ userData }) => {
  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-32 w-32 rounded-full bg-white p-2">
              <img 
                src={logo} 
                alt="프로필 사진"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-blue-800">{userData.name}</h1>
              <p className="text-gray-600">{userData.email}</p>
              <div className="mt-2 flex items-center">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                  {userData.exerciseLevel === 'beginner' ? '초급자' : userData.exerciseLevel === 'intermediate' ? '중급자' : '상급자'}
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 sm:mt-0">
            <Button 
              className="bg-blue-600 hover:bg-blue-700 px-6 py-2"
            >
              프로필 수정
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;