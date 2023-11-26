import { useIsClient } from "@/app/(hooks)/useIsClient";
import { useReviewNoteById } from "@/app/(states)/(Client)/(review)/hooks";
import { notFound } from "next/navigation";
import { StyledWrapper } from "./ReviewNotes.styled";

export const ReviewNotes = ({ id }: { id: number }) => {
  const isClient = useIsClient();
  const reviewNotes = useReviewNoteById(id);

  if (!isClient) return;

  if (!reviewNotes) {
    notFound();
  }

  return (
    <StyledWrapper>
      <p>오답 노트</p>
      {reviewNotes.length === 0 ? (
        <p>틀린 문제가 없습니다.</p>
      ) : (
        <ul>
          {reviewNotes.map((note) => (
            <li key={note.question}>
              <div>틀린 문제: {note.question}</div>
              <div>선택한 답: {note.selectedAnswer}</div>
              <div>정답: {note.correctAnswer}</div>
              <div>
                선택지:
                {note.answers.map((answer) => (
                  <p key={answer}>{answer}</p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      )}
    </StyledWrapper>
  );
};
