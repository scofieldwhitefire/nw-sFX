import axios from "axios";
import { API_URL } from "./";
import { v4 as uuidv4 } from "uuid";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link as LNK, NavLink as NL } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import Clipboard from "react-clipboard.js";
import { DateTime } from "luxon";

export const Axios = axios.create({
  baseURL: API_URL,
});

export const uuid = uuidv4();

export const Toast = (
  t = "",
  m,
  o = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  }
) => {
  if (t === "success") {
    toast.success(m, o);
  } else if (t === "error") {
    toast.error(m, o);
  } else if (t === "warning") {
    toast.warning(m, o);
  } else if (t === "info") {
    toast.info(m, o);
  } else if (t === "promise") {
    toast.loading(m, o);
  } else if (t === "default") {
    toast(m);
  } else {
    toast.dismiss();
  }
};
export const TC = ToastContainer;
export const CB = Clipboard;
export const Link = LNK;
export const NavLink = NL;

const toTimestamp = (strDate) => {
  var datum = Date.parse(strDate);
  return datum;
};

TimeAgo.addDefaultLocale(en);
const tA = new TimeAgo("en-US");

export const timeAgo = (x) => tA.format(toTimestamp(x));

const curr = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

const deci = new Intl.NumberFormat("en-US", {
  style: "decimal",
  currency: "USD",
});

export const currency = (a, t = "c") => {
  if (t === "c") {
    return curr.format(parseFloat(a));
  } else {
    return `$${deci.format(parseFloat(a))}`;
  }
};

export const DT = DateTime

export const TimeZone = DT.now().setZone("America/Los_Angeles", {
  keepLocalTime: true,
});
