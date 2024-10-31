"use client";

import { useState } from "react";

import Image from "next/image";
import iconArrowDown from "@/assets/svg/arrow-down.svg";

interface FloatingFilterCardProps {
    toggleCard: () => void;
    isVisible: boolean;
}

const FloatingFilterCard: React.FC<FloatingFilterCardProps> = ({ toggleCard, isVisible }) => {
    const [IsOpenPrices, setIsOpenPrices] = useState(false);
    const [IsOpenType, setIsOpenType] = useState(false);
    const [IsOpenDuration, setIsOpenDuration] = useState(false);
    const [IsOpenFacilities, setIsOpenFacilities] = useState(false);
    const [IsOpenBills, setIsOpenBills] = useState(false);
    return (
        <div
            className={`fixed h-[350px] z-50 bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg border-2 p-4 transition-transform duration-300 transform ${isVisible ? 'translate-y-0 shadow-card-filter' : 'translate-y-full'}`}>
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Filter</h2>
                <button
                    onClick={toggleCard}
                    className="text-black border-b border-gray-900">
                    Close
                </button>
            </div>
            <div className="pt-4 pb-10 overflow-y-auto h-full">
                <div className="relative mb-4">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Max Prices</p>
                        <button onClick={() => { setIsOpenPrices(!IsOpenPrices) }} className="flex items-center space-x-2">
                            <p className="text-[#BFBFBF]">$ 1,500.00</p>
                            <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                        </button>
                    </div>
                    {IsOpenPrices &&
                        <div className="p-3 bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
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
                <div className="relative mb-4">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Property Type</p>
                        <button onClick={() => { setIsOpenType(!IsOpenType) }} className="flex items-center space-x-2">
                            <p className="text-[#BFBFBF]">Show of</p>
                            <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                        </button>
                    </div>
                    {IsOpenType &&
                        <div className="p-3 bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
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
                <div className="relative mb-4">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Duration</p>
                        <button onClick={() => { setIsOpenDuration(!IsOpenDuration) }} className="flex items-center space-x-2">
                            <p className="text-[#BFBFBF]">1 Month</p>
                            <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                        </button>
                    </div>
                    {IsOpenDuration &&
                        <div className="p-3 bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
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
                <div className="relative mb-4">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Facilities</p>
                        <button onClick={() => { setIsOpenFacilities(!IsOpenFacilities) }} className="flex items-center space-x-2">
                            <p className="text-[#BFBFBF]">Show of</p>
                            <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                        </button>
                    </div>
                    {IsOpenFacilities &&
                        <div className="p-3 bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
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
                <div className="relative mb-4">
                    <div className="flex items-center justify-between">
                        <p className="font-semibold">Bills</p>
                        <button onClick={() => { setIsOpenBills(!IsOpenBills) }} className="flex items-center space-x-2">
                            <p className="text-[#BFBFBF]">Choose</p>
                            <Image src={iconArrowDown} width={50} height={50} alt="icon" className="w-4 h-4" />
                        </button>
                    </div>
                    {IsOpenBills &&
                        <div className="p-3 bg-white shadow-md rounded-lg border border-gray-150">
                            <div className="w-full">
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
            </div>
        </div>
    )
}

export default FloatingFilterCard;