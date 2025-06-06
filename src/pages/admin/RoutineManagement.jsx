import React from 'react';
import AdminLayout from '../components/admin/AdminLayout';

const RoutineManagement = () => {
  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-blue-800">운동 루틴 관리</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            루틴 추가
          </button>
        </div>

        <div className="flex items-center mb-6">
          <select className="border rounded-lg px-4 py-2">
            <option>모든 난이도</option>
            <option>초급</option>
            <option>중급</option>
            <option>상급</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  루틴명
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  난이도
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  추천 횟수
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* 루틴 데이터가 여기에 추가될 예정 */}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default RoutineManagement;

/*관리자는 아직 구현되지 않았음*/