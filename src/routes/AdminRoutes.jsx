import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import UserManagement from '../pages/admin/UserManagement';
import ExerciseLibrary from '../pages/admin/ExerciseLibrary';
import RoutineManagement from '../pages/admin/RoutineManagement';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Navigate to="/admin/users" replace />} />
      <Route path="/admin/users" element={<UserManagement />} />
      <Route path="/admin/exercises" element={<ExerciseLibrary />} />
      <Route path="/admin/routines" element={<RoutineManagement />} />
    </Routes>
  );
};

export default AdminRoutes;

/*관리자는 아직 구현되지 않았음*/