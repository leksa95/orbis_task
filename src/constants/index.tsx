export const API_TICKERS =
  "https://api.polygon.io/v3/reference/tickers?search=";

export const API_TICKERS_DETAILS = "https://api.polygon.io/v1/meta/symbols/";

// FIX-ME: rename file to 'api.ts'

// FIX-ME: keep API_KEY clean + Add to .env
export const API_KEY = "WfIfm3wNVvrqIiv8QqXcudUyKdW8EkQ5";

// FIX-ME: create API_PATHS_OBJ
const BASE_URL = 'https://api.polygon.io';

const withBaseUrl = (path: string) => `${BASE_URL}${path}`;

export const API_PATHS = {
  getSearchTickers: (ticker: string) => withBaseUrl(`/v3/reference/tickers?search=${ticker}`),
  getTickerDetails: (ticker: string) => withBaseUrl(`/v1/meta/symbols/${ticker}/company`),
};
