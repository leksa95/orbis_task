import { LineChart, Line } from "recharts";

import { useTickerChart } from "../../../hooks/useTickerChart";

import useStyles from "./useStyles";

interface Props {
  symbol: string;
}

const ChartComponent = ({ symbol }: Props) => {
  const results = useTickerChart(symbol);
  const data = results.map((e: { c: number }) => ({
    value: e.c,
  }));

  const styles = useStyles();

  return (
    <LineChart className={styles.chart} width={400} height={150} data={data}>
      <Line
        type="monotone"
        dataKey="value"
        stroke="#e51616"
        strokeWidth={3}
        dot={false}
      />
    </LineChart>
  );
};

export default ChartComponent;
