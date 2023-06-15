import React, { useState } from 'react';


const Sidebar = () => {
    const [activeHeader, setActiveHeader] = useState(null);

   const toggleMenu = (header) => {
    setActiveHeader(activeHeader === header ? null : header);
  };

    return (
        <div className="w-80 ml-8 rounded-md text-white bg-slate-600">
            <div className="cursor-pointer" onClick={() => toggleMenu(1)}>
                <h3 className='pl-8 py-3 font-semibold'>Steel Pipe Coatings</h3>
                <div className='h-0.5 w-full bg-gray-200'></div>
                {activeHeader === 1 ? (
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>KCC Fusion Bonded Epoxy Coating (FBE)</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Industrie Polieco-M.P.B. Polyolefin Coatings</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Enri Silicone Rollers and Wheels</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Temperature Resistand Polyester Tapes</li>
                    </ul>
                ) : null}
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(2)}>
                <h3 className='pl-8 py-3 font-semibold'>Steel Pipe Protection</h3>
                <div className='h-0.5 w-full bg-gray-200'></div>
                {activeHeader === 2 ? (
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>Bevel Protection</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Pipe Closure</li>
                    </ul>
                ) : null}
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(3)}>
                <h3 className='pl-8 py-3 font-semibold'>Steel Pipe Coating Rehabilitation</h3>
                <div className='h-0.5 w-full bg-gray-200'></div>
                {activeHeader === 3 ? (
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>Underground Pipes: Polyguard RD-6</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Onground Pipelines</li>
                    </ul>
                ) : null}
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(4)}>
                <h3 className='pl-8 py-3 font-semibold'>Industrial Corrosion Protection</h3>
                <div className='h-0.5 w-full bg-gray-200'></div>
                {activeHeader === 4 ? (
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>Polyguard RG2400 Technology: Extraordinary Corossion Technology</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Weather Proof Jacketing: Polyguard Alumaguard</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Water And Moisture Barriers</li>
                    </ul>
                ) : null}
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(5)}>
                <h3 className='pl-8 py-3 font-semibold'>ZEC Silicone Rubbers</h3>
                <div className='h-0.5 w-full bg-gray-200'></div>
                {activeHeader === 5 ? (
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>What Is Silicone Rubber?</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Types Of Silicone Rubbers?</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>ZEC Silicone Product Groups</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Application Of Silicone Rubbers In Industry</li>
                    </ul>
                ) : null}
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(6)}>
                <h3 className='pl-8 py-3 font-semibold'>Medical Products</h3>
                <div className='h-0.5 w-full bg-gray-200'></div>
                {activeHeader === 6 ? (
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>EDDA Medical Products</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Catalouges</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Certificates</li>
                    </ul>
                ) : null}
            </div>
            <div className="cursor-pointer" onClick={() => toggleMenu(7)}>
                <h3 className='pl-8 py-3 font-semibold'>Baby Products</h3>
                {activeHeader === 7 ? (
                    <ul className="bg-slate-500">
                        <li className='pl-8 py-2 text-sm'>Cat Products</li>
                        <div className='h-0.5 w-full bg-gray-600'></div>
                        <li className='pl-8 py-2 text-sm'>Pandish Products</li>
                    </ul>
                ) : null}
            </div>

        </div>
    );
};

export default Sidebar;
