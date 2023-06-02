import {
  drinks,
  DrinkSlugs,
  getDrinkBySlug,
} from "../../modules/drinks/drinks";

export default function DrinksPage({
  entry,
}: ReturnType<typeof getStaticProps>["props"]) {
  return (
    <div key={entry.slug}>
      <article>
        <div className="image">
          <img src={`/images/drinks/${entry.slug}.jpg`} alt="" />
        </div>
        <div className="content">
          <header>
            <h1>{entry.title}</h1>
          </header>

          <div className="wat">
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
        </div>
      </article>
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: drinks.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  };
}

export function getStaticProps({ params }: { params: { slug: DrinkSlugs } }) {
  const foundDrink = getDrinkBySlug(params.slug);

  return {
    props: {
      entry: foundDrink,
    },
  };
}
