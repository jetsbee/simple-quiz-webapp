import { useIsClient } from "@/app/(hooks)/useIsClient";
import { useResultReview } from "@/app/(states)/(Client)/(review)/hooks";
import { notFound } from "next/navigation";
import { SelectedAnswerChart } from "../(SelectedAnswerChart)/SelectedAnswerChart";
import { StyledWrapper } from "./QuizResult.styled";

const timeFormat = (milliseconds: number) => {
  const totalSec = milliseconds / 1000;
  const roundedTotalSec = Math.round(totalSec);
  const minStr = Math.floor(totalSec / 60) + "";
  const secStr = (roundedTotalSec % 60) + "";

  return +minStr !== 0 ? `${minStr}분 ${secStr}초` : `${secStr}초`;
};

export const QuizResult = ({ id }: { id: number }) => {
  const isClient = useIsClient();
  const resultReview = useResultReview(id);

  if (!isClient) return;

  if (!resultReview) {
    notFound();
  }

  const { durationMs, numOfCorrectAnswer, numOfWrongAnswer } = resultReview;

  const propsForSelectedAnswerChart = {
    numOfCorrectAnswer,
    numOfWrongAnswer,
  };

  return (
    <StyledWrapper>
      <p>퀴즈 결과</p>
      <p>퀴즈를 맞칠 때까지 소요된 시간: {timeFormat(durationMs)}</p>
      <p>정답개수: {numOfCorrectAnswer}</p>
      <p>오답 수: {numOfWrongAnswer}</p>
      <SelectedAnswerChart {...propsForSelectedAnswerChart} />
    </StyledWrapper>
  );
};
