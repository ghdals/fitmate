const Checkbox = ({ ...props }) => {
    return <input type="checkbox" className="mr-2" {...props} />;
  };
  
  const CheckboxField = ({ children }) => {
    return <div className="flex items-center space-x-2">{children}</div>;
  };
  
  export { Checkbox, CheckboxField };
  