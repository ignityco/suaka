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

const Wishlist = () => {
    const router = useRouter();
    return (
        <div>
            <div className="text-gray-400 text-sm mb-4">
                4 Results Found
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 mt-4">
                {Array.from({ length: 3 }).map((_, index) => (
                    <div onClick={() => { router.push('/detail/rent') }} key={index} className="cursor-pointer bg-white rounded-lg shadow-md hover:scale-[1.015] duration-300 transition-all overflow-hidden">
                        <div className="md:px-3 md:pt-3 relative">
                            <button className="cursor-pointer bg-white rounded-full p-1 absolute top-0 right-0 m-2 md:m-5">
                                <Image className="w-6 h-6" src={iconLoveSolid} width={50} height={50} alt="icon" />
                            </button>
                            <div className="absolute bottom-0 left-0 ml-2 md:ml-5 mb-2 rounded-full flex items-center space-x-2 p-1 bg-brown-soft px-3">
                                <Image className="w-5 h-5" src={iconBuilding} width={50} height={50} alt="icon" />
                                <p className="text-xs text-white">Villa</p>
                            </div>
                            <Image alt="Modern luxury villa with pool" className="rounded-lg w-full h-36 md:h-48 object-cover" height={300} src={imgDummyProp} width={400} />
                        </div>
                        <div className="p-3">
                            <div className="flex items-center justify-between">
                                <h3 className="md:text-lg font-semibold">
                                    Villa Uma: A Modern Lux...
                                </h3>
                                <Image className="w-6 h-6" src={iconArrowRedirect} width={50} height={50} alt="icon" />
                            </div>
                            <p className="text-gray-500 text-sm">
                                Umalas, Indonesia
                            </p>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-1 md:space-x-4 mt-2">
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
                            <div className="flex items-end mt-4">
                                <span className="bg-primary rounded-md leading-none text-white px-2.5 py-1 font-semibold mr-1.5">
                                    $11,351
                                </span>
                                <span className="leading-none text-gray-400 text-sm line-through">
                                    $12,351
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Wishlist;