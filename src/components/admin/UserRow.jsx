// src/components/admin/UserRow.jsx
import React from 'react';

function UserRow({ user, onEdit, onDelete }) {
    if (!user) return null;
    
    return (
      <tr className="border-b">
        <td className="px-6 py-4 text-center">{user.name}</td>
        <td className="px-6 py-4 text-center">{user.email}</td>
        {/* <td className="px-6 py-4 text-center">{user.role === 'admin' ? '관리자' : '일반 사용자'}</td> */}
        {/* <td className="px-6 py-4 text-center">{new Date(user.createdAt).toLocaleDateString()}</td> */}
        <td className="px-6 py-4 text-center">
          <div className="flex justify-center space-x-2">
            {/* <button
              onClick={() => onEdit(user)}
              className="text-indigo-600 hover:text-indigo-900"
            >
              수정
            </button> */}
            <button
              onClick={() => onDelete(user?.userId)}
              className="text-white text-center text-sm bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
            >
              삭제
            </button>
          </div>
        </td>
      </tr>
    );
  }

export default UserRow;