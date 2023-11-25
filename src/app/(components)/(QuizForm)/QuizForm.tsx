import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { Props } from "./QuizForm.type";

export const QuizForm = ({ quiz }: Props) => {
  const { isAnswerSelected, setIsAnswerSelected } = useQuizStore();

  return (
    quiz && (
      <form>
        <fieldset
          disabled={isAnswerSelected}
          onChange={(e) => {
            const { value: selectedAnswer } = e.target as HTMLInputElement;
            if (!selectedAnswer) return;

            console.log(
              selectedAnswer,
              quiz.correctAnswer,
              quiz.correctAnswer === selectedAnswer
            );

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
      </form>
    )
  );
};
