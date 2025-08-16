'use client';

import React from 'react'
import { AnimatePresence, motion } from "framer-motion";

interface ButtonProp {
    name: string,
    isSelected: boolean,
    handleNavigation: () => void,
}

const NavButton = ({
    name, isSelected, handleNavigation,
}: ButtonProp) => {
    return (
        <div className='flex flex-col gap-0.5 px-4 relative '
            onClick={handleNavigation}
        >
            <motion.span className={` text-white`}
                whileHover={!isSelected ? { color: "var(--accent-secondary)" } : undefined}
                transition={{ duration: .3, ease: "easeIn" }}
            >{name}</motion.span>

            {/** line indicator */}
            <AnimatePresence>
                {isSelected && <motion.div className='-bottom-1 left-3 right-3 w-auto h-0.5 rounded-2xl bg-[var(--accent)] absolute'
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}

                    exit={{ opacity: 0 }}
                    transition={{
                        duration: .3,
                        ease: "easeIn",
                    }}
                />}
            </AnimatePresence>
        </div>
    )
}

export default NavButton