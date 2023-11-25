interface Quiz {
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface Props {
  quiz?: Quiz;
  numOfQuiz: number;
}
