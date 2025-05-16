// src/pages/Step2Page.jsx
import { useNavigate } from "react-router-dom";
import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { StepIndicator } from "../components/StepIndicator";
import { useState } from "react";

function Step2Page() {
  const navigate = useNavigate();
  const [selectedLevel, setSelectedLevel] = useState(null);

  const handlePrev = () => {
    navigate("/step1");
  };

  const handleNext = () => {
    navigate("/step3");
  };

  return (
    <StepLayout>
      <StepIndicator />
      <form className="grid w-full grid-cols-1 gap-6">
        <Heading>레벨을 선택하세요</Heading>
        <Field>
          <Label>레벨</Label>
          <div className="flex space-x-4">
           
            <Button type="button" className={`flex-1  ${
                selectedLevel === "초급자" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => setSelectedLevel("초급자")}
              >
              초급자
            </Button>
            <Button type="button" className={`flex-1  ${
                selectedLevel === "중급자" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => setSelectedLevel("중급자")}
              >
              중급자
            </Button>
            <Button type="button" className={`flex-1  ${
                selectedLevel === "상급자" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => setSelectedLevel("상급자")}
              >
              상급자
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

export default Step2Page;
