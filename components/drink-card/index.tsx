import Image from "next/image";
import { Drink } from "@/modules/drinks/drinks";

import styles from "./card.module.css";

type CardProps = {
  drink: Drink;
};

export const DrinkCard: React.FC<CardProps> = ({ drink }) => {
  return (
    <a className={styles["Card"]} href={`/drinks/${drink.slug}`}>
      <Image src={`/images/drinks/${drink.slug}.jpg`} alt="" fill />
      <div className={styles["ImageOverlay"]}></div>
      <h2 className={styles["CardTitle"]}>{drink.title}</h2>
    </a>
  );
};
