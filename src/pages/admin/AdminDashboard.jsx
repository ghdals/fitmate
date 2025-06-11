import React from 'react';
import { useNavigate } from 'react-router-dom';
import Tile from '../../components/admin/Card';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-12">
          <h1 className="text-2xl font-medium text-gray-700 mb-2">관리자 대시보드</h1>
          <p className="text-gray-500">Fitmate의 관리자 페이지입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-4 rounded-lg">
            <Tile 
              title="사용자 관리" 
              action={true}
              actionText="사용자 관리 시작하기"
              onAction={() => navigate('/admin/users')}
            ></Tile>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <Tile 
              title="운동 관리" 
              action={true}
              actionText="운동 관리 시작하기"
              onAction={() => navigate('/admin/exercises')}
            ></Tile>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
