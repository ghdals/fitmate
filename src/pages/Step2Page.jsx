// src/pages/Step2Page.jsx
import { useNavigate } from "react-router-dom";
import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { StepIndicator } from "../components/StepIndicator";

import { useDispatch, useSelector } from "react-redux";
import { setLevel } from "../store/slices/formSlice";

function Step2Page() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { level } = useSelector((state) => state.form);

  const handlePrev = () => {
    navigate("/step1");
  };

  const handleNext = () => {
    navigate("/step3");
  };

  return (
    <StepLayout>
      <StepIndicator currentStep={2} totalSteps={4}/>
      <form className="grid w-full grid-cols-1 gap-6">
        <Heading>레벨을 선택하세요</Heading>
        <Field>
          <Label>레벨</Label>
          <div className="flex space-x-4">

            {["초급자", "중급자", "상급자"].map((option) => (
              <Button
                key={option}
                type="button"
                className={`flex-1 ${
                  level === option ? "bg-teal-400 text-white" : "bg-neutral-50"
                }`}
                onClick={() => dispatch(setLevel(option))}
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

export default Step2Page;
