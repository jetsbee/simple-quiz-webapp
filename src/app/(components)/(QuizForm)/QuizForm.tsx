import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { useState } from "react";
import { Props } from "./QuizForm.type";

export const QuizForm = ({ quiz }: Props) => {
  const { isAnswerSelected, setIsAnswerSelected } = useQuizStore();
  const [selectedAnswer, setSelectedAnswer] = useState<string>();

  return (
    quiz && (
      <form>
        <fieldset
          disabled={isAnswerSelected}
          onChange={(e) => {
            if (!(e.target instanceof HTMLInputElement)) return;

            const { value: selectedAnswer } = e.target;
            setSelectedAnswer(selectedAnswer);
            setIsAnswerSelected(true);
          }}
        >
          <legend>{quiz.question}</legend>
          {quiz.answers.map((answer) => (
            <label key={answer}>
              <input type="radio" name="answers" value={answer} />
              {answer}
            </label>
          ))}
        </fieldset>
        {isAnswerSelected &&
          (selectedAnswer === quiz.correctAnswer ? (
            <p>정답입니다.</p>
          ) : (
            <>
              <p>오답입니다.</p>
              <p>정답: {quiz.correctAnswer}</p>
            </>
          ))}
      </form>
    )
  );
};
