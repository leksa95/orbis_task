import { API_KEY } from "../../constants";

// FIX-ME: Set apiKey param
// FIX-ME: Set api to string
// FIX-ME: USE https://www.npmjs.com/package/camelize to avoid "hq_address"

const withApiKeyQueryParam = (path: string) => `${path}&apiKey=${API_KEY}`;

export const getData = (api: string) =>
  fetch(withApiKeyQueryParam(api)).then((data) => data.json());
