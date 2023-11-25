import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { Props } from "./QuizForm.type";

export const QuizForm = ({ quiz, numOfQuiz }: Props) => {
  const { quizIdx, incrementQuizIdx } = useQuizStore();

  return (
    quiz && (
      <form
        onSubmit={(e) => {
          e.preventDefault();

          const { value: selectedAnswer } = e.currentTarget.elements.namedItem(
            "answers"
          ) as RadioNodeList;
          if (!selectedAnswer) return;

          console.log(
            selectedAnswer,
            quiz.correctAnswer,
            quiz.correctAnswer === selectedAnswer
          );

          quizIdx < numOfQuiz - 1 && incrementQuizIdx();
        }}
      >
        <fieldset>
          <legend>{quiz.question}</legend>
          {quiz.answers.map((answer) => (
            <label key={answer}>
              <input type="radio" name="answers" value={answer} />
              {answer}
            </label>
          ))}
        </fieldset>
        <button type="submit">정답 확인</button>
      </form>
    )
  );
};
