import { DrinkCard } from "@/components/drink-card";
import { drinks } from "../modules/drinks/drinks";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useState } from "react";
import classNames from "classnames";

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
    <main>
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

      <div className="filter">
        {filterOptions.map((option, index) => (
          <button
            key={index}
            onClick={() => setFilterModel(option.value)}
            className={classNames({
              active: option.label === filterModel,
            })}
          >
            {option.label}
          </button>
        ))}
      </div>
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
