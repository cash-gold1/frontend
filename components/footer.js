import { useRouter } from "next/router";

import Link from "next/link";

import useWindowSize from "../hooks/useWindowSize";
import menuRoutesList from "../data/menuRoutesList";

import styles from "./footer.module.css";
import ColorGuide from "../styles/colorGuide";

import { contractAddresses, CHAIN_ID } from "../sushi/lib/constants.js";

export default function Footer() {
  const { responsiveWidth, responsiveHeight } = useWindowSize();
  const { route } = useRouter();

  const socialOptions = [
    {
      title: "MasterChef Contract",
      link: "https://etherscan.io/address/0x9fB90Ac76A1eae4DAeFfc6e439EF9438F73Fd793#writeContract",
    },
    { title: "Github", link: "https://github.com/cash-gold1" },
    { title: "Twitter", link: "https://twitter.com/cache_gold" },
    { title: "Medium", link: "https://medium.com/@cache.gold" },
    { title: "Coingecko", link: "https://www.coingecko.com/fr/pi%C3%A8ces/cache-gold" },
    
  ];

  return (
    <footer className="container" style={{ paddingTop: 0 }}>
      <div
        className="containerSpaceBetween"
        style={{ width: "60%", margin: "0 auto" }}
      >
        {socialOptions.map(({ title, link }) => (
          <Link href={link}>
            <p style={{ cursor: "pointer" }}>{title}</p>
          </Link>
        ))}
      </div>

      <div className="separatorHorizontal" />

      <p style={{ textAlign: "center" }}>Genesis Farming 2020 - 2021</p>
    </footer>
  );
}
