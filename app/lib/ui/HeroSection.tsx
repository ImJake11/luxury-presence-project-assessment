'use client';

import React, { useRef } from 'react'
import TextAppearAnimation from '../components/text-appear-animation'
import CallNowBtn from '../components/primary-button'
import { motion } from "framer-motion";
import Header from './Header';
import PrimaryButton from '../components/primary-button';
import { IconPhoneCall } from '@tabler/icons-react';
import Image from 'next/image';

const HeroSection = ({ id }: { id: string }) => {

    return (
        <section id={id} className='w-full h-[90vw] md:min-h-screen md:h-screen relative'>
            <div className='absolute w-full md:w-[70vw] -right-1/2 md:-right-1/4'>
                <img src={"/images/intro-photo.avif"} alt='intro image' />
            </div>

            <div className='w-full h-full bg-linear-to-t absolute from-black from-20% to to-black/10'></div>

            <div className='flex flex-col md:w-[35rem] absolute left-15 top-50 md:top-1/2 -translate-y-1/2'>
                <TextAppearAnimation content='Where Luxury Meets Lifestyle.' fontSize='xlarge' fontFamily="rubik" />
                <div className='w-full -translate-y-2'>
                    <TextAppearAnimation content='Your journey to the perfect home starts with us.' fontSize='small' color='text-[var(--foreground-secondary)]' align='justify-start' />
                </div>
            </div>

            <div className="absolute w-full px-4 pl-15  bottom-[12%] md:bottom-[25%] flex gap-4">
                <PrimaryButton>
                    <span>Call us now</span>
                </PrimaryButton>
                <PrimaryButton variant="secondary">
                    <span>Search Homes</span>
                </PrimaryButton>
            </div>
        </section>
    )
}

export default HeroSection
