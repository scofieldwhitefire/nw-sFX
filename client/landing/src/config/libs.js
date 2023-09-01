import axios from "axios";
import { API_URL } from "./";
import { v4 as uuidv4 } from "uuid";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link as LNK } from "react-router-dom";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

import { AdvancedImage } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";

export const Axios = axios.create({
  baseURL: API_URL,
});

export const uuid = uuidv4();
export const TC = ToastContainer;
export const Link = LNK;

export const AI = AdvancedImage;
const cld = new Cloudinary({
  cloud: {
    cloudName: "safewayfx",
  },
});
// https://res.cloudinary.com/safewayfx/image/upload/v1693438345/samples/sfx/landing/assets/bg.png
export const Image = (x) =>
  cld.image(`sfx/landing/assets/${x}`);

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

const toTimestamp = (strDate) => {
  var datum = Date.parse(strDate);
  return datum;
};

TimeAgo.addDefaultLocale(en);
const tA = new TimeAgo("en-US");

export const timeAgo = (x) => tA.format(toTimestamp(x));

export const curr = new Intl.NumberFormat("en-US", {
  style: "decimal",
  currency: "USD",
});

export const currency = (x) => {
  return `$${curr.format(parseFloat(x))}`;
};
