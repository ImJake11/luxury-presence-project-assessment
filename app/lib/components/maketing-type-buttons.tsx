


import React from 'react'
interface Prop {
    title: string,
    isSelected: boolean,
    handleClick: () => void,
}
const MarketingTypeButtons = ({
    isSelected, handleClick, title
}: Prop) => {

    return (
        <button className="flex group items-center h-[3rem] p-2 gap-2 bg-[var(--background)] rounded-md"
            onClick={handleClick}
        >
            {/* Divider */}
            <div className={`w-[5px] rounded-[50px] h-full transition-all duration-300 ease-linear ${isSelected ? "bg-[var(--accent)]" : "bg-gray-500/20"}`}></div>

            {/* Text */}
            <span className={`${!isSelected && "transition-all duration-300 ease-linear group-hover:text-[var(--accent)]"} text-white`}>{title}</span>
        </button>
    )
}

export default MarketingTypeButtons