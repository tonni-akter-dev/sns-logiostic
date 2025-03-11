"use client";

import { CaretDown, CaretUp } from "@phosphor-icons/react";
import { useState } from "react";

interface DropdownProps {
    title: string;
    items: string[];
}

const Dropdown: React.FC<DropdownProps> = ({ title, items }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            {/* Dropdown Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="hover:text-[#C1032F] text-[#303030] cursor-pointer flex items-center gap-2 font-semibold text-base leading-6"
            >
                {title}
                {isOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
            </button>
            {/* Dropdown Menu */}
            {isOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg overflow-hidden z-50">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
