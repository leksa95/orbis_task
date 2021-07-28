import { useState, useEffect, useMemo } from "react";

import { getData } from "../utils/getData";
import { getFormatDate } from "../utils/date";
import { getTickerChart } from "../lib/apiRoutes";

interface TickerRangeData {
  c: number;
  h: number;
  l: number;
  n: number;
  o: number;
  t: number;
  v: number;
}

export const useTickerChart = (ticker: string) => {
  const [data, setData] = useState<TickerRangeData[]>([]);

  useEffect(() => {
    const currentMouth = getFormatDate({ date: new Date() });
    const prevMouth = getFormatDate({ date: new Date(), extraMonth: -1 });

    getData(getTickerChart(ticker, prevMouth, currentMouth)).then((data) =>
      setData(data.results)
    );
  }, [ticker]);

  return useMemo(() => data, [data]);
};
