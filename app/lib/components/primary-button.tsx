'use client'

import React from 'react'
import { motion } from "framer-motion"
import clsx from 'clsx'

const _btnVariant = {
    primary: "text-white bg-[var(--accent)] hover:bg-[var(--accent-secondary)]",
    secondary: "text-white border-white border hover:border-[var(--accent-secondary)] hover:text-[var(--accent-secondary)]"
}

interface ButtonProp {
    variant?: "primary" | "secondary",
    children: React.ReactNode,
    height?: "h-[3rem]" | "h-[2.5rem]",
}

const PrimaryButton = (
    { variant = "primary",
        height = "h-[3rem]",
        children }:
        ButtonProp
) => {

    return (
        <motion.div className={clsx(`text-[1rem] w-[10rem] rounded-[4px] flex items-center justify-center p-2 transition-all duration-300 ease-in-out`, _btnVariant[variant], height)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                duration: .5, delay: .2, ease: "easeIn",
            }}
        >
            {children}
        </motion.div>
    )
}

export default PrimaryButton
