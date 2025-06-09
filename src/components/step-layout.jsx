export function StepLayout({ children }) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
        <div className="w-full max-w-xl bg-white p-8 rounded-xl shadow-lg">
          {children}
        </div>
      </div>
    );
  }
  