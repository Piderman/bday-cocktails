export type Drink = {
  title: string;
  slug: string;
  alcohol: string[];
  garnish: string[];
  ingredients: string[];
  glass: string;
  description?: string;
};

export const drinks: Drink[] = [
  {
    title: "Brandy Alexander",
    slug: "brandy-alexander",
    alcohol: ["brandy", "chocolate liqueur"],
    garnish: ["nutmeg"],
    ingredients: ["cream"],
    glass: "martini",
    description:
      "The Brandy Alexander is a dessert drink: chocolatey, sweet, creamy and smooth. Because the alcohol taste is so light, you might think of it as a spiked milkshake. But it's more subtle and grown-up than that. ",
  },
  {
    title: "Midori Sour",
    slug: "midori-sour",
    alcohol: ["midori", "vodka"],
    garnish: ["lemon"],
    ingredients: ["lemon juice", "lime juice"],
    glass: "tall",
    description:
      "The Midori Sour is based loosely on the classic Whiskey Sour. It features Midori blended with whiskey, lemon juice and Sprite. The melon flavor hits your taste buds first, with lemon following closely behind.",
  },
  {
    title: "Harvey Wallbanger",
    slug: "harvey-wallbanger",
    alcohol: ["vodka", "vanilla liqueur"],
    garnish: ["orange", "cherry"],
    ingredients: [],
    glass: "tall",
    description:
      "This cocktail was in vogue for a while in the 70s, basically a screwdriver (orange juice with vodka) with the addition of Galliano (vanilla with anise). It also has citrus and other herbal notes.",
  },
  {
    title: "Godfather",
    slug: "godfather",
    alcohol: ["bouron", "amaretto"],
    garnish: [""],
    ingredients: [],
    glass: "short",
    description:
      "A favorite since the '70s, the godfather is an excellent happy hour cocktail and nightcap and goes wonderfully with desserts such as tiramisu, cheesecake, or baklava",
  },
  {
    title: "Raspberry-Basil Sambuca",
    slug: "raspberry-basil-sambuca",
    alcohol: ["gin", "sambuca"],
    garnish: ["basil", "raspberry"],
    ingredients: [],
    glass: "tall",
    description: "A tasty cocktail is a delicious, aromatic sweet and sour ",
  },
  {
    title: "Sambuca Collins",
    slug: "sambuca-collins",
    alcohol: ["gin", "sambuca"],
    garnish: ["orange", "cherry"],
    ingredients: [],
    glass: "martini",
    description:
      "Sambuca's sweetness is the perfect element to add in place of simple syrup in a refreshing Tom Collins.",
  },
];

export type DrinkSlugs = typeof drinks[number]["slug"];

export const getDrinkBySlug = (querySlug: DrinkSlugs) =>
  drinks.find(({ slug }) => slug === querySlug) || drinks[0];
