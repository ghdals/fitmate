import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ExerciseForm from '../../components/admin/ExerciseForm.jsx';
import ExerciseRow from '../../components/admin/ExerciseRow.jsx';

const initialExercise = {
  name: '',
  description: '',
  imageUrl: '',
  equipments: [],
  targetMuscles: [],
  secondaryMuscles: [],
  categoryId: ''
};

const dummyExercises = [
  {
    id: 1,
    name: '스쿼트',
    description: '하체 근력 강화 운동',
    equipments: ['바벨'],
    targetMuscles: ['대퇴사두근'],
    secondaryMuscles: ['둔근'],
    categoryId: '12',
    imageUrl: ''
  },
  {
    id: 2,
    name: '벤치프레스',
    description: '가슴 근육 강화 운동',
    equipments: ['바벨', '벤치'],
    targetMuscles: ['대흉근'],
    secondaryMuscles: ['삼두근'],
    categoryId: '13',
    imageUrl: ''
  }
];

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
function ExerciseManagement() {
  const [exercises, setExercises] = useState(dummyExercises);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [newExercise, setNewExercise] = useState(initialExercise);

  const fetchExercises = async () => {
    //setExercises(dummyExercises);
    try {
      const res = await axios.get(`${API_BASE_URL}/exercises`);
      console.log("응답 데이터:", res.data);

      if (Array.isArray(res.data)) setExercises(res.data);
      else if (Array.isArray(res.data.results)) setExercises(res.data.results);
      else if (Array.isArray(res.data.exercises)) setExercises(res.data.exercises);
      else setExercises([]);
    } catch (err) {
      setExercises([]);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);

  const handleFormChange = (name, value) => {
    setNewExercise(prev => ({
      ...prev,
      [name]: ['equipments', 'targetMuscles', 'secondaryMuscles'].includes(name)
        ? (typeof value === 'string'
            ? value.split(',').map(v => v.trim()).filter(Boolean)
            : Array.isArray(value)
              ? value
              : [])
        : value
    }));
  };  

  const handleAddExercise = async(e) => {
    e.preventDefault();
    try {
      // 폼에서 입력받은 데이터 그대로 사용
      const exerciseData = {
        name: newExercise.name,
        description: newExercise.description,
        imageUrl: newExercise.imageUrl,
        equipments: newExercise.equipments,
        targetMuscles: newExercise.targetMuscles,
        secondaryMuscles: newExercise.secondaryMuscles,
        categoryId: newExercise.categoryId
      };
  
      const response = await axios.post(`${API_BASE_URL}/admin/exercise`, exerciseData, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      });
  
      setExercises(prev => [...prev, response.data]);
      setDialogOpen(false);
      setNewExercise(initialExercise);
    } catch (err) {
      console.error('운동 추가 오류:', err);
    }
  };

  const handleDeleteExercise = async(id) => {
    try {
      await axios.delete(`${API_BASE_URL}/admin/exercise/${id}`);
      setExercises(prev => prev.filter(ex => ex.id !== id));
    } catch (err) {
      console.error('운동 삭제 오류:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">운동 목록 관리</h1>
          <p className="text-gray-600">운동 데이터를 관리하는 페이지입니다.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-end mb-4">
            <button
              onClick={() => setDialogOpen(true)}
              className="py-2 px-4 rounded bg-indigo-600 text-white hover:bg-indigo-700"
            >
              운동 추가
            </button>
          </div>
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2">이름</th>
                <th className="px-4 py-2">장비</th>
                <th className="px-4 py-2">주요 근육</th>
                <th className="px-4 py-2">카테고리</th>
                <th className="px-4 py-2">설명</th>
                <th className="px-4 py-2">이미지</th>
                <th className="px-4 py-2">관리</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {(Array.isArray(exercises) ? exercises : []).map(exercise => (
                <ExerciseRow
                  key={exercise.id}
                  exercise={exercise}
                  onDelete={handleDeleteExercise}
                />
              ))}
            </tbody>
          </table>
        </div>
        {dialogOpen && (
          <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg min-w-[400px] p-6">
              <h3 className="text-xl font-bold mb-4">운동 추가</h3>
              <ExerciseForm
                value={newExercise}
                onChange={handleFormChange}
                onSubmit={handleAddExercise}
                onCancel={() => { setDialogOpen(false); setNewExercise(initialExercise); }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ExerciseManagement;
