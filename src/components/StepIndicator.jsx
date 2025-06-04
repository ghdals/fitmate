// components/step-indicator.jsx
import { useLocation, useNavigate } from "react-router-dom";

const steps = [
  { label: "기본 정보", path: "/step1" },
  { label: "레벨", path: "/step2" },
  { label: "목표", path: "/step3" },
  { label: "결과", path: "/step4" },
];

export function StepIndicator() {
  const location = useLocation();
  const navigate = useNavigate();

  const currentStepIndex = steps.findIndex((step) => step.path === location.pathname);

  return (
    <div className="flex justify-center space-x-4 mb-8">
      {steps.map((step, index) => {
        const isClickable = index <= currentStepIndex;

        return (
          <button
            key={step.path}
            onClick={() => isClickable && navigate(step.path)}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center
              text-sm font-bold transition border
              ${isClickable ? " border-gray-400 hover:scale-105" : "text-gray-400 border-gray-200 cursor-not-allowed opacity-50"}
            `}
            disabled={!isClickable}
            title={step.label}
          >
            {index + 1}
          </button>
        );
      })}
    </div>
  );
}