import { useState, useEffect } from "react";

import { API_TICKERS_DETAILS } from "../constants";
import { getData } from "../components/utils/getData";

export const useTickersDetails = (value: string) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (value) {
      getData(`${API_TICKERS_DETAILS}${value}/company?`).then((data) =>
        setData(data)
      );
    }
  }, [value]);

  return data;
};
