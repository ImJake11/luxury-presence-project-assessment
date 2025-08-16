'use client';

import React, { useState } from 'react'
import NavButton from '../components/nav-button';
import PrimaryButton from '../components/primary-button';
import { motion } from "framer-motion";

const _btnNames = [
    "Home",
    "Communities",
    "Properties",
    "Contact",
];

const Header = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const handleNavigation = (index: number) => {
        setSelectedIndex(index);
    }

    return (
        <motion.header className='w-screen fixed top-0 h-[4rem] px-15 flex items-center bg-black/40 backdrop-blur-xl'
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: .4, delay: .4, ease: "easeInOut" }}
        >
            <img src="/images/signature.webp" alt="image" className='w-[8rem] invert' />
            <div className='flex-1'></div>

            <nav className='flex gap-2 items-center'>
                {_btnNames.map((name, index) =>
                    <NavButton key={index} isSelected={index === selectedIndex} name={name} handleNavigation={() => handleNavigation(index)} />
                )}
            </nav>
        </motion.header>
    )
}

export default Header
