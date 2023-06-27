import { useEffect, useRef } from "react";
import styles from "./Works.module.scss";
export default function Works() {
  let list = [
    "url(../../src/assets/jpg1.jpg)",
    "url(../../src/assets/jpg2.jpg)",
    "url(../../src/assets/jpg3.jpg)",
  ];
  let root = useRef(null);
  let count = 0;

  useEffect(() => {
    setInterval(() => {
      count++;
      const childs = root.current.children;
      count %= childs.length;
      console.log(count, childs);
      for (const item of childs) {
        item.style.transform = `translateX(-${count * 100}%)`;
      }
    }, 3000);
  }, []);

  return (
    <div ref={root} className={styles.Carousel}>
      {list.map((item) => (
        <CarouselCard key={item} src={item} />
      ))}
    </div>
  );
}

function CarouselCard({ src }): JSX.Element {
  return (
    <div
      style={{
        backgroundImage: src,
        width: "650px",
        height: "500px",
        backgroundSize: "cover",
        display: "inline-block",
        transition: "all 0.5s ease",
      }}
    ></div>
  );
}
