"use client";

import Modal from 'react-minimal-modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

import iconLoveSolid from "@/assets/svg/love-solid.svg";
import iconLove from "@/assets/svg/love.svg";
import iconArrowRedirect from "@/assets/svg/arrow-redirect.svg";
import iconBath from "@/assets/svg/bathtub.svg";
import iconBed from "@/assets/svg/bed.svg";
import iconBills from "@/assets/svg/bills.svg";
import iconBuilding from "@/assets/svg/building.svg";
import imgDummyProp from "@/assets/png/dummy-prop.png";

const Order = () => {
    const router = useRouter();
    return (
        <div>
            <div className="text-gray-400 text-sm mb-4">
                1 Results Found
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {Array.from({ length: 1 }).map((_, index) => (
                    <div key={index} className="cursor-pointer bg-white rounded-lg shadow-md hover:scale-[1.015] duration-300 transition-all overflow-hidden">
                        <div className="px-3 pt-3 relative">
                            <button className="cursor-pointer bg-white rounded-full p-1 absolute top-0 right-0 m-5">
                                <Image className="w-6 h-6" src={iconLoveSolid} width={50} height={50} alt="icon" />
                            </button>
                            <div className="absolute bottom-0 left-0 ml-5 mb-2 rounded-full flex items-center space-x-2 p-1 bg-brown-soft px-3">
                                <Image className="w-5 h-5" src={iconBuilding} width={50} height={50} alt="icon" />
                                <p className="text-xs text-white">Villa</p>
                            </div>
                            <Image alt="Modern luxury villa with pool" className="rounded-lg w-full h-48 object-cover" height={300} src={imgDummyProp} width={400} />
                        </div>
                        <div className="p-3">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-semibold">
                                    Villa Uma: A Modern Lux...
                                </h3>
                                {/* <Image className="w-6 h-6" src={iconArrowRedirect} width={50} height={50} alt="icon" /> */}
                            </div>
                            <p className="text-gray-500 text-sm">
                                Umalas, Indonesia
                            </p>
                            <p className="text-gray-500 text-xs">
                                ID: INV-20241029-A1B2C3D4E5
                            </p>
                            <p className="text-gray-500 text-xs">
                                Start: 20 December 2024
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-4 mt-2">
                                    <div className="flex items-center space-x-1">
                                        <Image className="w-auto h-6" src={iconBed} width={50} height={50} alt="icon" />
                                        <span className="text-gray-500 text-sm ml-1">
                                            4
                                        </span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <Image className="w-auto h-6" src={iconBath} width={50} height={50} alt="icon" />
                                        <span className="text-gray-500 text-sm ml-1">
                                            4
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-1">
                                    <div>
                                        <Image className="w-auto h-6" src={iconBills} width={50} height={50} alt="icon" />
                                    </div>
                                    <div>
                                        <p className="text-[10px] text-gray-400 leading-none">Exclude</p>
                                        <p className="text-sm font-bold leading-none">Bills</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center mt-4">
                                <span className="bg-primary rounded-md leading-none text-white px-2.5 py-1 font-semibold mr-1.5">
                                    $11,351
                                </span>
                                <div className="text-center">
                                    <div className="text-gray-500 leading-none text-xs text-start">
                                        Pay with
                                    </div>
                                    <div className="font-semibold text-xs text-gray-800">
                                        Credit card or debit card
                                    </div>
                                </div>
                            </div>
                            <p className='text-sm mt-2'>Contact & Location</p>
                            <button className="bg-primary hover:bg-primary/85 transition-all duration-300 rounded-md p-1 text-white w-full flex items-center space-x-1 justify-center">
                                <svg className='w-5 h-5' width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.2913 14.5837C17.083 14.4795 15.7288 13.8545 15.5205 13.7503C15.3122 13.6462 15.1038 13.6462 14.8955 13.8545C14.6872 14.0628 14.2705 14.6878 14.0622 14.8962C13.958 15.1045 13.7497 15.1045 13.5413 15.0003C12.8122 14.6878 12.083 14.2712 11.458 13.7503C10.9372 13.2295 10.4163 12.6045 9.99967 11.9795C9.89551 11.7712 9.99967 11.5628 10.1038 11.4587C10.208 11.3545 10.3122 11.1462 10.5205 11.042C10.6247 10.9378 10.7288 10.7295 10.7288 10.6253C10.833 10.5212 10.833 10.3128 10.7288 10.2087C10.6247 10.1045 10.1038 8.85449 9.89551 8.33366C9.79134 7.60449 9.58301 7.60449 9.37467 7.60449H8.85384C8.64551 7.60449 8.33301 7.81283 8.22884 7.91699C7.60384 8.54199 7.29134 9.27116 7.29134 10.1045C7.39551 11.042 7.70801 11.9795 8.33301 12.8128C9.47884 14.4795 10.9372 15.8337 12.708 16.667C13.2288 16.8753 13.6455 17.0837 14.1663 17.1878C14.6872 17.3962 15.208 17.3962 15.833 17.292C16.5622 17.1878 17.1872 16.667 17.6038 16.042C17.8122 15.6253 17.8122 15.2087 17.708 14.792L17.2913 14.5837ZM19.8955 5.10449C15.833 1.04199 9.27051 1.04199 5.20801 5.10449C1.87467 8.43783 1.24967 13.542 3.54134 17.6045L2.08301 22.917L7.60384 21.4587C9.16634 22.292 10.833 22.7087 12.4997 22.7087C18.2288 22.7087 22.8122 18.1253 22.8122 12.3962C22.9163 9.68782 21.7705 7.08366 19.8955 5.10449ZM17.083 19.6878C15.7288 20.5212 14.1663 21.042 12.4997 21.042C10.9372 21.042 9.47884 20.6253 8.12467 19.8962L7.81217 19.6878L4.58301 20.5212L5.41634 17.3962L5.20801 17.0837C2.70801 12.917 3.95801 7.70866 8.02051 5.10449C12.083 2.50033 17.2913 3.85449 19.7913 7.81283C22.2913 11.8753 21.1455 17.1878 17.083 19.6878Z" fill="white" />
                                </svg>
                                <span className='text-sm'>Whatsapp</span>
                            </button>
                            <button className="border border-primary hover:bg-primary rounded-md p-1 text-primary hover:text-white transition-all duration-300 w-full flex items-center space-x-1 justify-center mt-1">
                                <span className='text-sm'>Location</span>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Order;