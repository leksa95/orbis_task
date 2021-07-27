import { withBaseUrl } from "../utils/api";

export const getTickerSearch = (ticker: string) =>
  withBaseUrl(`/v3/reference/tickers?search=${ticker}`);
export const getTickerDetails = (ticker: string) =>
  withBaseUrl(`/v1/meta/symbols/${ticker}/company`);
export const getTickerChart = (
  ticker: string,
  prevMouth: any,
  currentMouth: any
) =>
  withBaseUrl(
    `/v2/aggs/ticker/${ticker}/range/1/month/${prevMouth}/${currentMouth}`
  );
export const getDailyOpenClose = (ticker: string, date: any) =>
  withBaseUrl(`/v1/open-close/${ticker}/${date}`);
