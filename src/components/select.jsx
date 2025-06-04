const Select = ({ children, className = '', ...props }) => {
    return (
      <select
        className={`border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-700 rounded px-3 py-2 text-sm focus:outline-none focus:ring focus:ring-blue-500 ${className}`}
        {...props}
      >
        {children}
      </select>
    );
  };
  
  export { Select };
  