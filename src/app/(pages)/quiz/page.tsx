"use client";

import { useQuestions } from "@/app/(states)/(server)/TriviaQuestions";
import { useState } from "react";

export default function Quiz() {
  const { data, isFetching, isError } = useQuestions();
  const [questionsIdx, setQuestionsIdx] = useState(0);

  return (
    <main>
      {isError || data?.length === 0 ? (
        <p>잠시 후 다시 시도해 주세요.</p>
      ) : isFetching || !data ? (
        <p>로딩중입니다.</p>
      ) : (
        <>
          <p>
            {questionsIdx + 1}/{data.length}
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              const { value: selectedAnswer } =
                e.currentTarget.elements.namedItem("answers") as RadioNodeList;
              if (!selectedAnswer) return;

              console.log(
                selectedAnswer,
                data[questionsIdx].correctAnswer,
                data[questionsIdx].correctAnswer === selectedAnswer
              );

              setQuestionsIdx((idx) =>
                idx === data.length - 1 ? idx : idx + 1
              );
            }}
          >
            <fieldset>
              <legend>{data[questionsIdx].question}</legend>
              {data[questionsIdx].answers.map((answer) => (
                <label key={answer}>
                  <input type="radio" name="answers" value={answer} />
                  {answer}
                </label>
              ))}
            </fieldset>
            <button type="submit">정답 확인</button>
          </form>
        </>
      )}
    </main>
  );
}
