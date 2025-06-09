import React from 'react';

function ExerciseRow({ exercise, onDelete }) {
    return (
      <tr>
        <td>
          <div className="h-24 max-w-xs overflow-y-auto whitespace-pre-wrap text-sm text-center">
            {exercise.name}
          </div>
        </td>
        <td>
          <div className="h-24 max-w-xs overflow-y-auto whitespace-pre-wrap text-sm text-center">
            {exercise.equipments.join(', ')}
          </div>
        </td>
        <td>
          <div className="h-24 max-w-xs overflow-y-auto whitespace-pre-wrap text-sm text-center">
            {exercise.targetMuscles.join(', ')}
          </div>
        </td>
        <td>
          <div className="h-24 max-w-xs overflow-y-auto whitespace-pre-wrap text-sm text-center">
            {exercise.categoryId}
          </div>
        </td>
        <td>
          <div className="h-24 max-w-xs overflow-y-auto whitespace-pre-wrap text-sm text-center">
            {exercise.description}
          </div>
        </td>
        <td>
          <div className="h-24 max-w-xs overflow-y-auto flex items-center justify-center">
            {exercise.imageUrl && (
              <img src={exercise.imageUrl} alt={exercise.name} className="w-10 h-10 object-cover" />
            )}
          </div>
        </td>
        <td>
          <div className="h-24 flex items-start">
            <button
              onClick={() => onDelete(exercise.id)}
              className="text-white text-center text-sm bg-red-500 hover:bg-red-600 px-2 py-1 rounded"
            >
              삭제
            </button>
          </div>
        </td>
      </tr>
    );
  }
  
  export default ExerciseRow;
  