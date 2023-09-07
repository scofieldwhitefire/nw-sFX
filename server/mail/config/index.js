const all = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz123456789";
const Az = "ABCDEFGHIJKLMNPQRSTUVWXYZabcdefghijklmnpqrstuvwxyz";
const AZ = "ABCDEFGHIJKLMNPQRSTUVWXYZ";
const AZn = "ABCDEFGHIJKLMNPQRSTUVWXYZ123456789";
const az = "abcdefghijklmnpqrstuvwxyz";
const azn = "abcdefghijklmnpqrstuvwxyz123456789";
const n = "123456789";

const generateString = (l, s) => {
  const characters =
    s === "all"
      ? all
      : s === "Az"
      ? Az
      : s === "AZ"
      ? AZ
      : s === "az"
      ? az
      : s === "AZn"
      ? AZn
      : s === "azn"
      ? azn
      : n;
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < l; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
};

module.exports = generateString;
