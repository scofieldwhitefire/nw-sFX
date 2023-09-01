export const MODE = import.meta.env.VITE_MODE;
const TEST = import.meta.env.VITE_LOCAL_URL;
const MAIN = import.meta.env.VITE_LIVE_URL;
const LOGIN_TEST = import.meta.env.VITE_LOCAL_LOGIN;
const LOGIN_MAIN = import.meta.env.VITE_LIVE_LOGIN;
const DASHBOARD_TEST = import.meta.env.VITE_LOCAL_DASHBOARD;
const DASHBOARD_MAIN = import.meta.env.VITE_LIVE_DASHBOARD;

export const API_URL = MODE === "test" ? TEST : MODE === "main" ? MAIN : "";

export const LOGIN_URL =
  MODE === "test" ? LOGIN_TEST : MODE === "main" ? LOGIN_MAIN : "";

export const DASHBOARD_URL =
  MODE === "test" ? DASHBOARD_TEST : MODE === "main" ? DASHBOARD_MAIN : "";

export const ACCESS = import.meta.env.VITE_ACCESS;
export const REFRESH = import.meta.env.VITE_ACCESS;
