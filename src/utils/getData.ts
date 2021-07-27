import { REACT_APP_API_KEY } from "../constants/api";

const withApiKeyQueryParam = (path: string) =>
  path.includes("?")
    ? `${path}&apiKey=${REACT_APP_API_KEY}`
    : `${path}?apiKey=${REACT_APP_API_KEY}`;

export const getData = (api: string) =>
  fetch(withApiKeyQueryParam(api))
    .then((data) => data.json())
    .catch((e) => console.error(e));
