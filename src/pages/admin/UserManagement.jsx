import React from 'react';
import AdminLayout from '../components/admin/AdminLayout';

const UserManagement = () => {
  return (
    <AdminLayout>
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-blue-800">사용자 관리</h2>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            사용자 추가
          </button>
        </div>

        <div className="flex items-center mb-6">
          <input 
            type="text" 
            placeholder="이메일 또는 이름으로 검색"
            className="border rounded-lg px-4 py-2 flex-1 mr-4"
          />
          <select className="border rounded-lg px-4 py-2">
            <option>모든 상태</option>
            <option>활성화</option>
            <option>비활성화</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  이름
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  이메일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  가입일
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  상태
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  관리
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* 사용자 데이터가 여기에 추가될 예정 */}
            </tbody>
          </table>
        </div>
      </div>
    </AdminLayout>
  );
};

export default UserManagement;

/*관리자는 아직 구현되지 않았음*/