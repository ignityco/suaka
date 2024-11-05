"use client";

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import iconArrowDown from "@/assets/svg/arrow-down.svg";
import iconPin from "@/assets/svg/pin.svg";
import iconFilter from "@/assets/svg/filter.svg";

interface FilterProps {
    propertyFilter?: string;
    toggleCard: () => void;
}

const FilterCard: React.FC<FilterProps> = ({ propertyFilter, toggleCard }) => {
    const [PropertyFilter, setPropertyFilter] = useState("To Rent");
    const [IsOpenLocation, setIsOpenLocation] = useState(false);
    const [IsOpenLocationInput, setIsOpenLocationInput] = useState(false);
    const [IsOpenPrices, setIsOpenPrices] = useState(false);
    const [IsOpenType, setIsOpenType] = useState(false);
    const [IsOpenDuration, setIsOpenDuration] = useState(false);
    const [IsOpenFacilities, setIsOpenFacilities] = useState(false);
    const [IsOpenBills, setIsOpenBills] = useState(false);
    const [Location, setLocation] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);


    // Handle clicks outside of any dropdown
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                // Close all dropdowns if clicked outside
                setIsOpenLocationInput(false);
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
    }, [IsOpenLocationInput, IsOpenLocation, IsOpenPrices, IsOpenType, IsOpenDuration, IsOpenFacilities, IsOpenBills]);

    useEffect(() => {
        if (propertyFilter) {
            setPropertyFilter(propertyFilter);
        }
    }, [propertyFilter]);

    return (
        <div className="bg-white py-5 px-5 md:px-8 shadow-lg rounded-full w-full lg:w-[75%] relative border">
            <div className='w-max bg-white border-t border-x absolute left-[50%] top-0 translate-x-[-50%] translate-y-[-100%] rounded-t-lg'>
                <div className='flex items-center'>
                    <button onClick={() => { setPropertyFilter("To Rent") }} className={`${PropertyFilter === "To Rent" ? "bg-primary text-white" : "hover:bg-soft"} min-w-fit px-6 py-2 rounded-tl-lg duration-300 transition-all`}>To Rent</button>
                    <button onClick={() => { setPropertyFilter("For Sale") }} className={`${PropertyFilter === "For Sale" ? "bg-primary text-white" : "hover:bg-soft"} min-w-fit px-6 py-2 rounded-tr-lg duration-300 transition-all`}>For Sale</button>
                </div>
            </div>
            <div className="flex items-center space-x-2 md:grid md:grid-cols-7 w-full relative">
                <div className="relative w-full">
                    <p className="hidden md:block font-semibold">Location</p>
                    <input placeholder="Search location" value={Location} onChange={(e) => {
                        setIsOpenLocationInput(true);
                        setLocation(e.target.value);
                    }} className="block py-1 md:hidden border-b outline-none border-gray-400 mt-0.5" />
                    <button onClick={() => { setIsOpenLocation(true) }} className="hidden md:flex items-center space-x-2">
                        <p className="text-[#BFBFBF]">Search</p>
                        <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                    </button>
                    {IsOpenLocationInput &&
                        <div ref={dropdownRef} className="w-[250px] p-3 absolute bottom-0 left-0 translate-y-[105%] bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
                                <button onClick={() => { setLocation("Canggu, Bali"); setIsOpenLocationInput(false); }} className="flex items-center space-x-2 mt-3">
                                    <Image className="w-5 h-5" src={iconPin} width={50} height={50} alt="icon" />
                                    <p>Canggu, Bali</p>
                                </button>
                                <button onClick={() => { setLocation("Ubud, Bali"); setIsOpenLocationInput(false); }} className="flex items-center space-x-2 mt-3">
                                    <Image className="w-5 h-5" src={iconPin} width={50} height={50} alt="icon" />
                                    <p>Ubud, Bali</p>
                                </button>
                                <button onClick={() => { setLocation("Denpasar, Bali"); setIsOpenLocationInput(false); }} className="flex items-center space-x-2 mt-3">
                                    <Image className="w-5 h-5" src={iconPin} width={50} height={50} alt="icon" />
                                    <p>Denpasar, Bali</p>
                                </button>
                            </div>
                        </div>
                    }
                    {IsOpenLocation &&
                        <div ref={dropdownRef} className="p-3 absolute bottom-0 left-0 translate-y-[100%] bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
                                <p className="font-semibold">Location</p>
                                <input placeholder="Search location" onChange={() => { }} className="border-b outline-none border-gray-400 mt-2" />
                                <button className="flex items-center space-x-2 mt-3">
                                    <Image className="w-5 h-5" src={iconPin} width={50} height={50} alt="icon" />
                                    <p>Canggu, Bali</p>
                                </button>
                                <button className="flex items-center space-x-2 mt-3">
                                    <Image className="w-5 h-5" src={iconPin} width={50} height={50} alt="icon" />
                                    <p>Ubud, Bali</p>
                                </button>
                                <button className="flex items-center space-x-2 mt-3">
                                    <Image className="w-5 h-5" src={iconPin} width={50} height={50} alt="icon" />
                                    <p>Denpasar, Bali</p>
                                </button>
                            </div>
                        </div>
                    }
                </div>
                <div className="hidden md:block relative">
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
                <div className="hidden md:block relative">
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
                <div className="hidden md:block relative">
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
                <div className="hidden md:block relative">
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
                                        <p>Construction Noise</p>
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
                <div className="hidden md:block relative">
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
                <div className="block md:hidden h-full">
                    <button onClick={toggleCard} className="px-1">
                        <svg className='w-5 h-5' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2 7.00004H2.142C2.36027 7.85763 2.85806 8.61804 3.55672 9.16115C4.25537 9.70426 5.11507 9.99911 6 9.99911C6.88493 9.99911 7.74463 9.70426 8.44328 9.16115C9.14194 8.61804 9.63973 7.85763 9.858 7.00004H30C30.2652 7.00004 30.5196 6.89468 30.7071 6.70715C30.8946 6.51961 31 6.26526 31 6.00004C31 5.73482 30.8946 5.48047 30.7071 5.29293C30.5196 5.1054 30.2652 5.00004 30 5.00004H9.858C9.63973 4.14246 9.14194 3.38204 8.44328 2.83893C7.74463 2.29582 6.88493 2.00098 6 2.00098C5.11507 2.00098 4.25537 2.29582 3.55672 2.83893C2.85806 3.38204 2.36027 4.14246 2.142 5.00004H2C1.73478 5.00004 1.48043 5.1054 1.29289 5.29293C1.10536 5.48047 1 5.73482 1 6.00004C1 6.26526 1.10536 6.51961 1.29289 6.70715C1.48043 6.89468 1.73478 7.00004 2 7.00004ZM6 4.00004C6.39556 4.00004 6.78224 4.11734 7.11114 4.3371C7.44004 4.55686 7.69638 4.86922 7.84776 5.23467C7.99913 5.60013 8.03874 6.00226 7.96157 6.39022C7.8844 6.77818 7.69392 7.13455 7.41421 7.41426C7.13451 7.69396 6.77814 7.88444 6.39018 7.96161C6.00222 8.03878 5.60009 7.99918 5.23463 7.8478C4.86918 7.69642 4.55682 7.44008 4.33706 7.11118C4.1173 6.78228 4 6.3956 4 6.00004C4 5.46961 4.21071 4.9609 4.58579 4.58583C4.96086 4.21075 5.46957 4.00004 6 4.00004ZM30 15H29.858C29.6397 14.1425 29.1419 13.382 28.4433 12.8389C27.7446 12.2958 26.8849 12.001 26 12.001C25.1151 12.001 24.2554 12.2958 23.5567 12.8389C22.8581 13.382 22.3603 14.1425 22.142 15H2C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4805 1 15.7348 1 16C1 16.2653 1.10536 16.5196 1.29289 16.7071C1.48043 16.8947 1.73478 17 2 17H22.142C22.3603 17.8576 22.8581 18.618 23.5567 19.1611C24.2554 19.7043 25.1151 19.9991 26 19.9991C26.8849 19.9991 27.7446 19.7043 28.4433 19.1611C29.1419 18.618 29.6397 17.8576 29.858 17H30C30.2652 17 30.5196 16.8947 30.7071 16.7071C30.8946 16.5196 31 16.2653 31 16C31 15.7348 30.8946 15.4805 30.7071 15.2929C30.5196 15.1054 30.2652 15 30 15ZM26 18C25.6044 18 25.2178 17.8827 24.8889 17.663C24.56 17.4432 24.3036 17.1309 24.1522 16.7654C24.0009 16.4 23.9613 15.9978 24.0384 15.6099C24.1156 15.2219 24.3061 14.8655 24.5858 14.5858C24.8655 14.3061 25.2219 14.1156 25.6098 14.0385C25.9978 13.9613 26.3999 14.0009 26.7654 14.1523C27.1308 14.3037 27.4432 14.56 27.6629 14.8889C27.8827 15.2178 28 15.6045 28 16C28 16.5305 27.7893 17.0392 27.4142 17.4143C27.0391 17.7893 26.5304 18 26 18ZM30 25H19.858C19.6397 24.1425 19.1419 23.382 18.4433 22.8389C17.7446 22.2958 16.8849 22.001 16 22.001C15.1151 22.001 14.2554 22.2958 13.5567 22.8389C12.8581 23.382 12.3603 24.1425 12.142 25H2C1.73478 25 1.48043 25.1054 1.29289 25.2929C1.10536 25.4805 1 25.7348 1 26C1 26.2653 1.10536 26.5196 1.29289 26.7071C1.48043 26.8947 1.73478 27 2 27H12.142C12.3603 27.8576 12.8581 28.618 13.5567 29.1611C14.2554 29.7043 15.1151 29.9991 16 29.9991C16.8849 29.9991 17.7446 29.7043 18.4433 29.1611C19.1419 28.618 19.6397 27.8576 19.858 27H30C30.2652 27 30.5196 26.8947 30.7071 26.7071C30.8946 26.5196 31 26.2653 31 26C31 25.7348 30.8946 25.4805 30.7071 25.2929C30.5196 25.1054 30.2652 25 30 25ZM16 28C15.6044 28 15.2178 27.8827 14.8889 27.663C14.56 27.4432 14.3036 27.1309 14.1522 26.7654C14.0009 26.4 13.9613 25.9978 14.0384 25.6099C14.1156 25.2219 14.3061 24.8655 14.5858 24.5858C14.8655 24.3061 15.2219 24.1156 15.6098 24.0385C15.9978 23.9613 16.3999 24.0009 16.7654 24.1523C17.1308 24.3037 17.4432 24.56 17.6629 24.8889C17.8827 25.2178 18 25.6045 18 26C18 26.5305 17.7893 27.0392 17.4142 27.4143C17.0391 27.7893 16.5304 28 16 28Z" fill="#232222" />
                        </svg>
                    </button>
                </div>
                <div className="h-full">
                    <button className="w-full h-full px-4 py-2 md:px-0 md:py-0 rounded-full bg-second text-white hover:bg-second/85 duration-300 transition-all">Search</button>
                </div>
            </div>
        </div>
    )
}

export default FilterCard;