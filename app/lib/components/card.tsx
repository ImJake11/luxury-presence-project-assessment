

import React from 'react'
import TextFadingAnimation from './text-fading-animation'
import { motion } from "framer-motion"

interface CardProps {
    details: {
        title: string,
        image: string,
        des: string,
    },
}
const Card = ({
    details,
}: CardProps) => {

    const { des, image, title } = details;

    return (
        <motion.div className='group w-full h-[30rem] shadow-[0_0_5px_rgb(0,0,0,.6)] overflow-hidden rounded-[12px] bg-gray-500/10 flex flex-col transition-all duration-500 ease-in-out hover:shadow-[0_0_10px_var(--accent)]'
            initial={{ y: "40%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "40%", opacity: 0 }}
            transition={{ duration: .2, ease: "linear" }}
        >

            <div className=' w-full h-[50%] overflow-hidden relative'>
                <img src={image} alt="marketing image" className='object-cover h-full w-full group-hover:scale-105 transition-all duration-500 ease-in-out ' />
            </div>

            <div className='flex-1 backdrop-blur-xl flex gap-5 flex-col px-7 py-5'>
                <span className='text-white group-hover:text-[var(--accent)] font-semibold text-xl transition-all duration-500 ease-in-out'>{title}</span>
                <TextFadingAnimation content={des} size='text-base' color='text-[var(--foreground-secondary)]' />
            </div>
        </motion.div>
    )
}

export default Card
