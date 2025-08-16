

import clsx from 'clsx'
import React from 'react'
import { AnimatePresence, motion } from "framer-motion";


interface Prop {
    image: string,
    isSelected: boolean,
    handleClick: () => void,
}

const GalleryPhotoContainer = ({
    image, isSelected, handleClick,
}: Prop) => {
    return (
        <AnimatePresence>
            {!isSelected && <motion.div
                className={clsx("w-full rounded-[4px] overflow-hidden")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                onClick={handleClick}
                layout
            >
                <img src={image} alt="snapshot image" className='transition-all divide-amber-300 ease-in-out hover:scale-105' />
            </motion.div>}
        </AnimatePresence>

    )
}

export default GalleryPhotoContainer