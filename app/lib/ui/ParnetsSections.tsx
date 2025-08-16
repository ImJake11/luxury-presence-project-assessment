import clsx from 'clsx'
import React from 'react'

const PartnerSections = ({ id }: { id: string }) => {
    const imgAttr =
        "transition-all duration-300 ease-in-out hover:scale-110"

    return (
        <div id={id} className="w-full h-fit mb-[10rem] mt-[10rem] px-8 sm:px-10 md:px-15 flex justify-center">
            <ul className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 md:gap-20">
                <li>
                    <img
                        className={clsx(imgAttr, "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 invert")}
                        src={`/images/partner-1.webp`}
                    />
                </li>
                <li>
                    <img
                        className={clsx(imgAttr, "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 invert")}
                        src={`/images/partner-2.webp`}
                    />
                </li>
                <li>
                    <img
                        className={clsx(imgAttr, "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20")}
                        src={`/images/partner-3.webp`}
                    />
                </li>
                <li>
                    <img
                        className={clsx(imgAttr, "w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 invert")}
                        src={`/images/partner-4.webp`}
                    />
                </li>
            </ul>
        </div>
    )
}

export default PartnerSections
