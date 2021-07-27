import {useState, useEffect, useMemo } from "react";

import { getData } from "../utils/getData";
import { getFormatDate } from "../utils/date";
import { getTickerChart } from "../lib/apiRoutes";

export const useTickerChart = (ticker: string) => {
  const [data, setData] = useState({});

  useEffect(() => {
    const currentMouth = getFormatDate({ date: new Date() });
    const prevMouth = getFormatDate({ date: new Date(), extraMonth: -1 });

    getData(getTickerChart(ticker, prevMouth, currentMouth)).then((data) =>
      setData(data)
    );
  }, [ticker]);

  return useMemo(() => data, [data]);
};
