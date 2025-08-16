'use client'

import React from 'react'
import AnimatedText from '../components/text-appear-animation'
import TextFadingAnimation from '../components/text-fading-animation'
import { motion } from "framer-motion";
import { IconMail, IconPhone, IconTrophyFilled } from '@tabler/icons-react';
import AboutUsContactIcon from '../components/about-us-contact-icon';

const AboutUs = () => {

    return (
        <motion.div className='w-screen h-auto overflow-x-hidden flex relative px-15 overflow-hidden py-20'>

            <div className='flex w-[50%] flex-col  h-full'>
                <AnimatedText content='MARCI METZGER' color='text-white' fontSize='large' fontFamily='arapey' align='justify-start' />

                <div className='flex items-center gap-2'>
                    <TextFadingAnimation content='Pahrump Realtor' color='text-[var(--accent)]' />
                    <div className='h-[2rem]' />
                    <div className='h-[60%] mr-2 w-0.5 rounded-2xl bg-white' />
                    <TextFadingAnimation content='The Ridge Reality Group' color='text-white' />
                    <div className='h-[2rem]' />
                </div>

                {/** achivements */}
                <ul className='flex flex-col gap-2 mt-5 '>
                    {_achivements.map((achivement, index) => <AchivementTiles key={index} content={achivement} />)}
                </ul>

                <div className='h-[4rem]' />
                <div className='flex gap-2 mb-7 items-center'>
                    <AboutUsContactIcon>
                        <IconPhone className='stroke-white' />
                    </AboutUsContactIcon>
                    <AnimatedText content='206-919-6886' color='text-white' fontSize='small' align='justify-start' />
                </div>

                <div className='flex gap-2 mb-5 items-center'>
                    <AboutUsContactIcon>
                        <IconMail className='stroke-white' />
                    </AboutUsContactIcon>
                    <AnimatedText content='samplemail@gmail.com' color='text-white' fontSize='small' align='justify-start' />
                </div>
            </div>

            <div className='flex-1 grid place-content-center'>
                <motion.div className='aspect-square w-[30rem] rounded-[20px] overflow-hidden  flex items-center justify-center bg-linear-120 from-gray-500/20 to-gray-800/20 -translate-y-10'
                    whileInView={{ left: "5rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: .5, ease: "easeInOut" }}
                >
                    <motion.img src="/images/realtor.webp" alt="image" className='object-contain w-full h-full transition-all duration-500 ease-in-out hover:scale-105'
                    />
                </motion.div>
            </div>
        </motion.div>
    )
}

function AchivementTiles({ content }: { content: string }) {

    return (
        <div className='flex items-center gap-2'>
            <IconTrophyFilled size={16} className='fill-[var(--accent)]' />
            <TextFadingAnimation content={content} color='text-white' size='text-base' />
        </div>
    )
}

const _achivements = [
    "Realtor for nearl 3 decades.",
    "Sample Achivements",
    "Sample Achivements",
    "Sample Achivements",
];

export default AboutUs
