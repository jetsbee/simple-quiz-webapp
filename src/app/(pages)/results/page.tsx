"use client";

import { QuizResult } from "@/app/(components)/(QuizResult)/QuizResult";
import { useIdParams } from "@/app/(hooks)/useIdParams";
import { StyledMain } from "../(_styled)/page.styled";

export default function Result() {
  const id = useIdParams() ?? "";
  const propsForQuizResult = {
    id: +id,
  };

  return (
    <StyledMain>
      <QuizResult {...propsForQuizResult} />
    </StyledMain>
  );
}
