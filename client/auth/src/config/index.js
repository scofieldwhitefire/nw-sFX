export const MODE = import.meta.env.VITE_MODE;
const TEST = import.meta.env.VITE_LOCAL_URL;
const MAIN = import.meta.env.VITE_LIVE_URL;
const LANDING_TEST = import.meta.env.VITE_LOCAL_LANDING;
const LANDING_MAIN = import.meta.env.VITE_LIVE_LANDING;
const DASHBOARD_TEST = import.meta.env.VITE_LOCAL_DASHBOARD;
const DASHBOARD_MAIN = import.meta.env.VITE_LIVE_DASHBOARD;

export const API_URL = MODE === "test" ? TEST : MODE === "main" ? MAIN : "";

export const LANDING_URL =
  MODE === "test" ? LANDING_TEST : MODE === "main" ? LANDING_MAIN : "";

export const DASHBOARD_URL =
  MODE === "test" ? DASHBOARD_TEST : MODE === "main" ? DASHBOARD_MAIN : "";

export const ACCESS = import.meta.env.VITE_ACCESS;
export const REFRESH = import.meta.env.VITE_ACCESS;
export const IPINFO_API = import.meta.env.VITE_IPINFO_API;
export const SK = import.meta.env.VITE_SECRET_KEY;
export const SECURE = import.meta.env.VITE_SECURE;
