import React from 'react';
import AdminLayout from '../components/admin/AdminLayout';

const ExerciseLibrary = () => {
  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-blue-800">운동 라이브러리 관리</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            운동 추가
          </button>
        </div>

        <div className="flex items-center mb-6">
          <select className="border rounded-lg px-4 py-2">
            <option>전체 카테고리</option>
            <option>상체</option>
            <option>하체</option>
            <option>코어</option>
            <option>유산소</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 운동 카드 */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-blue-800">운동명</h3>
              <button className="text-blue-600 hover:text-blue-800">
                수정
              </button>
            </div>
            <p className="text-gray-600">카테고리</p>
            <p className="text-gray-600 mt-2">난이도: 중급</p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ExerciseLibrary;

/*관리자는 아직 구현되지 않았음*/