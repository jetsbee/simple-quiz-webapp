interface TriviaQuestion {
  type: "multiple" | "boolean";
  difficulty: "easy" | "medium" | "hard";
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface TriviaQuestionsResp {
  response_code: 0 | 1 | 2 | 3 | 4 | 5;
  results: TriviaQuestion[];
}

export const getTriviaQuestions = async (): Promise<TriviaQuestionsResp> => {
  const url = "https://opentdb.com/api.php?amount=5&type=multiple";

  return await (await fetch(url)).json();
};
