import { Row} from "antd";
import React from "react";
import styles from "../styles/Navbar.module.scss";
import { AiOutlineLogout } from "react-icons/ai";


export default function Navbar() {
  return (
    <Row className={styles.navContainer}>
      <Row className={styles.navItems}>
        <a className={styles.navLogo} href="/">
          DEVHERS
        </a>

        <a
          href="/home"
        >
          About
        </a>
        <a
          href="/events"
        >
          Events
        </a>
        <AiOutlineLogout
          color="#1b76ff"
          style={{ fontSize: "30px", cursor: "pointer" }}
          className={styles.navLogo}
        />
      </Row>
    </Row>
  );
}