import { useQuizStore } from "@/app/(states)/(Client)/(quiz)/hooks";
import { Props } from "./QuizIndicator.type";

export const QuizIndicator = ({ numOfQuiz }: Props) => {
  const { quizIdx } = useQuizStore();

  return (
    <p>
      {quizIdx + 1}/{numOfQuiz}
    </p>
  );
};
