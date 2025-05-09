// pages/step3-page.jsx
import { useNavigate } from "react-router-dom";
import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { StepIndicator } from "../components/StepIndicator";

function Step3Page() {
  const navigate = useNavigate();

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
            <Button type="button" className="flex-1 bg-zinc-800 hover:bg-zinc-700">
              체중 감량
            </Button>
            <Button type="button" className="flex-1 bg-zinc-800 hover:bg-zinc-700">
              근육 증가
            </Button>
            <Button type="button" className="flex-1 bg-zinc-800 hover:bg-zinc-700">
              유지
            </Button>
          </div>
        </Field>

        <div className="flex space-x-4">
          <Button
            type="button"
            className="flex-1 bg-zinc-800 hover:bg-zinc-700"
            onClick={handlePrev}
          >
            이전
          </Button>
          <Button
            type="button"
            className="flex-1 bg-zinc-800 hover:bg-zinc-700"
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
