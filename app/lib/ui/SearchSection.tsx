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
            "New York, NY", "Los Angeles, CA", "Chicago, IL", "Miami, FL",
            "San Francisco, CA", "Houston, TX", "Boston, MA", "Seattle, WA",
            "Dallas, TX", "Atlanta, GA"
        ],
    },
    {
        title: "Type",
        opt: [
            "Single Family Home", "Condominium", "Townhouse", "Multi-Family Home",
            "Luxury Villa", "Penthouse", "Loft", "Studio Apartment"
        ],
    },
    {
        title: "Sort By",
        opt: [
            "Old", "Least Expensive to Most", "Most Expensive to Least",
            "Bedrooms (Low to High)", "Bedrooms (High to Low)",
            "Bathrooms (Low to High)", "Bathrooms (High to Low)",
        ],
    },
];

const _bedrooms = {
    title: "Bedrooms",
    opt: ["Any number", "Studio", "1+", "2+", "3+", "4+", "5+", "6+"]
}

const _bathrooms = {
    title: "Bathrooms",
    opt: ["Any number", "1+", "2+", "3+", "4+", "5+", "6+"]
}

const SearchSection = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-5 overflow-hidden items-center py-20 px-5 sm:px-10 md:px-15">
            {/* Heading */}
            <AnimatedText content='Find Your Dream Home' fontSize='medium' color='text-white' align='justify-center' />

            <TextFadingAnimation
                content='Homes that combine architectural excellence with unparalleled comfort'
                size='text-base'
            />

            {/* Search Box */}
            <div className='w-full sm:w-[90%] lg:w-[80%] h-fit rounded-b-[20px] relative px-5 sm:px-10 py-8 sm:py-10 transition-all duration-500 ease-in-out flex flex-col gap-8 bg-gray-900/30'>
                <AnimatedText
                    fontSize='medium'
                    content='Search Listings'
                    color='text-white'
                    align='justify-start'
                />

                {/* First Row */}
                <div className='w-full flex flex-col sm:flex-row gap-5'>
                    {_dropdownData.map((d, index) => (
                        <Dropdown opt={d.opt} title={d.title} key={index} />
                    ))}
                </div>

                {/* Second Row */}
                <div className='w-full flex flex-col sm:flex-row gap-5'>
                    <Dropdown opt={_bedrooms.opt} title={_bedrooms.title} />
                    <Dropdown opt={_bathrooms.opt} title={_bathrooms.title} />
                    <Textfield title='Min Price' />
                    <Textfield title='Max Price' />
                </div>

                {/* Button */}
                <div className='self-center mt-5'>
                    <PrimaryButton>
                        <span>Search Now</span>
                    </PrimaryButton>
                </div>
            </div>
        </div>
    )
}

export default SearchSection
