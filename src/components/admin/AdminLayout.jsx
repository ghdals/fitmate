import React from 'react';

const AdminLayout = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* 사이드바 */}
      <div className="w-64 bg-white shadow-lg">
        <div className="p-4">
          <h2 className="text-xl font-semibold text-blue-800">관리자 페이지</h2>
        </div>
        <nav className="space-y-2">
          <a href="/admin/users" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            사용자 관리
          </a>
          <a href="/admin/exercises" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            운동 라이브러리 관리
          </a>
          <a href="/admin/routines" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
            운동 루틴 관리
          </a>
        </nav>
      </div>

      {/* 메인 컨텐츠 */}
      <div className="flex-1 overflow-auto">
        {/* 상단 헤더 */}
        <div className="bg-white shadow p-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-blue-800">관리자 대시보드</h2>
            <div className="flex space-x-4">
              <input 
                type="text" 
                placeholder="검색"
                className="border rounded-lg px-4 py-2"
              />
            </div>
          </div>
        </div>

        {/* 메인 컨텐츠 영역 */}
        <div className="p-6">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
