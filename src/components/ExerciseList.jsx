import React, { useState } from 'react';
import { Field, Label } from "./fieldset";
import { Input } from "./input";
import { Button } from "./button";
import { Text } from "./text";

const ExerciseList = ({ exercises, onChange }) => {
  const [newExercise, setNewExercise] = useState({
    name: "",
    sets: "",
    reps: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewExercise(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const addExercise = () => {
    if (!newExercise.name || !newExercise.sets || !newExercise.reps) {
      return;
    }

    const updatedExercises = [...exercises, newExercise];
    onChange(updatedExercises);
    setNewExercise({ name: "", sets: "", reps: "" });
  };

  const removeExercise = (index) => {
    const updatedExercises = exercises.filter((_, i) => i !== index);
    onChange(updatedExercises);
  };

  return (
    <div className="space-y-4">
      {/* 운동 추가 폼 */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Field>
          <Label htmlFor="exerciseName">운동 이름</Label>
          <Input 
            type="text" 
            name="name" 
            value={newExercise.name} 
            onChange={handleInputChange} 
            placeholder="벤치 프레스"
          />
        </Field>

        <Field>
          <Label htmlFor="sets">세트</Label>
          <Input 
            type="number" 
            name="sets" 
            value={newExercise.sets} 
            onChange={handleInputChange} 
            placeholder="3"
            min="1"
          />
        </Field>

        <Field>
          <Label htmlFor="reps">반복</Label>
          <Input 
            type="number" 
            name="reps" 
            value={newExercise.reps} 
            onChange={handleInputChange} 
            placeholder="10"
            min="1"
          />
        </Field>

        <Button 
          onClick={addExercise} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded"
        >
          운동 추가
        </Button>
      </div>

      {/* 운동 목록 */}
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">운동 이름</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">세트</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">반복</th>
              <th className="px-6 py-3 text-left text-sm font-medium text-gray-500">작업</th>
            </tr>
          </thead>
          <tbody>
            {exercises.map((exercise, index) => (
              <tr key={index} className="border-t">
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {exercise.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {exercise.sets}세트
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {exercise.reps}회
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  <Button 
                    onClick={() => removeExercise(index)}
                    className="text-red-600 hover:text-red-800"
                  >
                    삭제
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { ExerciseList };
