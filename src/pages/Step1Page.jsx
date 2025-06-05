// src/pages/Step1Page.jsx

import { useNavigate } from "react-router-dom";
import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { Input } from "../components/input";
import { StepIndicator } from "../components/StepIndicator";

import { useDispatch, useSelector } from "react-redux";
import { setHeight, setWeight, setGender } from "../store/slices/formSlice";

function Step1Page() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { height, weight, gender } = useSelector((state) => state.form);

  const handleNext = () => {
    navigate("/step2");
  };

  return (
    <StepLayout>
      <StepIndicator currentStep={1} totalSteps={4}/>
      <form className="grid w-full grid-cols-1 gap-6">
        <Heading>기본 정보를 입력해 주세요</Heading>

        <Field>
          <Label htmlFor="height">키 (cm)</Label>
          <Input type="number" name="height" id="height" placeholder="예: 175" 
          value={height} onChange={(e) => dispatch(setHeight(e.target.value))} />
        </Field>

        <Field>
          <Label htmlFor="weight">몸무게 (kg)</Label>
          <Input type="number" name="weight" id="weight" placeholder="예: 68" 
          value={weight} onChange={(e) => dispatch(setWeight(e.target.value))}/>
        </Field>

        <Field>
          <Label>성별</Label>
          <div className="flex space-x-4">
            <Button
              type="button"
              className={`flex-1 px-4 py-2 rounded-lg ${
                gender === "남성" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => dispatch(setGender("남성"))} // 🔥 클릭 시 상태 업데이트
            >
              남성
            </Button>
            <Button
              type="button"
              className={`flex-1 px-4 py-2 rounded-lg ${
                gender === "여성" ? "bg-teal-400 text-white" : "bg-neutral-50"
              }`}
              onClick={() => dispatch(setGender("여성"))} // 🔥 클릭 시 상태 업데이트
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
