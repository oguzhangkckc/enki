import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';



const Sidebar = () => {
    const [activeHeader, setActiveHeader] = useState(null);

    const toggleMenu = (header) => {
        setActiveHeader(activeHeader === header ? null : header);
    };

    const getIconRotation = (header) => {
        return activeHeader === header ? 'transform rotate-180 transition duration-500' : 'transition duration-500';
    };

    return (
        <div className="w-80 ml-8 rounded-md text-white bg-rose-700">
            <div className="cursor-pointer" onClick={() => toggleMenu(1)}>
                <div className='flex items-center justify-between'>
                    <h3 className='pl-8 py-3 text-sm font-semibold'>Steel Pipe Coatings</h3>
                    <div className="ml-auto">
                        <FaChevronDown className={`m-4 ${getIconRotation(1)}`} />
                    </div>
                </div>
                <div className='h-0.5 w-full bg-gray-200'></div>
                <div className={`overflow-hidden transition-all duration-700 ${activeHeader === 1 ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>KCC Fusion Bonded Epoxy Coating (FBE)</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Industrie Polieco-M.P.B. Polyolefin Coatings</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Enri Silicone Rollers and Wheels</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Temperature Resistand Polyester Tapes</li>
                    </ul>
                </div>
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(2)}>
                <div className='flex items-center justify-between'>
                    <h3 className='pl-8 py-3 text-sm font-semibold'>Steel Pipe Protection</h3>
                    <div className="ml-auto">
                        <FaChevronDown className={`m-4 ${getIconRotation(2)}`} />
                    </div>
                </div>
                <div className='h-0.5 w-full bg-gray-200'></div>
                <div className={`overflow-hidden transition-all duration-700 ${activeHeader === 2 ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>Bevel Protection</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Pipe Closure</li>
                    </ul>
                </div>
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(3)}>
                <div className='flex items-center justify-between'>
                    <h3 className='pl-8 py-3 text-sm font-semibold'>Steel Pipe Coating Rehabilitation</h3>
                    <div className="ml-auto">
                        <FaChevronDown className={`m-4 ${getIconRotation(3)}`} />
                    </div>
                </div>
                <div className='h-0.5 w-full bg-gray-200'></div>
                <div className={`overflow-hidden transition-all duration-700 ${activeHeader === 3 ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>Underground Pipes: Polyguard RD-6</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Onground Pipelines</li>
                    </ul>
                </div>
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(4)}>
                <div className='flex items-center justify-between'>
                    <h3 className='pl-8 py-3 text-sm font-semibold'>Industrial Corrosion Protection</h3>
                    <div className="ml-auto">
                        <FaChevronDown className={`m-4 ${getIconRotation(4)}`} />
                    </div>
                </div>
                <div className='h-0.5 w-full bg-gray-200'></div>
                <div className={`overflow-hidden transition-all duration-700 ${activeHeader === 4 ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>Polyguard RG2400 Technology: Extraordinary Corossion Technology</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Weather Proof Jacketing: Polyguard Alumaguard</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Water And Moisture Barriers</li>
                    </ul>
                </div>
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(5)}>
                <div className='flex items-center justify-between'>
                    <h3 className='pl-8 py-3 text-sm font-semibold'>ZEC Silicone Rubbers</h3>
                    <div className="ml-auto">
                        <FaChevronDown className={`m-4 ${getIconRotation(5)}`} />
                    </div>
                </div>
                <div className='h-0.5 w-full bg-gray-200'></div>
                <div className={`overflow-hidden transition-all duration-700 ${activeHeader === 5 ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>What Is Silicone Rubber?</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Types Of Silicone Rubbers?</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>ZEC Silicone Product Groups</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Application Of Silicone Rubbers In Industry</li>
                    </ul>
                </div>
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(6)}>
                <div className='flex items-center justify-between'>
                    <h3 className='pl-8 py-3 text-sm font-semibold'>Medical Products</h3>
                    <div className="ml-auto">
                        <FaChevronDown className={`m-4 ${getIconRotation(6)}`} />
                    </div>
                </div>
                <div className='h-0.5 w-full bg-gray-200'></div>
                <div className={`overflow-hidden transition-all duration-700 ${activeHeader === 6 ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>EDDA Medical Products</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Catalouges</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Certificates</li>
                    </ul>
                </div>
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(7)}>
                <div className='flex items-center justify-between'>
                    <h3 className='pl-8 py-3 text-sm font-semibold'>Baby Products</h3>
                    <div className="ml-auto">
                        <FaChevronDown className={`m-4 ${getIconRotation(7)}`} />
                    </div>
                </div>
                <div className={`overflow-hidden transition-all duration-700 ${activeHeader === 7 ? 'max-h-60' : 'max-h-0'}`}>
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>Cat Products</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Pandish Products</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Sidebar;
