import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { useState } from "react";
import { Props } from "./QuizForm.type";

export const QuizForm = ({
  quiz: { question, answers, correctAnswer },
}: Props) => {
  const { isAnswerSelected, setIsAnswerSelected } = useQuizStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  const isAnswerSelectedAndCorrect =
    isAnswerSelected && selectedAnswer === correctAnswer;
  const isAnswerSelectedAndWrong =
    isAnswerSelected && selectedAnswer !== correctAnswer;

  const propsForFieldset = {
    disabled: isAnswerSelected,
    onChange: (e: React.FormEvent<HTMLFieldSetElement>) => {
      if (!(e.target instanceof HTMLInputElement)) return;

      const { value: selectedAnswer } = e.target;
      setSelectedAnswer(selectedAnswer);
      setIsAnswerSelected(true);
    },
  };

  return (
    <form>
      <fieldset {...propsForFieldset}>
        <legend>{question}</legend>
        {answers.map((answer) => (
          <label key={answer}>
            <input type="radio" name="answers" value={answer} />
            {answer}
          </label>
        ))}
      </fieldset>
      {isAnswerSelectedAndCorrect && <p>정답입니다.</p>}
      {isAnswerSelectedAndWrong && (
        <>
          <p>오답입니다.</p>
          <p>정답: {correctAnswer}</p>
        </>
      )}
    </form>
  );
};
