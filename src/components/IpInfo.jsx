import React from "react";
import styles from "./styles.module.css";

const IpInfo = ({ ipInfo }) => {
  return (
    <section className={styles.responseInfo}>
      <span className={styles.textwrap}>
        <h2>IP ADDRESS</h2>
        <b>{ipInfo.ip}</b>
      </span>
      <span>
        <h2>LOCATION</h2>
        <b>{ipInfo.location.region}</b>
      </span>
      <span className={styles.nowrap}>
        <h2>TIMEZONE</h2>
        <b>UTC{ipInfo.location.timezone}</b>
      </span>
      <span>
        <h2>ISP</h2>
        <b>{ipInfo.isp}</b>
      </span>
    </section>
  );
};

export default IpInfo;
