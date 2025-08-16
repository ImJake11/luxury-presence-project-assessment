'use client';

import React from 'react'
import AnimatedText from '../components/text-appear-animation'
import TextFadingAnimation from '../components/text-fading-animation'
import ServicesCard from '../components/services-card';

const _services = [
    {
        image: "/images/services-1.webp",
        title: "Real Estate Done Right",
        des: "Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!",
    },
    {
        image: "/images/services-2.webp",
        title: "Commercial & Residential",
        des: "Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.",
    },
    {
        image: "/images/services-3.webp",
        title: "Rely on Expertise",
        des: "If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.",
    },

];

const ServicesSection = () => {
    return (
        <div className='w-full h-auto flex flex-col py-15 px-15 gap-5 items-center'>
            <AnimatedText content='Our Services' fontSize='medium' />
            <TextFadingAnimation content='Tailored Solutions for Your Needs' color='text-[var(--foreground-secondary)]' />

            <ul className='w-full grid grid-cols-3 gap-5 mt-6'>
                {_services.map((service, index) => <ServicesCard key={index} service={service} />)}
            </ul>
        </div>
    )
}

export default ServicesSection