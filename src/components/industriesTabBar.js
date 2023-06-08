import React, { useState } from 'react';

export default function ListTabBar({ head, options, h3Class, divClass }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className={`relative ${divClass}`}>
                <h3 className={`text-md font-bold cursor-pointer ${h3Class}`} onClick={toggleDropdown}>{head}</h3>
                {isOpen && (
                    <ul className="absolute top-10 left-0 w-40 bg-white shadow-md">
                        {options.map((option, index) => (
                            <li className="py-1 px-6" key={index}>
                                {option}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
}
