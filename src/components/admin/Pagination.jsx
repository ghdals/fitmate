import React from 'react';

const Pagination = ({ 
  total, 
  page, 
  rowsPerPage, 
  onPageChange, 
  onRowsPerPageChange,
  className = '' 
}) => {
  const totalPages = Math.ceil(total / rowsPerPage);
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, total - page * rowsPerPage);

  return (
    <div className={`flex flex-col sm:flex-row justify-between items-center mt-6 ${className}`}>
      <div className="text-gray-600">
        {page * rowsPerPage + 1} - {Math.min((page + 1) * rowsPerPage, total)} / {total} 명
      </div>
      <div className="flex items-center gap-2 mt-4 sm:mt-0">
        <button
          onClick={(e) => onPageChange(e, page - 1)}
          disabled={page === 0}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          이전
        </button>
        <button
          onClick={(e) => onPageChange(e, page + 1)}
          disabled={page >= totalPages - 1}
          className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          다음
        </button>
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          페이지당 행 수:
          <select
            value={rowsPerPage}
            onChange={onRowsPerPageChange}
            className="mt-1 block w-auto px-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Pagination;
