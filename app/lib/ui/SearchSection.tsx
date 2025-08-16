'use client';


import React from 'react'
import AnimatedText from '../components/text-appear-animation'
import TextFadingAnimation from '../components/text-fading-animation'
import Dropdown from '../components/dropdown';
import Textfield from '../components/textfield';
import PrimaryButton from '../components/primary-button';

const _dropdownData = [
    {
        title: "Location",
        opt: [
            "New York, NY",
            "Los Angeles, CA",
            "Chicago, IL",
            "Miami, FL",
            "San Francisco, CA",
            "Houston, TX",
            "Boston, MA",
            "Seattle, WA",
            "Dallas, TX",
            "Atlanta, GA"
        ],
    },
    {
        title: "Type",
        opt: [
            "Single Family Home",
            "Condominium",
            "Townhouse",
            "Multi-Family Home",
            "Luxury Villa",
            "Penthouse",
            "Loft",
            "Studio Apartment"
        ],
    },
    {
        title: "Sort By",
        opt: [
            "Old",
            "Least Expensive to Most",
            "Most Expensive to Least",
            "Bedrooms (Low to High)",
            "Bedrooms (High to Low)",
            "Bathrooms (Low to High)",
            "Bathrooms (High to Low)",
        ],
    },
];

const _bedrooms = {
    title: "Bedrooms",
    opt: [
        "Any number",
        "Studio",
        "1+",
        "2+",
        "3+",
        "4+",
        "5+",
        "6+",
    ]
}

const _bathrooms = {
    title: "BathRooms",
    opt: [
        "Any number",
        "1+",
        "2+",
        "3+",
        "4+",
        "5+",
        "6+",
    ]
}


const SearchSection = () => {

    return (
        <div className="w-full h-auto flex flex-col gap-5 overflow-hidden items-center py-20">
            <div className='flex w-full gap-2'>
                <AnimatedText content='Find Your' fontSize='medium' color='text-white' align='justify-end' />
                <AnimatedText content='Dream Home' fontSize='medium' color='text-[var(--accent)]' align='justify-start' />
            </div>
            <TextFadingAnimation content='Homes that combine architectural excellence with unparalleled comfort' size='text-base' />

            <div className='w-[80%] h-fit rounded-br-[20px] rounded-bl-[20px] relative  px-15 py-10 transition-all duration-500 ease-in-out flex flex-col gap-8'>
                <AnimatedText fontSize='medium' content='Search Listings' color='text-white' align='justify-start' />

                <div className='w-full flex gap-3'>
                    <ul className='flex w-full gap-5'>{_dropdownData.map((d, index) => <Dropdown opt={d.opt} title={d.title} key={index} />)}</ul>
                </div>

                <div className='w-full flex gap-5'>
                    <Dropdown opt={_bedrooms.opt} title={_bedrooms.title} />
                    <Dropdown opt={_bathrooms.opt} title={_bathrooms.title} />
                    <Textfield title='Min Price' />
                    <Textfield title='Max Price' />
                </div>

                <div className='place-self-center mt-10'>
                    <PrimaryButton>
                        <span>Search Now</span>
                    </PrimaryButton>
                </div>
            </div>

        </div>
    )
}

export default SearchSection