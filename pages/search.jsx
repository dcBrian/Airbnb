import { format } from 'date-fns';
import { useRouter } from 'next/router';
import React from 'react';
import Header from '../components/Header';
import InfoCard from '../components/InfoCard';
import Map from '../components/Map';
import { searchData } from '../data';

const Search = ({ results }) => {
    const router = useRouter();
    const { location, noOfGuests, startDate, endDate } = router.query;
    const sDate = new Date(startDate);
    const eDate = new Date(endDate);
    const duration = (eDate.getTime() - sDate.getTime()) / (1000 * 3600 * 24);
    const formatedStartDate = format(sDate, 'dd MMMM yy');
    const formatedEndDate = format(eDate, 'dd MMMM yy');

    const range = `${formatedStartDate} - ${formatedEndDate}`;
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

            <main className='flex justify-center px-6 pt-14 xl:justify-start'>
                <section className='flex-1 xl:mr-[500px] 2xl:mr-[calc(60%-6rem)]'>
                    <p className='text-xs'>
                        300+ stays - {range} - for {noOfGuests} guest{noOfGuests > 1 && 's'}
                    </p>
                    <h1 className='mt-2 mb-6 text-3xl font-semibold'>Stays in {location}</h1>
                    <div className='mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More filters</p>
                    </div>
                    <div className='flex flex-col pb-5'>
                        {results &&
                            results.map((e) => (
                                <InfoCard
                                    key={e.img}
                                    search={location}
                                    image={e.img}
                                    title={e.title}
                                    description={e.description}
                                    star={e.star}
                                    price={e.price}
                                    total={e.total}
                                    location={e.location}
                                    duration={duration}
                                />
                            ))}
                    </div>
                </section>
                <section className='right-6 top-28 hidden h-[calc(100vh-92px-2.5rem)] lg:min-w-[calc(500px-1.5rem)] xl:fixed xl:block 2xl:min-w-[calc(60%-9rem)]'>
                    <Map results={results} />
                </section>
            </main>
        </div>
    );
};

export default Search;

export const getServerSideProps = async () => {
    const results = searchData;
    return {
        props: {
            results,
        },
    };
};
