export function StepLayout({ children }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 dark:bg-gray-900 p-4">
        <div className="w-full max-w-xl bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
          {children}
        </div>
      </div>
    );
  }
  