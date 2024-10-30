"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import iconArrowDown from "@/assets/svg/arrow-down.svg";
import iconPin from "@/assets/svg/pin.svg";

interface FilterProps {
    propertyFilter?: string
}

const FilterCard: React.FC<FilterProps> = ({ propertyFilter }) => {
    const [PropertyFilter, setPropertyFilter] = useState("To Rent");
    const [IsOpenLocation, setIsOpenLocation] = useState(false);
    const [IsOpenPrices, setIsOpenPrices] = useState(false);
    const [IsOpenType, setIsOpenType] = useState(false);
    const [IsOpenDuration, setIsOpenDuration] = useState(false);
    const [IsOpenFacilities, setIsOpenFacilities] = useState(false);
    const [IsOpenBills, setIsOpenBills] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    // Handle clicks outside of any dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                // Close all dropdowns if clicked outside
                setIsOpenLocation(false);
                setIsOpenPrices(false);
                setIsOpenType(false);
                setIsOpenDuration(false);
                setIsOpenFacilities(false);
                setIsOpenBills(false);
            }
        }

        // Add event listener when any dropdown is open
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [IsOpenLocation, IsOpenPrices, IsOpenType, IsOpenDuration, IsOpenFacilities, IsOpenBills]);

    useEffect(() => {
        if (propertyFilter) {
            setPropertyFilter(propertyFilter);
        }
    }, [propertyFilter]);

    return (
        <div className="bg-white py-5 px-8 shadow-lg rounded-full w-[75%] relative border">
            <div className='bg-white border-t border-x absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-100%] rounded-t-lg'>
                <div className='flex items-center'>
                    <button onClick={() => { setPropertyFilter("To Rent") }} className={`${PropertyFilter === "To Rent" ? "bg-primary text-white" : "hover:bg-soft"} px-6 py-2 rounded-tl-lg duration-300 transition-all`}>To Rent</button>
                    <button onClick={() => { setPropertyFilter("For Sale") }} className={`${PropertyFilter === "For Sale" ? "bg-primary text-white" : "hover:bg-soft"} px-6 py-2 rounded-tr-lg duration-300 transition-all`}>For Sale</button>
                </div>
            </div>
            <div className="grid grid-cols-7 w-full relative">
                <div className="relative">
                    <p className="font-semibold">Location</p>
                    <button onClick={() => { setIsOpenLocation(true) }} className="flex items-center space-x-2">
                        <p className="text-[#BFBFBF]">Search</p>
                        <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                    </button>
                    {IsOpenLocation &&
                        <div ref={dropdownRef} className="p-3 absolute bottom-0 left-0 translate-y-[100%] bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
                                <p className="font-semibold">Location</p>
                                <input placeholder="Search location" onChange={() => { }} className="border-b outline-none border-gray-400 mt-2" />
                                <div className="flex items-center space-x-2 mt-3">
                                    <Image className="w-5 h-5" src={iconPin} width={50} height={50} alt="icon" />
                                    <p>Canggu, Bali</p>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <Image className="w-5 h-5" src={iconPin} width={50} height={50} alt="icon" />
                                    <p>Ubud, Bali</p>
                                </div>
                                <div className="flex items-center space-x-2 mt-3">
                                    <Image className="w-5 h-5" src={iconPin} width={50} height={50} alt="icon" />
                                    <p>Denpasar, Bali</p>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div className="relative">
                    <p className="font-semibold">Max Prices</p>
                    <button onClick={() => { setIsOpenPrices(true) }} className="flex items-center space-x-2">
                        <p className="text-[#BFBFBF]">$ 1,500.00</p>
                        <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                    </button>
                    {IsOpenPrices &&
                        <div ref={dropdownRef} className="w-[200px] p-3 absolute bottom-0 left-0 translate-y-[100%] bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
                                <p className="font-semibold">Max Prices</p>
                                <div className="mt-1">
                                    <button className="block w-full text-start rounded-full px-2 py-1 hover:bg-gray-200 duration-300 transition-all" onClick={() => { }}>
                                        <p>$ 1,500.00</p>
                                    </button>
                                </div>
                                <div className="mt-1">
                                    <button className="block w-full text-start rounded-full px-2 py-1 hover:bg-gray-200 duration-300 transition-all" onClick={() => { }}>
                                        <p>$ 3,000.00</p>
                                    </button>
                                </div>
                                <div className="mt-1">
                                    <button className="block w-full text-start rounded-full px-2 py-1 hover:bg-gray-200 duration-300 transition-all" onClick={() => { }}>
                                        <p>$ 6,000.00</p>
                                    </button>
                                </div>
                                <div className="mt-1">
                                    <button className="block w-full text-start rounded-full px-2 py-1 hover:bg-gray-200 duration-300 transition-all" onClick={() => { }}>
                                        <p>$ 12,000.00</p>
                                    </button>
                                </div>
                                <div className='flex items-center space-x-2 mt-1 w-full overflow-hidden'>
                                    <p>$</p>
                                    <input placeholder="0" onChange={() => { }} className="border-b outline-none border-gray-400" />
                                </div>
                                <button className="mt-3 py-0.5 w-full bg-second hover:bg-second/85 duration-300 transition-all rounded-full text-white">Clear</button>
                            </div>
                        </div>
                    }
                </div>
                <div className="relative">
                    <p className="font-semibold">Property Type</p>
                    <button onClick={() => { setIsOpenType(true) }} className="flex items-center space-x-2">
                        <p className="text-[#BFBFBF]">Show of</p>
                        <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                    </button>
                    {IsOpenType &&
                        <div ref={dropdownRef} className="w-[200px] p-3 absolute bottom-0 left-0 translate-y-[100%] bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
                                <p className="font-semibold">Property Type</p>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>Villa</p>
                                    </button>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>Rooms</p>
                                    </button>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>Flats</p>
                                    </button>
                                </div>
                                <button className="mt-3 py-0.5 w-full bg-second hover:bg-second/85 duration-300 transition-all rounded-full text-white">Clear</button>
                            </div>
                        </div>
                    }
                </div>
                <div className="relative">
                    <p className="font-semibold">Duration</p>
                    <button onClick={() => { setIsOpenDuration(true) }} className="flex items-center space-x-2">
                        <p className="text-[#BFBFBF]">1 Month</p>
                        <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                    </button>
                    {IsOpenDuration &&
                        <div ref={dropdownRef} className="w-[200px] p-3 absolute bottom-0 left-0 translate-y-[100%] bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
                                <p className="font-semibold">Duration</p>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>1 Month</p>
                                    </button>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>3 Month</p>
                                    </button>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>6 Month</p>
                                    </button>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>12 Month</p>
                                    </button>
                                </div>
                                <button className="mt-3 py-0.5 w-full bg-second hover:bg-second/85 duration-300 transition-all rounded-full text-white">Clear</button>
                            </div>
                        </div>
                    }
                </div>
                <div className="relative">
                    <p className="font-semibold">Facilities</p>
                    <button onClick={() => { setIsOpenFacilities(true) }} className="flex items-center space-x-2">
                        <p className="text-[#BFBFBF]">Show of</p>
                        <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                    </button>
                    {IsOpenFacilities &&
                        <div ref={dropdownRef} className="w-[200px] p-3 absolute bottom-0 left-0 translate-y-[100%] bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
                                <p className="font-semibold">Facilities</p>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>Wifi</p>
                                    </button>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>Pool</p>
                                    </button>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>Parking</p>
                                    </button>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>AC</p>
                                    </button>
                                </div>
                                <button className="mt-3 py-0.5 w-full bg-second hover:bg-second/85 duration-300 transition-all rounded-full text-white">Clear</button>
                            </div>
                        </div>
                    }
                </div>
                <div className="relative">
                    <p className="font-semibold">Bills</p>
                    <button onClick={() => { setIsOpenBills(true) }} className="flex items-center space-x-2">
                        <p className="text-[#BFBFBF]">Choose</p>
                        <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                    </button>
                    {IsOpenBills &&
                        <div ref={dropdownRef} className="w-[200px] p-3 absolute bottom-0 left-0 translate-y-[100%] bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
                                <p className="font-semibold">Bills</p>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>Yes</p>
                                    </button>
                                </div>
                                <div className="mt-1 flex items-center">
                                    <div className="inline-flex items-center">
                                        <label className="flex items-center cursor-pointer relative">
                                            <input type="checkbox" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                    <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                        </label>
                                    </div>
                                    <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                        <p>No</p>
                                    </button>
                                </div>
                                <button className="mt-3 py-0.5 w-full bg-second hover:bg-second/85 duration-300 transition-all rounded-full text-white">Clear</button>
                            </div>
                        </div>
                    }
                </div>
                <div className="h-full">
                    <button className="w-full h-full rounded-full bg-second text-white hover:bg-second/85 duration-300 transition-all">Search</button>
                </div>
            </div>
        </div>
    )
}

export default FilterCard;