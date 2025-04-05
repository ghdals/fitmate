const Text = ({ children }) => {
    return <p className="text-sm text-center text-gray-600 dark:text-gray-400">{children}</p>;
  };
  
  const Strong = ({ children }) => {
    return <strong className="font-semibold text-gray-900 dark:text-white">{children}</strong>;
  };
  
  const TextLink = ({ href, children }) => {
    return <a href={href} className="text-blue-600 hover:underline dark:text-blue-400">{children}</a>;
  };
  
  export { Text, Strong, TextLink };