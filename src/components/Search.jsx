import React from "react";
import styles from "./styles.module.css";

const Search = () => {
  return (
    <section className={styles.top}>
      <h1>IP Address Tracker</h1>
      <div className={styles.search}>
        {/* <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for any IP address or domain"
      />
      <button onClick={() => console.log(query)}>
        <img src="../images/icon-arrow.svg" alt="arrow right" />
      </button> */}
      </div>
    </section>
  );
};

export default Search;
