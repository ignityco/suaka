"use client";

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import { Mousewheel } from 'swiper/modules';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import iconLove from "@/assets/svg/love.svg";
import iconArrowRedirect from "@/assets/svg/arrow-redirect.svg";
import iconBath from "@/assets/svg/bathtub.svg";
import iconBed from "@/assets/svg/bed.svg";
import iconBills from "@/assets/svg/bills.svg";
import iconBuilding from "@/assets/svg/building.svg";
import imgDummyProp from "@/assets/png/dummy-prop.png";

const RecommendationCard = ({ category }: { category: string }) => {
    const router = useRouter();

    return (
        <div className={`${category === "Long" ? "mb-0" : "mb-6"}`}>
            <p className="text-xl font-semibold">{category}-Term Recommendations</p>
            <p className="text-gray-400 mb-2 leading-none">Top choices for you</p>
            <div className="relative">
                <div className="w-[65px] h-full absolute top-0 right-0 z-50"></div>
                <Swiper
                    spaceBetween={12.5}
                    grabCursor={true}
                    mousewheel={true}
                    direction={'horizontal'}
                    slidesPerView={'auto'}
                    breakpoints={{
                        0: {
                            slidesPerView: 1.2,
                        },
                        768: {
                            slidesPerView: 2.5,
                        },
                        1024: {
                            slidesPerView: 4.2,
                        },
                    }}
                    className="mySwiper"
                    modules={[Mousewheel]}
                >

                    {Array.from({ length: 10 }).map((_, index) => (
                        <SwiperSlide className="pt-1 pb-3" key={index}>
                            <div onClick={() => { router.push('/detail/rent') }} className="bg-white rounded-lg shadow-md hover:scale-[1.015] duration-300 transition-all overflow-hidden">
                                <div className="px-3 pt-3 relative">
                                    <button className="cursor-pointer bg-white rounded-full p-1 absolute top-0 right-0 m-5">
                                        <Image className="w-6 h-6" src={iconLove} width={50} height={50} alt="icon" />
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
                                        <Image className="w-6 h-6" src={iconArrowRedirect} width={50} height={50} alt="icon" />
                                    </div>
                                    <p className="text-gray-500 text-sm">
                                        Umalas, Indonesia
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
                                    <div className="flex items-end mt-4">
                                        <span className="bg-primary rounded-md leading-none text-white px-2.5 py-1 font-semibold mr-1.5">
                                            $11,351
                                        </span>
                                        {/* <span className="rounded-md leading-none text-primary text-lg font-bold mr-2">
                                            $11,351
                                        </span> */}
                                        <span className="leading-none text-gray-400 text-sm line-through">
                                            $12,351
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default RecommendationCard;