import Image from "next/image";
import { Drink } from "@/modules/drinks/drinks";
import { useWindowScroll } from "@mantine/hooks";

import styles from "./page.module.css";
import classNames from "classnames";
import Link from "next/link";

type PageProps = {
  entry: Drink;
};

export const DrinkPage: React.FC<PageProps> = ({ entry }) => {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <article
      data-slug={entry.slug}
      className={classNames([styles["Page"]], {
        [styles["Page--scrolled"]]: scroll.y > 64,
      })}
    >
      <div className={styles["PageImage"]}>
        <Image src={`/images/drinks/${entry.slug}.jpg`} alt="" fill />
      </div>
      <div className={styles["PageContent"]}>
        <header className="flex mb-8 items-center justify-between">
          <h1 className={styles["PageTitle"]}>{entry.title}</h1>
          <Image
            src={`/images/${entry.glass}.png`}
            alt=""
            width={64}
            height={64}
          />
        </header>

        <div className={styles["PageComponents"]}>
          {entry.alcohol.map((label, index) => (
            <div key={index}>
              <i />
              <span>{label}</span>
            </div>
          ))}
          {entry.ingredients.map((label, index) => (
            <div key={index}>
              <i />
              <span>{label}</span>
            </div>
          ))}
        </div>
        <p className="mt-4">{entry.description}</p>
        <Link href="/">all drinks</Link>
      </div>
    </article>
  );
};
