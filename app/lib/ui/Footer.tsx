
import React from 'react'
import ContactIcon from '../components/about-us-contact-icon'
import { socialLinks } from '../data/socialLinks'
import { IconBrandVercelFilled } from '@tabler/icons-react'

const Footer = () => {

    return (
        <div className='w-full bg-gradient-to-t from-[var(--accent)] to-black pt-20 pb-10 px-15 flex flex-col'>
            <div className='w-full flex flex-col md:flex-row md:items-center justify-between'>

                <ul className='flex gap-5 w-full md:w-fit justify-center mb-8 md:mb-0'>
                    {socialLinks.map((icon, index) => <a key={index} href={icon.link}>
                        <ContactIcon key={index}>
                            {icon.icon}
                        </ContactIcon>
                    </a>)}
                </ul>

                <span className='text-white text-xs text-center'>Copyright © 2023 Marci METZGER Homes - All Rights Reserved</span>
            </div>

            <div className='w-full my-10 h-0.5 bg-gray-300/50' />
            <span className='text-[var(--foreground-secondary)] text-center text-xs'>Powered by</span>
            <div className='w-full flex justify-center text-white items-center mt-2'>
                <IconBrandVercelFilled size={17} />
                <span>Vercel</span>
            </div>
        </div>
    )
}

export default Footer