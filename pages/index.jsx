import Head from 'next/head';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';
import { liveData } from '../data';

export default function Home({ explore, live }) {
    return (
        <div className=''>
            <Head>
                <title>Airbnb clone</title>
                <meta name='description' content='Generated by create next app' />
                <link rel='icon' href='/favicon.ico' />

                <link
                    href='https://unpkg.com/maplibre-gl@2.3.0/dist/maplibre-gl.css'
                    rel='stylesheet'
                />
            </Head>
            <Header />
            <Banner />
            <main className='mx-auto px-8 sm:px-16'>
                <section className='pt-6'>
                    <h2 className='pb-5 text-4xl font-semibold'>Explore Nearby</h2>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                        {explore?.map((e) => (
                            <SmallCard
                                key={e.img}
                                location={e.location}
                                image={e.img}
                                distance={e.distance}
                            />
                        ))}
                    </div>
                </section>
                <section>
                    <h2 className='py-8 text-4xl font-semibold'>Live Anywhere</h2>
                    <div className='-ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide'>
                        {live?.map((e) => (
                            <MediumCard key={e.img} image={e.img} title={e.title} />
                        ))}
                    </div>
                </section>
                <section>
                    <LargeCard
                        image='https://links.papareact.com/4cj'
                        title='The greatest outdoors'
                        description='Wishlists curated by Airbnb'
                        buttonText='Get Inspired'
                    />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export const getStaticProps = async () => {
    const explore = await fetch('https://links.papareact.com/pyp').then((res) => res.json());
    const live = liveData;

    return {
        props: {
            explore,
            live,
        },
    };
};
