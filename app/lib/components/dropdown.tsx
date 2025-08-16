'use client'

import React, { useEffect, useState } from 'react'
import { IconChevronDown } from '@tabler/icons-react'

interface Prop {
    title: string
    opt: string[]
}

const Dropdown = ({ title, opt }: Prop) => {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState<string | null>(null)
    const [isHovering, setIsHovering] = useState(false)


    const handleToggle = () => {
        setIsOpen((prev) => !prev)
    }

    const handleSelect = (option: string) => {
        setSelected(option)
        setIsOpen(false)
    }

    return (
        <div
            className="flex w-full flex-col relative h-auto"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
                setIsHovering(false)
                setIsOpen(false)
            }}
        >
            <span className="text-white mb-2">{title}</span>

            {/* Dropdown container */}
            <div className="relative">
                <div
                    className="min-h-[2.5rem] border border-gray-500 rounded-[4px] bg-gray-900 px-3 text-white flex items-center justify-between cursor-pointer"
                    onClick={handleToggle}
                >
                    <span>{selected || 'Select an option'}</span>
                    <IconChevronDown
                        className={`ml-2 transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                    />
                </div>

                {/* Options list */}
                {isOpen && (
                    <ul className="absolute z-10 w-full mt-1 max-h-[10rem] overflow-auto bg-gray-900 border border-gray-500 rounded-[4px]">
                        {opt.map((item, index) => (
                            <li
                                key={index}
                                className="px-3 py-2 cursor-pointer hover:bg-[var(--accent)] text-white"
                                onClick={() => handleSelect(item)}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default Dropdown
