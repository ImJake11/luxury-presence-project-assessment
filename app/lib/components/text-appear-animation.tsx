"use client";

import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { Arapey, Old_Standard_TT, Oswald, Poppins, Rubik, Sora, Viaoda_Libre } from "next/font/google";

const rubik = Rubik({
    weight: ["500", "600", "700"],
    subsets: ["latin"],
})
const sora = Sora({
    weight: ['500', "400"],
    subsets: ['latin-ext',]
});

const arapey = Arapey({
    weight: ['400'],
    subsets: ['latin'],
})

const textSize = {
    small: "text-[.8rem] md:text-[1rem]",
    medium: "text-[1.5rem] md:text-[2rem]",
    large: "text-[2.5rem] md:text-[3rem]",
    xlarge: "text-[3rem] lg:text-[4rem] md:text-[4rem]",
}

const fonts = {
    rubik,
    sora,
    arapey
}


interface TextProp {
    content: string,
    fontSize?: "small" | "medium" | "large" | "xlarge",
    fontFamily?: "rubik" | "sora" | "arapey",
    color?: "text-black" | "text-white" | "text-[var(--foreground-secondary)]" | "text-[var(--accent)]" | "text-[var(--accent-secondary)]",
    align?: "justify-center" | "justify-start" | "justify-end",
    weight?: "font-bold" | "font-normal" | "font-semibold"
}


export default function AnimatedText({
    content,
    fontSize = "xlarge",
    fontFamily = "sora",
    color = "text-white",
    align = "justify-center",
    weight = "font-normal",
}: TextProp) {

    return (
        <div className={clsx("w-full overflow-hidden h-auto flex items-center", align)}>
            <AnimatePresence mode="wait">
                {<motion.span
                    className={clsx(
                        "-tracking-wider",
                        color,
                        textSize[fontSize],
                        weight,
                        fonts[fontFamily].className)}
                    whileInView={{
                        y: 0,
                    }}
                    initial={{
                        y: "100%",
                    }}
                    transition={{
                        duration: 0.5,
                        ease: "easeIn",
                    }}
                    viewport={{
                        once: true
                    }}
                >
                    {content}
                </motion.span>}
            </AnimatePresence>
        </div>
    );
}
