import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserRow from '../../components/admin/UserRow';
import SearchBar from '../../components/admin/SearchBar';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const UserManagement = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/admin/users`);
      console.log("응답 데이터:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error('사용자 목록 가져오기 실패:', error);
    }
  };

  const handleDeleteUser = async (userId) => {
    if (!window.confirm('정말로 이 사용자를 삭제하시겠습니까?')) return;
  
    try {
      console.log('삭제할 사용자 ID:', userId); // 디버깅
      
      if (!userId) {
        throw new Error('사용자 ID가 없습니다.');
      }
  
      // API
      await axios.delete(`${API_BASE_URL}/admin/user/${userId}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
  
      await fetchUsers();
  
      // 성공
      alert('사용자가 성공적으로 삭제되었습니다.');
    } catch (error) {
      console.error('사용자 삭제 실패:', error);
      alert('사용자 삭제에 실패했습니다. 다시 시도해주세요.');
    }
  };
  const filteredUsers = users.filter(user => 
    user && 
    (user.name?.toLowerCase().includes(searchTerm.toLowerCase()) || 
     user.email?.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">사용자 목록 관리</h1>
          <p className="text-gray-600">사용자 데이터를 관리하는 페이지입니다.</p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div className="flex-1">
              <SearchBar
                value={searchTerm}
                onChange={setSearchTerm}
                placeholder="이름 또는 이메일로 검색"
              />
            </div>
          </div>

          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">이름</th>
                <th className="px-4 py-2">이메일</th>
                {/* <th className="px-4 py-2">권한</th> */}
                {/* <th className="px-4 py-2">가입일</th> */}
                <th className="px-4 py-2">관리</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredUsers.map((user, index) => (
                <UserRow
                  key={user?.id || index}
                  user={user}
                  onDelete={handleDeleteUser}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;