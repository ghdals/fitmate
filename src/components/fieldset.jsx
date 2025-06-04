const Field = ({ children }) => {
  return <div className="flex flex-col space-y-1">{children}</div>;
};

const Label = ({ children }) => {
  return <label className="text-sm font-medium text-gray-700 dark:text-gray-300">{children}</label>;
};


export { Field, Label };