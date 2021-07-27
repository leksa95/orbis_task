import { useState, useEffect, useMemo } from "react";

import { getData } from "../utils/getData";
import { getTickerDetails } from "../lib/apiRoutes";

interface TickerDetails {
  name: string;
  symbol: string;
  sector: string;
  industry: string;
  ceo: string;
  employees: number;
  hq_address: string;
  country: string;
  phone: string;
  description: string;
  similar: [];
  tags: [];
  error: string;
}

export const useTickerDetails = (ticker: string) => {
  const [data, setData] = useState<TickerDetails>();

  useEffect(() => {
    if (ticker) {
      getData(getTickerDetails(ticker)).then((data) => setData(data));
    }
  }, [ticker]);

  return useMemo(() => data, [data]);
};
