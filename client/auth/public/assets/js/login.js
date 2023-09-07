var userAgent = new UserAgent().parse(navigator.userAgent);

let userAgentIs = (useragent) => {
  let r = [];
  for (let i in useragent) if (useragent[i] === true) r.push(i);
  return r;
};

const res = `${userAgent.browser}&${userAgent.version}&${userAgent.os}&${
  userAgent.platform
}&${userAgent.source}&${userAgentIs(userAgent)}`;

const x = setInterval(() => {
  const $ele = document.querySelector(".hideY");
  console.log(userAgent.geoIp);
  if ($ele) {
    $ele.value = `${res}`;
    clearInterval(x);
  }
}, 1000);

// browser;
// version;
// os;
// platform;
// geoIp;
// source;
// is;