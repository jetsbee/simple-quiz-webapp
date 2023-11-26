"use client";

import { StyledButton } from "@/app/(components)/(Common)/common.styled";
import { useRouter } from "next/navigation";
import { StyledMain } from "../(_styled)/page.styled";

export default function Home() {
  const router = useRouter();

  return (
    <StyledMain>
      <StyledButton onClick={() => router.push(`/quiz`)}>
        퀴즈 풀기
      </StyledButton>
      <StyledButton onClick={() => router.push(`/reviews`)}>
        오답 노트
      </StyledButton>
    </StyledMain>
  );
}
