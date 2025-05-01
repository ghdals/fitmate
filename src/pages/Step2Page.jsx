import { StepLayout } from "../components/step-layout";
import { Button } from "../components/button";
import { Field, Label } from "../components/fieldset";
import { Heading } from "../components/heading";

function Step2Page() {
  return (
    <StepLayout>
      <form className="grid w-full grid-cols-1 gap-6">
        <Heading>레벨을 선택하세요</Heading>
        <Field>
          <Label>성별</Label>
          <div className="flex space-x-4">
            <Button type="button" className="flex-1 bg-zinc-800 hover:bg-zinc-700">
              초급자
            </Button>
            <Button type="button" className="flex-1 bg-zinc-800 hover:bg-zinc-700">
              중급자
            </Button>
            <Button type="button" className="flex-1 bg-zinc-800 hover:bg-zinc-700">
              상급자
            </Button>
          </div>
        </Field>

        <Button type="submit" className="w-full">
          다음
        </Button>
      </form>
    </StepLayout>
  );
}

export default Step2Page;
