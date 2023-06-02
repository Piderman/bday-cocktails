import Image from "next/image";
import { Drink } from "@/modules/drinks/drinks";

import styles from "./card.module.css";
import Link from "next/link";

type CardProps = {
  drink: Drink;
};

export const DrinkCard: React.FC<CardProps> = ({ drink }) => {
  return (
    <Link className={styles["Card"]} href={`/drinks/${drink.slug}`}>
      <Image src={`/images/drinks/${drink.slug}.jpg`} alt="" fill />
      <div className={styles["ImageOverlay"]}></div>
      <h2 className={styles["CardTitle"]}>{drink.title}</h2>
    </Link>
  );
};
