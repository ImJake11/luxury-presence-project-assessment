'use client'

import React from 'react'

const Textfield = ({ title }: { title: string }) => {
    return (
        <div className='flex flex-col gap-2 w-full'>
            <span className='text-white'>{title}</span>
            <input
                type="text"
                className="w-full h-[2.5rem] bg-gray-900 border border-gray-500 rounded-[4px] px-3 text-white outline-0
                 focus:border-[var(--accent)] focus:ring-0"
                placeholder="Enter text"
            />
        </div>
    )
}

export default Textfield
