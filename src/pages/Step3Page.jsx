// pages/step3-page.jsx
import { useNavigate } from "react-router-dom";
import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { StepIndicator } from "../components/StepIndicator";
import { useState } from "react";

function Step3Page() {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState(null);

  const handlePrev = () => {
    navigate("/step2");
  };

  const handleNext = () => {
    navigate("/step4");
  };

  return (
    <StepLayout>
      <StepIndicator />
      <form className="grid w-full grid-cols-1 gap-6">
        <Heading>운동 목표를 선택하세요</Heading>
        <Field>
          <Label>목표</Label>
          <div className="flex space-x-4">
            <Button type="button" className={`flex-1  ${
                selectedGoal === "다이어트" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => setSelectedGoal("다이어트")}
              >
              다이어트
            </Button>
            <Button type="button" className={`flex-1  ${
                selectedGoal === "유지" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => setSelectedGoal("유지")}
              >
              유지
            </Button>
            <Button type="button" className={`flex-1  ${
                selectedGoal === "벌크업" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => setSelectedGoal("벌크업")}
              >
              벌크업
            </Button>
          </div>
        </Field>

        <div className="flex space-x-4">
          <Button
            type="button"
            className="flex-1"
            onClick={handlePrev}
          >
            이전
          </Button>
          <Button
            type="button"
            className="flex-1"
            onClick={handleNext}
          >
            다음
          </Button>
        </div>
      </form>
    </StepLayout>
  );
}

export default Step3Page;