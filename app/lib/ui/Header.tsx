'use client';

import React, { useState, useEffect } from 'react'
import NavButton from '../components/nav-button';
import { motion } from "framer-motion";
import { IconMenu2, IconX } from '@tabler/icons-react'

const _btnNames = [
    { name: "Home", id: "hero" },
    { name: "Communities", id: "partners" },
    { name: "About Us", id: "about" },
    { name: "Contact", id: "contact" },
];

const Header = () => {
    const [selectedIndex, setSelectedIndex] = useState<number>(0);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleNavigation = (index: number, targetId: string) => {
        setSelectedIndex(index);
        setIsMenuOpen(false);

        const section = document.getElementById(targetId);
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    // 👇 Observe sections in viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = _btnNames.findIndex(btn => btn.id === entry.target.id);
                        if (index !== -1) setSelectedIndex(index);
                    }
                });
            },
            { threshold: 0.5 } // 50% visible = active
        );

        _btnNames.forEach(btn => {
            const section = document.getElementById(btn.id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <motion.header
            className='w-screen fixed top-0 h-[4rem] px-4 md:px-15 flex items-center bg-black/40 backdrop-blur-xl z-50'
            initial={{ y: "-100%" }}
            animate={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: .4, delay: .4, ease: "easeInOut" }}
        >
            {/* Logo */}
            <img src="/images/signature.webp" alt="image" className='w-[6rem] md:w-[8rem] invert' />

            <div className='flex-1'></div>

            {/* Desktop Nav */}
            <nav className='hidden md:flex gap-2 items-center'>
                {_btnNames.map((btn, index) =>
                    <NavButton
                        key={index}
                        isSelected={index === selectedIndex}
                        name={btn.name}
                        handleNavigation={() => handleNavigation(index, btn.id)}
                    />
                )}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
                className='md:hidden text-white'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                {isMenuOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className='absolute top-[4rem] left-0 w-full bg-black/95 backdrop-blur-md flex flex-col items-center py-4 gap-2 md:hidden'
                >
                    {_btnNames.map((btn, index) =>
                        <NavButton
                            key={index}
                            isSelected={index === selectedIndex}
                            name={btn.name}
                            handleNavigation={() => handleNavigation(index, btn.id)}
                        />
                    )}
                </motion.div>
            )}
        </motion.header>
    )
}

export default Header
