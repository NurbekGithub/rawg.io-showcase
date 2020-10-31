import Head from "next/head";
import { AllGamesContainer } from "../components/AllGames";

export default function AllGamesPage(props) {
  const { games } = props;
  console.log({ games });
  return (
    <>
      <Head>
        <title>All Games</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AllGamesContainer games={games} />
    </>
  );
}

export async function getStaticProps() {
  const games = await fetch("https://api.rawg.io/api/games").then((res) =>
    res.json()
  );

  return {
    props: {
      games,
    },
  };
}
