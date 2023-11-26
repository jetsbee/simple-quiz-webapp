"use client";

import { QuizResult } from "@/app/(components)/(QuizResult)/QuizResult";
import { useIdParams } from "@/app/(hooks)/useIdParams";

export default function Result() {
  const id = useIdParams() ?? "";
  const propsForQuizResult = {
    id: +id,
  };

  return (
    <main>
      <QuizResult {...propsForQuizResult} />
    </main>
  );
}
