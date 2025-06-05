// pages/step3-page.jsx
import { useNavigate } from "react-router-dom";
import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { StepIndicator } from "../components/StepIndicator";

import { useDispatch, useSelector } from "react-redux";
import { setGoal } from "../store/slices/formSlice";

function Step3Page() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { goal } = useSelector((state) => state.form);

  const handlePrev = () => {
    navigate("/step2");
  };

  const handleNext = () => {
    navigate("/step4");
  };

  return (
    <StepLayout>
      <StepIndicator  currentStep={3} totalSteps={4}/>
      <form className="grid w-full grid-cols-1 gap-6">
        <Heading>운동 목표를 선택하세요</Heading>
        <Field>
          <Label>목표</Label>
          <div className="flex space-x-4">
            {["다이어트", "유지",  "벌크업"].map((option) => (
              <Button
                key={option}
                type="button"
                className={`flex-1 ${
                  goal === option ? "bg-teal-400 text-white" : "bg-neutral-50"
                }`}
                onClick={() => dispatch(setGoal(option))}
              >
                {option}
              </Button>
            ))}
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