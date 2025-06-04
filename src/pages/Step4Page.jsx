import { useNavigate } from "react-router-dom";
import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";
import { StepIndicator } from "../components/StepIndicator"; // StepIndicator 임포트
import { useState } from "react"; // 상태 관리

function Step4Page() {
  const navigate = useNavigate(); // navigate 훅 사용
  const [frequency, setFrequency] = useState(null);
  const [duration, setDuration] = useState(null);

  const handlePrev = () => {
    navigate("/step3"); // "이전" 버튼 클릭 시 Step3으로 이동
  };

  const handleNext = () => {
    navigate("/step5"); // "다음" 버튼 클릭 시 Step5로 이동
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
            <Button 
              type="button" bg-teal-400 text-white
              className={`flex-1 ${frequency === "1-2회" ? 'bg-teal-400 text-white' : 'bg-neutral-50'}`} 
              onClick={() => setFrequency("1-2회")}
            >
              1-2회
            </Button>
            <Button 
              type="button" 
              className={`flex-1 ${frequency === "3-4회" ? 'bg-teal-400 text-white' : 'bg-neutral-50'}`} 
              onClick={() => setFrequency("3-4회")}
            >
              3-4회
            </Button>
            <Button 
              type="button" 
              className={`flex-1 ${frequency === "5-6회" ? 'bg-teal-400 text-white' : 'bg-neutral-50'}`} 
              onClick={() => setFrequency("5-6회")}
            >
              5-6회
            </Button>
            <Button 
              type="button" 
              className={`flex-1 ${frequency === "매일" ? 'bg-teal-400 text-white' : 'bg-neutral-50'}`} 
              onClick={() => setFrequency("매일")}
            >
              매일
            </Button>
          </div>
        </Field>

        {/* 운동 시간 선택 */}
        <Field>
          <Label>운동 시간</Label>
          <div className="flex space-x-4">
            <Button 
              type="button" 
              className={`flex-1 ${duration === "30분 이하" ? 'bg-teal-400 text-white' : 'bg-neutral-50'}`} 
              onClick={() => setDuration("30분 이하")}
            >
              30분 이하
            </Button>
            <Button 
              type="button" 
              className={`flex-1 ${duration === "60분 이하" ? 'bg-teal-400 text-white' : 'bg-neutral-50'}`} 
              onClick={() => setDuration("60분 이하")}
            >
              60분 이하
            </Button>
            <Button 
              type="button" 
              className={`flex-1 ${duration === "60분 이상" ? 'bg-teal-400 text-white' : 'bg-neutral-50'}`} 
              onClick={() => setDuration("60분 이상")}
            >
              60분 이상
            </Button>
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