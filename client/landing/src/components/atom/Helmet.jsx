import { Helmet } from "react-helmet";

const Hmt = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} | SafewayFX - No.1 Platform for Investment, Trading, Mining,
        Crypto Loan and Crypto Jackpot
      </title>

      {/* <!-- Sites meta Data --> */}
      <meta
        name="application-name"
        content="SafewayFX - No.1 Platform for Investment, Trading, Mining, Crypto Loan and Crypto Jackpot"
      />
      <meta name="author" content="theSafewayFXNetworks" />
      <meta
        name="keywords"
        content="SafewayFX, Crypto, Forex, Investment, Trading, Mining, Crypto Loan and Crypto Jackpot"
      />
      <meta
        name="description"
        content="Experience the power of SafewayFX - No.1 Platform for Investment, Trading, Mining, Crypto Loan and Crypto Jackpot"
      />

      {/* <!-- OG meta data --> */}
      <meta
        property="og:title"
        content="SafewayFX - No.1 Platform for Investment, Trading, Mining, Crypto Loan and Crypto Jackpot"
      />
      <meta property="og:site_name" content="SafewayFX" />
      <meta property="og:url" content="index-5.html" />
      <meta
        property="og:description"
        content="Welcome to SafewayFX - No.1 Platform for Investment, Trading, Mining, Crypto Loan and Crypto Jackpot"
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="assets/images/og.png" />
    </Helmet>
  );
};

export default Hmt;
