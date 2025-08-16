'use client'

import React from 'react'
import AnimatedText from '../components/text-appear-animation'
import TextFadingAnimation from '../components/text-fading-animation'
import { motion } from "framer-motion";
import { IconCheck } from '@tabler/icons-react';
import ContactIcon from '../components/about-us-contact-icon';
import { socialLinks } from '../data/socialLinks';

const highlights = [
    {
        title: "3 Decades of Experience -",
        description: "Local expertise you can trust."
    },
    {
        title: "Personalized Service -",
        description: "Dedicated to your real estate goals."
    },
    {
        title: "Flexible Availability -",
        description: "Nights/weekends by appointment."
    }
];

const AboutUs = ({ id }: { id: string }) => {
    return (
        <motion.section
            id={id}
            className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 md:px-15 py-12 gap-10 overflow-hidden"
        >
            {/* Left Column (Image) */}
            <div className="flex-1 flex items-center justify-center">
                <motion.div
                    className="aspect-square w-[20rem] sm:w-[24rem] lg:w-[28rem] xl:w-[30rem] rounded-[20px] overflow-hidden flex items-center justify-center bg-gradient-to-tr from-gray-500/20 to-gray-800/20"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                >
                    <motion.img
                        src="/images/realtor.webp"
                        alt="Realtor"
                        className="object-contain w-full h-full transition-all duration-500 ease-in-out hover:scale-105"
                    />
                </motion.div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6 text-[var(--foreground-secondary)] w-full lg:w-1/2">
                {/* summary */}
                <div className="flex flex-col items-start gap-2">
                    <AnimatedText
                        content="MARCI METZGER"
                        color="text-white"
                        fontSize="large"
                        fontFamily="arapey"
                        align="justify-start"
                    />
                    <div className="flex items-center gap-2 flex-wrap">
                        <TextFadingAnimation
                            content="Pahrump Realtor"
                            color="text-[var(--accent)]"
                        />
                        <div className="h-[1.2rem] w-0.5 rounded-2xl bg-white" />
                        <TextFadingAnimation
                            content="The Ridge Realty Group"
                            color="text-white"
                        />
                    </div>
                    <TextFadingAnimation
                        content="(Over 30 Years of Real Estate Excellence!)"
                        color="text-white"
                    />
                </div>

                {/* highlights */}
                <div className="flex flex-col gap-3">
                    <AnimatedText
                        content="Why work with me:"
                        fontSize="medium"
                        fontFamily="arapey"
                        align="justify-start"
                    />
                    {highlights.map((highlight, index) => (
                        <AchievementTile
                            key={index}
                            title={highlight.title}
                            content={highlight.description}
                        />
                    ))}
                </div>

                {/* contact me */}
                <div className="flex flex-col gap-2">
                    <AnimatedText
                        content="Contact me:"
                        fontSize="medium"
                        fontFamily="arapey"
                        align="justify-start"
                    />
                    <span className="text-white">(206) 919-6886</span>
                </div>

                {/* connect with me */}
                <div className="flex flex-col gap-2">
                    <AnimatedText
                        content="Connect Socially:"
                        fontSize="medium"
                        fontFamily="arapey"
                        align="justify-start"
                    />
                    <ul className="flex gap-5 flex-wrap">
                        {socialLinks.map((icon, index) => (
                            <a key={index} href={icon.link} target="_blank" rel="noreferrer">
                                <ContactIcon>{icon.icon}</ContactIcon>
                            </a>
                        ))}
                    </ul>
                </div>
            </div>


        </motion.section>
    )
}

function AchievementTile({ content, title }: { content: string; title: string }) {
    return (
        <div className="flex items-start gap-2">
            <IconCheck size={18} className="stroke-[var(--accent)] flex-shrink-0 mt-1" />
            <span className="flex flex-wrap gap-1 text-base">
                <TextFadingAnimation content={title} color="text-white" size="text-base" />
                <TextFadingAnimation
                    content={content}
                    color="text-[var(--foreground-secondary)]"
                    size="text-base"
                />
            </span>
        </div>
    )
}

export default AboutUs
