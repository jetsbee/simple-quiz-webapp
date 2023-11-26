"use client";

import { QuizResult } from "@/app/(components)/(QuizResult)/QuizResult";
import { ReviewNotes } from "@/app/(components)/(ReviewNotes)/ReviewNotes";
import { useIdParams } from "@/app/(hooks)/useIdParams";
import { useIsClient } from "@/app/(hooks)/useIsClient";
import { useReviewIds } from "@/app/(states)/(Client)/(review)/hooks";
import Link from "next/link";
import { StyledMain } from "../(_styled)/page.styled";
import { StyledListWrapper } from "./page.styled";

export default function Reviews() {
  const isClient = useIsClient();
  const id = useIdParams() ?? "";
  const reviewIds = useReviewIds();

  if (!isClient) return;

  if (!id) {
    return (
      <StyledMain>
        <StyledListWrapper>
          {reviewIds.length === 0 ? (
            <p>풀었던 퀴즈가 없습니다.</p>
          ) : (
            <>
              <p>풀었던 퀴즈 결과</p>
              <ul>
                {reviewIds.map((id) => (
                  <li key={id}>
                    <Link href={`/reviews?id=${id}`}>{id}</Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </StyledListWrapper>
      </StyledMain>
    );
  }

  return (
    <StyledMain>
      <QuizResult id={+id} />
      <ReviewNotes id={+id} />
    </StyledMain>
  );
}
