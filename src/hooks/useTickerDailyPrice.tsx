import { useState, useEffect, useMemo, useCallback } from "react";

import { getData } from "../utils/getData";
import { getFormatDate } from "../utils/date";
import { getDailyOpenClose } from "../lib/apiRoutes";

export const useTickerDailyPrice = (ticker: string) => {
  const [priceDifference, setPriceDifference] = useState(0);
  const [changePercent, setChangePercent] = useState(0);
  const [lastAvailablePrice, setLastAvailablePrice] = useState(0);

  const handleFetchDailyPrice = useCallback(async () => {
    try {
      const beforeDate = getFormatDate({ date: new Date(), extraDay: -1 });
      const prevDate = getFormatDate({ date: new Date(), extraDay: -2 });

      const { close: currentClose } = await getData(
        getDailyOpenClose(ticker, beforeDate)
      );
      const { close: prevClose } = await getData(
        getDailyOpenClose(ticker, prevDate)
      );

      const endOfDayClosePrice = currentClose as unknown as number;
      const prevDayClosePrice = prevClose as unknown as number;

      if (endOfDayClosePrice) {
        setLastAvailablePrice(endOfDayClosePrice);

        const priceChangeDifference = Number(
          (endOfDayClosePrice - prevDayClosePrice).toFixed(1)
        );
        const priceChangeDifferencePercent = Number(
          ((priceChangeDifference * 100) / endOfDayClosePrice).toFixed(1)
        );

        setPriceDifference(priceChangeDifference);
        setChangePercent(priceChangeDifferencePercent);
      }
    } catch (e) {
      console.error(e);
    }
  }, [ticker]);

  useEffect(() => {
    handleFetchDailyPrice();
  }, [handleFetchDailyPrice]);

  return useMemo(
    () => ({
      priceDifference,
      changePercent,
      lastAvailablePrice,
    }),
    [priceDifference, changePercent, lastAvailablePrice]
  );
};
