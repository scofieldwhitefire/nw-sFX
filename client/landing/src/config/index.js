export const MODE = import.meta.env.VITE_MODE;
const TEST = import.meta.env.VITE_LOCAL_URL;
const MAIN = import.meta.env.VITE_LIVE_URL;

export const API_URL = MODE === "test" ? TEST : MODE === "main" ? MAIN : "";

export const ACCESS = import.meta.env.VITE_ACCESS;
export const REFRESH = import.meta.env.VITE_ACCESS;
