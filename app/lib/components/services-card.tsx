


import React from 'react'
interface Prop {
    service: {
        image: string,
        title: string,
        des: string,
    }
}
const ServicesCard = ({ service }: Prop) => {
    return (
        <div className='group w-full h-full border border-gray-500/20 rounded-[8px] overflow-hidden flex flex-col gap-3 transition-all duration-500 ease-in-out hover:border-[var(--accent)]'>

            <div className='w-full h-[60%] overflow-hidden'>
                <img src={service.image} alt="service image" className='w-full aspect-auto transition-all duration-300 ease-in group-hover:scale-105' />
            </div>

            <div className='flex flex-col w-full px-5 pb-5 gap-3 items-center'>
                <span className='text-xl text-white group-hover:text-[var(--accent)]'>{service.title}</span>
                <span className='text-[var(--foreground-secondary)] text-center'>
                    {service.des}
                </span>
            </div>
        </div>
    )
}

export default ServicesCard