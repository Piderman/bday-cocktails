import { DrinkCard } from "@/components/drink-card";
import { drinks } from "../modules/drinks/drinks";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useState } from "react";
import classNames from "classnames";
import Head from "next/head";

export default function Home({
  drinks,
}: ReturnType<typeof getStaticProps>["props"]) {
  const filterOptions = [
    { label: "all", value: "" },
    { label: "short", value: "short" },
    { label: "tall", value: "tall" },
    { label: "martini", value: "martini" },
  ];
  const [filterModel, setFilterModel] = useState("");

  const filteredDrinks = !filterModel
    ? drinks
    : drinks.filter(({ glass }) => glass === filterModel);

  return (
    <main className="pt-8">
      <Head>
        <title>Happy 70th Mumma Bear</title>
      </Head>
      <Swiper
        slidesPerView={"auto"}
        className="landing-carousel"
        spaceBetween={24}
      >
        {filteredDrinks.map((entry) => (
          <SwiperSlide key={entry.slug}>
            <DrinkCard drink={entry} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="filter flex mt-8 mx-2">
        {filterOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => setFilterModel(option.value)}
            className={classNames({
              active: option.value == filterModel,
            })}
          >
            {option.label}
          </button>
        ))}
      </div>
      <a
        className="sr-only"
        href="https://www.flaticon.com/free-icons/cocktail"
        title="cocktail icons"
      >
        Cocktail icons created by Freepik - Flaticon
      </a>
    </main>
  );
}

export function getStaticProps() {
  return {
    props: {
      drinks: drinks,
    },
  };
}
