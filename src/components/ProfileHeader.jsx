import { useState, useRef } from "react"; // useState와 useRef 훅 추가
import logo from "../assets/logo.svg";

const ProfileHeader = ({ userData }) => {
  // 프로필 이미지 상태 관리
  const [profileImage, setProfileImage] = useState(logo);
  // 파일 입력 요소에 접근하기 위한 ref
  const fileInputRef = useRef(null);

  // 프로필 이미지 클릭 시 파일 선택 다이얼로그 열기
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // 파일 선택 시 처리하는 함수
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // 파일이 선택되었을 때만 처리
      const objectUrl = URL.createObjectURL(file);
      setProfileImage(objectUrl);
      
      // 컴포넌트가 언마운트될 때 메모리 해제를 위해 이 처리가 필요합니다
      return () => URL.revokeObjectURL(objectUrl);
    }
  };

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center">
          {/* 프로필 사진: 좌측 */}
          <div 
            className="h-32 w-32 rounded-full bg-white p-2 flex-shrink-0 cursor-pointer"
            onClick={handleImageClick}
          >
            <img 
              src={profileImage} 
              alt="프로필 사진"
              className="h-full w-full rounded-full object-cover"
            />
            {/* 숨겨진 파일 입력 요소 */}
            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              className="hidden"
              accept="image/*"
            />
          </div>
          {/* 정보: 우측 끝에 세로 배치 */}
          <div className="flex-1 flex flex-col items-end ml-8">
            <h1 className="text-3xl font-bold">{userData.name}</h1>
            <p className="text-gray-600 mt-2">{userData.email}</p>
            <div className="mt-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {userData.exerciseLevel === 'beginner'
                  ? '초급자'
                  : userData.exerciseLevel === 'intermediate'
                  ? '중급자'
                  : '상급자'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
