const Button = ({ children, className, ...props }) => {
  return (
    <button
      className={`bg-neutral-50 text-black py-2 px-4 rounded hover:bg-teal-200 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
export { Button };