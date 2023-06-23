import React, { useState } from "react";
import Development from "../Development";
import ProductDesign from "../ProductDesign";
import WebDesign from "../WebDesign";
import styles from "./Works.module.scss";

const data = [
  "Web Design",
  "Development",
  "Illustration",
  "Product Design",
  "Social Media",
];

const Works = () => {
  const [work, setWork] = useState("Web Design");
  return (
    <section className={styles.Section}>
      <div className={styles.Container}>
        <section className={styles.Left}>
          <ul className={styles.List}>
            {data.map((item) => (
              <li
                className={styles.ListItem}
                key={item}
                text={item}
                onClick={() => setWork(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </section>
        <section className={styles.Right}>
          {work === "Web Design" ? (
            <WebDesign />
          ) : work === "Development" ? (
            <Development />
          ) : (
            <ProductDesign />
          )}
        </section>
      </div>
    </section>
  );
};

export default Works;
