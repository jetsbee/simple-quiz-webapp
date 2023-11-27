export interface Quiz {
  question: string;
  answers: string[];
  correctAnswer: string;
  startTime: number;
  numOfQuiz: number;
}

export interface Props {
  quiz: Quiz;
}
