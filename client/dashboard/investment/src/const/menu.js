import { BarChartIconSVG, ChartIconSVG, HomeIconSVG, ScanIconSVG, StarIconSVG, UsersIconSVG, WalletIconSVG } from "../components/atom/icons";

export const Menus = [
  {
    hr: !!0,
    title: "Dashboard",
    link: "/",
    icon: HomeIconSVG,
    subMenu: {
      hasSub: !!0,
      menu: [],
    },
  },
  {
    hr: !!1,
  },
  {
    hr: !!0,
    title: "Invest",
    link: "/invest",
    icon: ChartIconSVG,
    subMenu: {
      hasSub: !!0,
      menu: [],
    },
  },
  {
    hr: !!0,
    title: "Deposit",
    link: "/deposit",
    icon: WalletIconSVG,
    subMenu: {
      hasSub: !!0,
      menu: [],
    },
  },
  {
    hr: !!0,
    title: "Withdraw",
    link: "/withdraw",
    icon: ScanIconSVG,
    subMenu: {
      hasSub: !!0,
      menu: [],
    },
  },
  {
    hr: !!1,
  },
  {
    hr: !!0,
    title: "Upgrade",
    link: "/upgrade",
    icon: StarIconSVG,
    subMenu: {
      hasSub: !!0,
      menu: [],
    },
  },
  {
    hr: !!0,
    title: "Referrals",
    link: "/referrals",
    icon: UsersIconSVG,
    subMenu: {
      hasSub: !!0,
      menu: [],
    },
  },
  {
    hr: !!1,
  },
  {
    hr: !!0,
    title: "Transactions",
    link: "/transactions",
    icon: BarChartIconSVG,
    subMenu: {
      hasSub: !!0,
      menu: [],
    },
  },
  {
    hr: !!1,
  },
];
