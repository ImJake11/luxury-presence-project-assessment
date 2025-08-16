import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

interface Prop {
    content: string,
    color?: "text-white" | "text-[var(--foreground-secondary)]" | "text-[var(--accent)]",
    size?: "text-xl" | "text-base",
}
const TextFadingAnimation = ({
    size = "text-base",
    content,
    color = "text-[var(--foreground-secondary)]" }: Prop) => {

    return (
        <motion.span
            className={clsx(size, color, "text-center")}
            initial={{
                opacity: 0,
                x: "50%",
            }}
            whileInView={{
                opacity: 1,
                x: "0%",
            }}
            transition={{
                ease: "easeInOut",
                duration: .6,
            }}
            viewport={{
                once: true
            }}
        >
            {content}
        </motion.span>
    )
}

export default TextFadingAnimation
