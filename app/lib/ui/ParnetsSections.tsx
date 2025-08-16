


import clsx from 'clsx'
import React from 'react'

const PartnerSections = () => {

    const imgAttr = "w-[4rem] h-[4rem] transition-all duration-300 ease-in-out hover:scale-110"

    return (
        <div className='w-full h-fit mb-[10rem] px-15 grid place-content-center'>
            <ul>
                <li className='flex w-full justify-center items-center gap-25'>
                    <img className={clsx(imgAttr, "invert")} src={`/images/partner-1.webp`} />
                    <img className={clsx(imgAttr, "invert")} src={`/images/partner-2.webp`} />
                    <img className={clsx(imgAttr)} src={`/images/partner-3.webp`} />
                    <img className={clsx(imgAttr, "invert")} src={`/images/partner-4.webp`} />
                </li>
            </ul>
        </div>
    )
}

export default PartnerSections