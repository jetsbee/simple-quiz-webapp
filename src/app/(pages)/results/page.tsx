"use client";

import { StyledButton } from "@/app/(components)/(Common)/common.styled";
import { QuizResult } from "@/app/(components)/(QuizResult)/QuizResult";
import { useIdParams } from "@/app/(hooks)/useIdParams";
import { useRouter } from "next/navigation";
import { StyledMain } from "../(_styled)/page.styled";

export default function Result() {
  const id = useIdParams() ?? "";
  const router = useRouter();

  const propsForQuizResult = {
    id: +id,
  };
  const propsForHomeButton = {
    onClick: () => {
      router.replace("/");
    },
  };

  return (
    <StyledMain>
      <QuizResult {...propsForQuizResult} />
      <StyledButton {...propsForHomeButton}>처음으로 돌아가기</StyledButton>
    </StyledMain>
  );
}
