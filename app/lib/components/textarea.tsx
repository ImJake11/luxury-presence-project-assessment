'use client'

import React, { useRef } from 'react'

const Textarea = ({ title }: { title: string }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    const handleInput = () => {
        const textarea = textareaRef.current
        if (textarea) {
            textarea.style.height = 'auto' // reset height
            textarea.style.height = `${textarea.scrollHeight}px` // adjust height
        }
    }

    return (
        <div className='flex flex-col gap-2 w-full'>
            <span className='text-white'>{title}</span>
            <textarea
                ref={textareaRef}
                onInput={handleInput}
                className="w-full min-h-[5rem] bg-gray-900 border border-gray-500 rounded-[4px] px-3 py-2 text-white outline-0 focus:border-[var(--accent)] focus:ring-0 resize-none max-h-[15rem]"
                placeholder="Enter text"
            />
        </div>
    )
}

export default Textarea
