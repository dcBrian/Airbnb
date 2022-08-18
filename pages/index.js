import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ explore, live }) {
  return (
    <div className="">
      <Head>
        <title>Airbnb clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {explore?.map((e) => (
              <SmallCard key={e.img} location={e.location} image={e.img} distance={e.distance} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -mf-3">
            {live?.map((e) => (
              <MediumCard key={e.img} image={e.img} title={e.title} />
            ))}
          </div>
        </section>
        <section>
          <LargeCard
            image="https://links.papareact.com/4cj"
            title="The greatest outdoors"
            description="Wishlists curated by Airbnb"
            buttonText="Get Inspired"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  const explore = await fetch("https://links.papareact.com/pyp").then((res) => res.json());
  const live = await fetch("https://links.papareact.com/zp1").then((res) => res.json());
  return {
    props: {
      explore,
      live,
    },
  };
};
