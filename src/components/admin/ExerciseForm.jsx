import React from 'react';

const fields = [
    { name: 'name', label: '이름', type: 'text', required: true },
    { name: 'description', label: '설명', type: 'textarea', required: true },
    { name: 'imageUrl', label: '이미지 URL', type: 'text' },
    {
      name: 'categoryId',
      label: '카테고리',
      type: 'select',
      required: true,
      options: [
        { value: '', label: '카테고리 선택' },
        { value: '12', label: '하체 운동' },
        { value: '13', label: '상체 운동' },
        { value: '14', label: '유산소 운동' },
        { value: '15', label: '기타' }
      ]
    },
    { name: 'equipments', label: '장비', type: 'text', placeholder: '예: 바벨, 덤벨' },
    { name: 'targetMuscles', label: '타겟 근육', type: 'text', placeholder: '예: 이두근, 삼두근' },
    { name: 'secondaryMuscles', label: '보조 근육', type: 'text', placeholder: '예: 어깨, 등' }
  ];

function ExerciseForm({ value, onChange, onSubmit, onCancel }) {
  const handleInput = (e) => {
    const { name, value: v } = e.target;
    if (['equipments', 'targetMuscles', 'secondaryMuscles'].includes(name)){
        onChange(name, v.split(",").map((v) => v.trim()).filter(Boolean));
    }else{
        onChange(name, v);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {fields.map(field => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 mb-1">{field.label}</label>
          {field.type === 'select' ? (
            <select
              name={field.name}
              value={value[field.name]}
              onChange={handleInput}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
            >
              {field.options.map(opt => (
                <option key={opt.value} value={opt.value}>{opt.label}</option>
              ))}
            </select>
          ) : field.type === 'textarea' ? (
            <textarea
              name={field.name}
              value={value[field.name]}
              onChange={handleInput}
              rows={3}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
            />
          ) : (
            <input
              type={field.type}
              name={field.name}
              value={
                ['equipments', 'targetMuscles', 'secondaryMuscles'].includes(field.name)
                  ? value[field.name].join(', ')
                  : value[field.name]
              }
              onChange={handleInput}
              placeholder={field.placeholder}
              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500"
            />
          )}
        </div>
      ))}
      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="py-2 px-4 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50"
        >
          취소
        </button>
        <button
          type="submit"
          className="py-2 px-4 border border-transparent rounded-md bg-indigo-600 text-white hover:bg-indigo-700"
        >
          추가
        </button>
      </div>
    </form>
  );
}

export default ExerciseForm;
