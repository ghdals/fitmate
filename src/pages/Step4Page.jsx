// src/pages/Step4Page.jsx
import { useNavigate } from "react-router-dom";
import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { StepIndicator } from "../components/StepIndicator"; // StepIndicator 임포트

import { useDispatch, useSelector} from 'react-redux';
import { setFrequency, setDuration } from "../store/slices/formSlice";

function Step4Page() {
  const navigate = useNavigate(); // navigate 훅 사용
  const dispatch = useDispatch();
  const { frequency, duration } = useSelector((state)=>(state.form));

  const handlePrev = () => {
    navigate("/step3"); // "이전" 버튼 클릭 시 Step3으로 이동
  };

  const handleNext = () => {
    navigate("/result"); // "다음" 버튼 클릭 시 Step5로 이동
  };

  return (
    <StepLayout>
      {/* Step Indicator 추가 */}
      <StepIndicator currentStep={4} totalSteps={4} />

      <form className="grid w-full grid-cols-1 gap-6">
        <Heading>운동 빈도와 시간을 선택하세요</Heading>
        
        {/* 운동 빈도 선택 */}
        <Field>
          <Label>운동 빈도 (주당)</Label>
          <div className="flex space-x-4">
            {["1-2회", "3-4회", "5-6회", "매일"].map((option) => (
              <Button
                key={option}
                type="button"
                className={`flex-1 ${
                  frequency === option ? "bg-teal-400 text-white" : "bg-neutral-50"
                }`}
                onClick={() => dispatch(setFrequency(option))}
              >
                {option}
              </Button>
            ))}
          </div>
        </Field>

        {/* 운동 시간 선택 */}
        <Field>
          <Label>운동 시간</Label>
          <div className="flex space-x-4">
            {["30분 이하", "60분 이하", "60분 이상"].map((option) => (
              <Button
                key={option}
                type="button"
                className={`flex-1 ${
                  duration === option ? "bg-teal-400 text-white" : "bg-neutral-50"
                }`}
                onClick={() => dispatch(setDuration(option))}
              >
                {option}
              </Button>
            ))}
          </div>
        </Field>

        {/* 이전 버튼: Step3으로 이동 */}
        <div className="flex space-x-4">
          <Button 
            type="button" 
            className="flex-1"
            onClick={handlePrev} // 이전 페이지로 이동
          >
            이전
          </Button>

          {/* 다음 버튼: Step5으로 이동 */}
          <Button 
            type="button" 
            className="flex-1"
            onClick={handleNext} // Step5으로 이동
          >
            다음
          </Button>
        </div>
      </form>
    </StepLayout>
  );
}

export default Step4Page;