import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { StepIndicator } from "../components/StepIndicator";

function Step1Page() {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState(null); // 🔥 성별 선택 상태 추가

  const handleNext = () => {
    navigate("/step2");
  };

  return (
    <StepLayout>
      <StepIndicator />
      <form className="grid w-full grid-cols-1 gap-6">
        <Heading>기본 정보를 입력해 주세요</Heading>

        <Field>
          <Label htmlFor="height">키 (cm)</Label>
          <Input type="number" name="height" id="height" placeholder="예: 175" />
        </Field>

        <Field>
          <Label htmlFor="weight">몸무게 (kg)</Label>
          <Input type="number" name="weight" id="weight" placeholder="예: 68" />
        </Field>

        <Field>
          <Label>성별</Label>
          <div className="flex space-x-4">
            <Button
              type="button"
              className={`flex-1 px-4 py-2 rounded-lg ${
                selectedGender === "남성" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => setSelectedGender("남성")} // 🔥 클릭 시 상태 업데이트
            >
              남성
            </Button>
            <Button
              type="button"
              className={`flex-1 px-4 py-2 rounded-lg ${
                selectedGender === "여성" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => setSelectedGender("여성")} // 🔥 클릭 시 상태 업데이트
            >
              여성
            </Button>
          </div>
        </Field>

        <Button
          type="button"
          className="w-full"
          onClick={handleNext}
        >
          다음
        </Button>
      </form>
    </StepLayout>
  );
}

export default Step1Page;
