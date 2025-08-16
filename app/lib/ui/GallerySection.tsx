'use client'

import React, { useState, useEffect } from 'react'
import AnimatedText from '../components/text-appear-animation'
import TextFadingAnimation from '../components/text-fading-animation'
import GalleryPhotoContainer from '../components/gallery-photo-container';
import { AnimatePresence, motion } from "framer-motion";

// snapshots
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 576);
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className='w-full min-h-screen h-auto flex flex-col items-center py-15 px-15 gap-5'>
            <AnimatedText content='Our Photo Gallery' fontSize='medium' />
            <TextFadingAnimation content='A Showcase of Beauty, Memories, and Perspectives' color='text-[var(--foreground-secondary)]' />

            {/* Desktop Grid */}
            {!isMobile && (
                <motion.ul className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-[13rem] mt-10 gap-5'>
                    <AnimatePresence mode='sync'>
                        {selectedPhoto !== -1 && (
                            <motion.div className='col-span-2 row-span-2 overflow-hidden rounded-[4px]'
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                            >
                                <motion.img
                                    src={_snapshots[selectedPhoto]}
                                    alt="snapshot image"
                                    key={selectedPhoto}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    onClick={() => setSelectedPhoto(-1)}
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>
                    {_snapshots.map((photo, index) => (
                        <GalleryPhotoContainer
                            image={photo}
                            isSelected={index === selectedPhoto}
                            handleClick={() => setSelectedPhoto(index)}
                            key={index}
                        />
                    ))}
                </motion.ul>
            )}

            {/* Mobile Slider */}
            {isMobile && (
                <motion.div className="w-full mt-10 overflow-x-auto flex gap-5 snap-x snap-mandatory scrollbar-hide">
                    {_snapshots.map((photo, index) => (
                        <motion.img
                            key={index}
                            src={photo}
                            alt="gallery photo"
                            className="min-w-[90%] max-w-[90%] h-[18rem] object-cover rounded-[4px] snap-center cursor-pointer"
                            whileTap={{ scale: 0.95 }}
                        />
                    ))}
                </motion.div>
            )}
        </div>
    )
}

export default GallerySection
