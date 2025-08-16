'use client'

import React, { useState } from 'react'
import AnimatedText from '../components/text-appear-animation'
import TextFadingAnimation from '../components/text-fading-animation'
import GalleryPhotoContainer from '../components/gallery-photo-container';
import { AnimatePresence, motion } from "framer-motion";

const _snapshots = [
    "/images/gallery-1.webp",
    "/images/gallery-2.webp",
    "/images/gallery-3.webp",
    "/images/gallery-4.webp",
    "/images/gallery-5.webp",
    "/images/gallery-6.webp",
];

const GallerySection = () => {
    const [selectedPhoto, setSelectedPhoto] = useState(-1);

    return (
        <div className='w-full min-h-screen h-auto flex flex-col items-center py-15 px-15 gap-5'>

            <AnimatedText content='Our Photo Gallery' fontSize='medium' />
            <TextFadingAnimation content='A Showcase of Beauty, Memories, and Perspectives' color='text-[var(--foreground-secondary)]' />

            <motion.ul className='w-full grid grid-cols-3 auto-rows-[13rem] mt-10 gap-5'>
                <AnimatePresence mode='sync'>
                    {selectedPhoto !== -1 && <motion.div className='col-span-2 row-span-2 overflow-hidden rounded-[4px]'
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.img src={_snapshots[selectedPhoto]} alt="snapshot image"
                            key={selectedPhoto}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            onClick={() => setSelectedPhoto(-1)}
                        /></motion.div>}
                </AnimatePresence>
                {_snapshots.map((photo, index) => <GalleryPhotoContainer
                    image={photo}
                    isSelected={index === selectedPhoto}
                    handleClick={() => setSelectedPhoto(index)}
                    key={index} />)}
            </motion.ul>

        </div>
    )
}

export default GallerySection


//  <div className='mt-10 h-[60vh] rounded-[20px] w-[90%] bg-white/10 backdrop-blur-2xl flex overflow-hidden'>

//         <div className='flex-1 p-8'>
//             <div className='w-full h-full bg-red-300 overflow-hidden rounded-[20px]'>
//                 <img src={_snapshots[selectedPhoto]} alt="snapshot imgae" className='w-full h-full object-cover' />
//             </div>
//         </div>

//         {/** picture list sections */}
//         <div className='h-full w-[10rem] bg-amber-200'></div>
//     </div>