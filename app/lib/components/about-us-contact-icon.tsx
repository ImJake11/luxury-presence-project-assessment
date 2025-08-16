import React from 'react'

interface Prop {
    children: React.ReactNode,
}

const AboutUsContactIcon = (
    { children }: Prop
) => {
    return (
        <div className='w-[2.5rem] aspect-square rounded-[4px] bg-[var(--accent)] transition-all duration-300 ease-in-out hover:bg-[var(--accent-secondary)] grid place-content-center'>
            {children}
        </div>
    )
}

export default AboutUsContactIcon