import { useState, useEffect, useMemo } from "react";

import useDebounce from "../hooks/useDebounce";
import { getData } from "../utils/getData";
import { getTickerSearch } from "../lib/apiRoutes";

interface Ticker {
  ticker: string;
  name: string;
  market: string;
  locale: string;
  currency: string;
  active: string;
  primaryExch: string;
  type: string;
  codes: { [key: string]: string };
  updated: string;
  url: string;
}

export const useTickerSearch = (searchQuery: string) => {
  const [data, setData] = useState<Ticker[]>([]);
  const debouncedValue = useDebounce<string>(searchQuery, 500);

  useEffect(() => {
    if (!searchQuery) return;

    getData(getTickerSearch(debouncedValue)).then((data) =>
      setData(data.results)
    );
  }, [debouncedValue]);

  return useMemo(() => data, [data]);
};
