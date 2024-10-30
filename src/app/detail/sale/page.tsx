"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";

import imgDummyP1 from "@/assets/png/dummy-p-1.webp";
import imgDummyP2 from "@/assets/png/dummy-p-2.jpeg";
import imgDummyP3 from "@/assets/png/dummy-p-3.webp";
import imgDummyP4 from "@/assets/png/dummy-p-4.webp";
import imgDummyP5 from "@/assets/png/dummy-p-5.webp";
import iconLove from "@/assets/svg/love.svg";
import iconShare from "@/assets/svg/share-link.svg";
import iconBath from "@/assets/svg/bathtub.svg";
import iconBed from "@/assets/svg/bed.svg";
import iconArrowFac from "@/assets/svg/arrow-facilities.svg";

export default function Page() {
  const router = useRouter();

  return (
    <div>
      <div className="max-w-7xl mx-auto py-4 relative">
        <Header />
        <div>
          <button onClick={() => { router.back() }} className="flex items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.2563 9.50724C5.91457 9.84892 5.91457 10.4038 6.2563 10.7455L11.5053 15.9937C11.847 16.3354 12.402 16.3354 12.7437 15.9937C13.0854 15.6521 13.0854 15.0972 12.7437 14.7555L8.11258 10.125L12.741 5.49452C13.0827 5.15284 13.0827 4.59794 12.741 4.25626C12.3992 3.91458 11.8443 3.91458 11.5025 4.25626L6.25356 9.5045L6.2563 9.50724Z" fill="#000000" />
            </svg>
            <span className="border-b border-primary">Back</span>
          </button>
        </div>
        <div className="mt-4 mb-10">
          <div className="grid grid-cols-12 gap-x-4">
            <div className="col-span-8">
              <div className="relative">
                <Image className="rounded-xl h-[425px] object-cover" src={imgDummyP1} width={1500} height={1500} alt="" />
                <div className="absolute top-0 left-0">
                  <button className="bg-white p-1 rounded-full m-2.5">
                    <Image className="w-[30px] h-[30px]" src={iconLove} width={50} height={50} alt="" />
                  </button>
                </div>
                <div className="absolute top-0 right-0">
                  <div className="bg-brown-soft px-3 py-1 rounded-full m-2.5 flex items-center">
                    <svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M10.507 4C8.02817 4 6 6.10329 6 8.65728C6 10.6854 8.70423 14.216 9.9061 15.7183C10.2066 16.0939 10.7324 16.0939 11.0329 15.7183C12.2347 14.216 14.939 10.6103 14.939 8.65728C15.0141 6.10329 12.9859 4 10.507 4ZM10.507 10.0094C9.68075 10.0094 9.00469 9.33333 9.00469 8.50704C9.00469 7.68075 9.68075 7.00469 10.507 7.00469C11.3333 7.00469 12.0094 7.68075 12.0094 8.50704C12.0094 9.33333 11.3333 10.0094 10.507 10.0094Z" stroke="#FFFFFF" stroke-miterlimit="10" />
                    </svg>
                    <p className="text-sm text-white">Umalas, Indonesia</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="grid grid-cols-2 gap-4 h-full">
                <div>
                  <Image className="rounded-xl h-full object-cover" src={imgDummyP2} width={500} height={500} alt="" />
                </div>
                <div>
                  <Image className="rounded-xl h-full object-cover" src={imgDummyP5} width={500} height={500} alt="" />
                </div>
                <div>
                  <Image className="rounded-xl h-full object-cover" src={imgDummyP4} width={500} height={500} alt="" />
                </div>
                <button className="relative group">
                  <Image className="rounded-xl h-full object-cover" src={imgDummyP3} width={500} height={500} alt="" />
                  <div className="bg-black/50 group-hover:bg-black/60 duration-300 transition-all w-full h-full absolute top-0 left-0 rounded-xl flex items-center justify-center">
                    <p className="text-white group-hover:scale-105 duration-300 transition-all">Show more photos</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-x-4 mt-4">
            <div className="col-span-8">
              <div className="flex items-center justify-between">
                <p className="text-xl">Villa Uma: A Modern Luxury Escape w/Pool in Umalas</p>
                <button className="rounded-md bg-gray-300 text-gray-900 text-sm font-semibold flex items-center space-x-2 py-1.5 px-3">
                  <Image className="w-4 h-4" src={iconShare} width={50} height={50} alt="" />
                  <span className="leading-none">Share</span>
                </button>
              </div>
              {/* <div className="flex items-center justify-between space-x-4"> */}
              <div className="flex items-center space-x-4 mt-4">
                <div>
                  <Image className="w-6 h-6" src={iconBed} alt="" width={50} height={50} />
                  <p className="text-sm font-semibold mt-1">4 Bedroom</p>
                </div>
                <div>
                  <Image className="w-6 h-6" src={iconBath} alt="" width={50} height={50} />
                  <p className="text-sm font-semibold mt-1">2 Bathroom</p>
                </div>
                <div>
                  <p className="text-sm font-black mt-1">LA</p>
                  <p className="text-sm font-semibold mt-1">250 sqm</p>
                </div>
                <div>
                  <p className="text-sm font-black mt-1">BS</p>
                  <p className="text-sm font-semibold mt-1">180 sqm</p>
                </div>
              </div>
              {/* </div> */}
              <div className="mt-4">
                <p className="text-justify">Indulge in the luxury of Villa Uma, a stunning 4-bedroom retreat set in the serene surroundings of Umalas. This exquisite villa offers an ideal blend of contemporary design, comfort, and convenience, perfect for those looking to experience the best of Bali’s vibrant lifestyle.</p>
                <button className="border-b border-gray-900 font-semibold mt-2">Show more</button>
              </div>
              <div className="mt-4">
                <div className="flex space-x-32">
                  <div>
                    <p className="font-bold text-lg">Amenities</p>
                    <div className="mt-2">
                      <div className="flex items-center space-x-2">
                        <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                        <p>Parking</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                        <p>Pool</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                        <p>Balcony</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Nearby</p>
                    <div className="mt-2">
                      <div className="flex items-center space-x-2">
                        <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                        <p>Shoping Mall</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                        <p>Fitness Center</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                        <p>Foodhall</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                        <p>Commercial Area</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                        <p>Balcony</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold text-lg">Property Location</p>
                <div className="mt-2 relative">
                  <iframe className="rounded-xl w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.4056201533!2d115.14187074748004!3d-8.67250475807647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1730036777727!5m2!1sid!2sid" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="bg-white border rounded-lg shadow-md p-3">
                <div>
                  <p className="font-semibold">Sale Price (USD)</p>
                  <p className="font-semibold mt-1">
                    <span className="rounded-md leading-none text-primary text-xl font-bold mr-2">
                      $1,351,512
                    </span>
                  </p>
                  <div className="mt-2">
                    <p className="font-semibold">Contact</p>
                    <div className="flex items-center w-full space-x-2">
                      <button className="border rounded-md border-gray-900 p-2 w-full flex items-center space-x-1 justify-center">
                        <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_2079_66)">
                            <path d="M6.74158 0.960842C6.42678 0.234279 5.59686 -0.15244 4.80373 0.0545917L1.20604 0.992092C0.494682 1.17959 0 1.79678 0 2.4999C0 12.164 8.2011 19.9999 18.3155 19.9999C19.0514 19.9999 19.6973 19.5272 19.8936 18.8476L20.8748 15.4101C21.0915 14.6522 20.6867 13.8593 19.9263 13.5585L16.0015 11.996C15.3351 11.7304 14.5625 11.914 14.1087 12.4491L12.457 14.3749C9.57885 13.0741 7.24853 10.8476 5.88713 8.09756L7.90265 6.52334C8.46275 6.08584 8.65489 5.35147 8.37689 4.71475L6.74158 0.964748V0.960842Z" fill="black" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2079_66">
                              <rect width="20.932" height="20" fill="black" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Call</span>
                      </button>
                      <button className="bg-primary rounded-md p-2 text-white w-full flex items-center space-x-1 justify-center">
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17.2913 14.5837C17.083 14.4795 15.7288 13.8545 15.5205 13.7503C15.3122 13.6462 15.1038 13.6462 14.8955 13.8545C14.6872 14.0628 14.2705 14.6878 14.0622 14.8962C13.958 15.1045 13.7497 15.1045 13.5413 15.0003C12.8122 14.6878 12.083 14.2712 11.458 13.7503C10.9372 13.2295 10.4163 12.6045 9.99967 11.9795C9.89551 11.7712 9.99967 11.5628 10.1038 11.4587C10.208 11.3545 10.3122 11.1462 10.5205 11.042C10.6247 10.9378 10.7288 10.7295 10.7288 10.6253C10.833 10.5212 10.833 10.3128 10.7288 10.2087C10.6247 10.1045 10.1038 8.85449 9.89551 8.33366C9.79134 7.60449 9.58301 7.60449 9.37467 7.60449H8.85384C8.64551 7.60449 8.33301 7.81283 8.22884 7.91699C7.60384 8.54199 7.29134 9.27116 7.29134 10.1045C7.39551 11.042 7.70801 11.9795 8.33301 12.8128C9.47884 14.4795 10.9372 15.8337 12.708 16.667C13.2288 16.8753 13.6455 17.0837 14.1663 17.1878C14.6872 17.3962 15.208 17.3962 15.833 17.292C16.5622 17.1878 17.1872 16.667 17.6038 16.042C17.8122 15.6253 17.8122 15.2087 17.708 14.792L17.2913 14.5837ZM19.8955 5.10449C15.833 1.04199 9.27051 1.04199 5.20801 5.10449C1.87467 8.43783 1.24967 13.542 3.54134 17.6045L2.08301 22.917L7.60384 21.4587C9.16634 22.292 10.833 22.7087 12.4997 22.7087C18.2288 22.7087 22.8122 18.1253 22.8122 12.3962C22.9163 9.68782 21.7705 7.08366 19.8955 5.10449ZM17.083 19.6878C15.7288 20.5212 14.1663 21.042 12.4997 21.042C10.9372 21.042 9.47884 20.6253 8.12467 19.8962L7.81217 19.6878L4.58301 20.5212L5.41634 17.3962L5.20801 17.0837C2.70801 12.917 3.95801 7.70866 8.02051 5.10449C12.083 2.50033 17.2913 3.85449 19.7913 7.81283C22.2913 11.8753 21.1455 17.1878 17.083 19.6878Z" fill="white" />
                        </svg>
                        <span>Whatsapp</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}
