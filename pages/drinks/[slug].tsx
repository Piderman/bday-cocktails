import { DrinkPage } from "@/components/drink-page";
import Head from "next/head";
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
      <DrinkPage entry={entry} />
      <Head>
        <title>{entry.title}</title>
      </Head>

      <a
        className="sr-only"
        href="https://www.flaticon.com/free-icons/right-chevron"
        title="right chevron icons"
      >
        Right chevron icons created by Designkuu - Flaticon
      </a>
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
