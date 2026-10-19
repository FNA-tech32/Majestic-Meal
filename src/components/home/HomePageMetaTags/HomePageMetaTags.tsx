import Head from "next/head";

const HomePageMetaTags = () => {
  return (
    <Head>
      <title>Majestic Meal</title>
      <meta
        name="description"
        content="Majestic Meal is a catering service in Chicago. Explore our mission, portfolio, and services."
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Majestic Meal" />
      <meta
        property="og:description"
        content="Majestic Meal is a catering service in Chicago. Explore our mission, portfolio, and services."
      />
      <meta
        property="og:image"
        content="assets/images/core-values/Food_Ingredients.jpg"
      />
    </Head>
  );
};

export { HomePageMetaTags };
