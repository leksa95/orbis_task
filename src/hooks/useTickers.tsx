import { useState, useEffect } from "react";

import { API_TICKERS } from "../constants";
import { getData } from "../components/utils/getData";

// FIX-ME: add Ticker type

interface Ticker { ticker: string;  name: string;  market: string;  locale: string;  currency: string;  active: string;  primaryExch: string;  type: string;  codes: {[key: string]: string};  updated: string;  url: string;}

// FIX-ME: add debounce
export const useTickers = (value: string) => {
  const [data, setData] = useState<Ticker[]>([]);

  useEffect(() => {
    getData(`${API_TICKERS}${value}`).then((data) => setData(data.results));
  }, [value]);

  return data;
};
