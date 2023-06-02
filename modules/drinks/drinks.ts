export type Drink = {
  title: string;
  slug: string;
  alcohol: string[];
  garnish: string[];
  ingredients: string[];
  glass: string;
};

export const drinks = [
  {
    title: "Brandy Alexander",
    slug: "brandy-alexander",
    alcohol: ["brandy", "chocolate liqueur"],
    garnish: ["nutmeg"],
    ingredients: ["cream"],
    glass: "martini",
  },
  {
    title: "Midori Sour",
    slug: "midori-sour",
    alcohol: ["midori", "vodka"],
    garnish: ["lemon"],
    ingredients: ["lemon juice", "lime juice"],
    glass: "tall",
  },
  {
    title: "Harvey Wallbanger",
    slug: "harvey-wallbanger",
    alcohol: ["vodka", "vanilla liqueur"],
    garnish: ["orange", "cherry"],
    ingredients: [],
    glass: "tall",
  },
  {
    title: "Godfather",
    slug: "godfather",
    alcohol: ["bouron", "amaretto"],
    garnish: [""],
    ingredients: [],
    glass: "short",
  },
  {
    title: "Raspberry-Basil Sambuca",
    slug: "raspberry-basil-sambuca",
    alcohol: ["gin", "sambuca"],
    garnish: ["basil", "raspberry"],
    ingredients: [],
    glass: "tall",
  },
  {
    title: "Sambuca Collins",
    slug: "sambuca-collins",
    alcohol: ["gin", "sambuca"],
    garnish: ["orange", "cherry"],
    ingredients: [],
    glass: "martini",
  },
];

export type DrinkSlugs = typeof drinks[number]["slug"];

export const getDrinkBySlug = (querySlug: DrinkSlugs) =>
  drinks.find(({ slug }) => slug === querySlug) || drinks[0];
