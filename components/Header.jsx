import {
    GlobeAltIcon,
    MenuIcon,
    SearchIcon,
    UserCircleIcon,
    UserIcon,
} from '@heroicons/react/solid';
import { add, isEqual } from 'date-fns';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';

const Header = ({ placeholder }) => {
    const router = useRouter();
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(
        add(new Date(), {
            days: 1,
        })
    );
    const [noOfGuests, setNoOfGuests] = useState(1);

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };
    const handleSelect = ({ selection: { startDate, endDate } }) => {
        setStartDate(startDate);
        setEndDate(endDate);
    };
    const resetInput = () => {
        setSearchInput('');
    };

    const search = () => {
        if (searchInput == '') return;
        let newEndDate;
        if (isEqual(startDate, endDate)) {
            newEndDate = add(startDate, {
                days: 1,
            });
        }
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: newEndDate ? newEndDate.toISOString() : endDate.toISOString(),
                noOfGuests,
            },
        });
        resetInput();
    };

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white p-5 shadow-md md:px-10'>
            {/* Left */}
            <div
                className='relative my-auto flex h-6 animate-bounce cursor-pointer items-center sm:h-10'
                onClick={() => router.push('/')}
            >
                <Image
                    src='https://links.papareact.com/qd3'
                    layout='fill'
                    objectFit='contain'
                    objectPosition='left'
                />
            </div>

            {/* Middle */}
            <div className='md-shadow-sm flex items-center rounded-full border-gray-300 py-2 shadow-md hover:shadow-lg md:border'>
                <input
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    className='w-full bg-transparent px-5 text-xs text-gray-600 placeholder-gray-400 outline-none sm:flex-1 sm:text-sm'
                    type='text'
                    placeholder={placeholder || "Search 'London'..."}
                />
                <SearchIcon
                    onClick={search}
                    className='hidden h-8 w-8 cursor-pointer rounded-full bg-red-400 p-2 text-white md:mx-2 md:inline-flex'
                />
            </div>

            {/* Right */}
            <div className='flex items-center justify-end space-x-1 text-gray-700 lg:space-x-2'>
                <button className='relative flex items-center justify-center rounded-full px-3 py-2 hover:bg-gray-100'>
                    <p className='hidden cursor-pointer text-xs md:inline lg:text-base '>
                        Become a host
                    </p>
                </button>

                <button className='relative rounded-full p-3 hover:animate-spin hover:bg-gray-100'>
                    <GlobeAltIcon className='icons-sm' />
                </button>

                <div className='flex items-center space-x-2 rounded-full border border-gray-300 p-2 hover:shadow-md'>
                    <MenuIcon className='icons-sm' />
                    <UserCircleIcon className='icons-md' />
                </div>
            </div>
            {searchInput && (
                <div className='col-span-3 mx-auto mt-3 flex flex-col'>
                    <DateRange
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={['#FD5B61']}
                        onChange={handleSelect}
                    />
                    <div className='mb-4 flex items-center border-b pl-5'>
                        <h2 className='flex-grow text-xl font-semibold'>Number of guests</h2>
                        <UserIcon className='h-5' />
                        <input
                            value={noOfGuests}
                            onChange={(e) => setNoOfGuests(e.target.value)}
                            type='number'
                            min={1}
                            className='w-12 pl-2 text-lg text-red-400 outline-none'
                        />
                    </div>
                    <div className='flex'>
                        <button onClick={resetInput} className='flex-grow text-gray-400'>
                            Cancel
                        </button>
                        <button className='flex-grow text-red-400' onClick={search}>
                            Search
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
