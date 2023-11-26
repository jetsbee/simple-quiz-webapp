import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const SelectedAnswerChart = ({
  numOfCorrectAnswer,
  numOfWrongAnswer,
}: {
  numOfCorrectAnswer: number;
  numOfWrongAnswer: number;
}) => {
  const data = {
    labels: ["정답", "오답"],
    datasets: [
      {
        data: [numOfCorrectAnswer, numOfWrongAnswer],
        backgroundColor: ["rgba(75, 192, 192, 0.2)", "rgba(255, 99, 132, 0.2)"],
        borderColor: ["rgba(75, 192, 192, 1)", "rgba(255, 99, 132, 1)"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <p>정 오답에 대한 비율 차트: </p>
      <Pie data={data} />
    </div>
  );
};
// Ref 1. https://react-chartjs-2.js.org/examples/pie-chart/
// Ref 2. https://www.chartjs.org/docs/master/charts/doughnut.html#pie
