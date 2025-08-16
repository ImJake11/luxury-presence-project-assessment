


import React from 'react'

const GlassBg = ({
    children
}: { children: React.ReactNode }) => {
    return (
        <div className='w-fit h-fit rounded-[4px] bg-white/20 backdrop-blur-md p-2'>
            {children}
        </div>
    )
}

export default GlassBg
