'use client'

import React, { useState } from 'react'
import Card from '../components/card';
import AnimatedText from '../components/text-appear-animation';
import TextFadingAnimation from '../components/text-fading-animation';
import { AnimatePresence, motion } from 'framer-motion';
import MarketingTypeButtons from '../components/maketing-type-buttons';

const details = [
    {
        image: "/images/aboutOne.webp",
        title: "Top Residential Sales Last 5 Years",
        des: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year."
    },
    {
        image: "/images/aboutTwo.webp",
        title: "Don't Just List it...",
        des: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home."
    },
    {
        image: "/images/aboutThree.webp",
        title: "Guide to Buyers",
        des: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!"
    },
];

const MarketingSection = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <motion.section
            className="flex flex-col lg:flex-row w-full h-auto py-12 px-5 sm:px-10 md:px-15 items-center gap-10 lg:gap-20 overflow-hidden"
        >
            {/* Left Side (Image / Card) */}
            <div className="flex-1 w-full lg:w-1/2">
                <AnimatePresence mode="wait">
                    <Card key={selectedIndex} details={details[selectedIndex]} />
                </AnimatePresence>
            </div>

            {/* Right Side (Text + Buttons) */}
            <div className="flex-1 w-full lg:w-1/2 flex flex-col gap-5">
                <AnimatedText
                    color="text-white"
                    align="justify-start"
                    fontSize="medium"
                    content="Get It Sold"
                />

                <div className="max-w-[90%] sm:max-w-[70%]">
                    <TextFadingAnimation content="Where expert strategy meets luxury marketing — delivering results beyond expectations" />
                </div>

                {/* Buttons List */}
                <ul className="flex flex-col gap-4 mt-8">
                    {details.map((detail, index) => (
                        <li key={index}>
                            <MarketingTypeButtons
                                handleClick={() => setSelectedIndex(index)}
                                title={detail.title}
                                isSelected={selectedIndex === index}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </motion.section>
    )
}

export default MarketingSection
