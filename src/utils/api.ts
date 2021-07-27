import { BASE_URL } from "../constants/api";

export const withBaseUrl = (path: string) => `${BASE_URL}${path}`;
