"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from 'react';
import Modal from 'react-minimal-modal'
import RecommendationCard from "@/components/RecommendationCard";
import FilterCard from "@/components/FilterCard";

import imgDummyBanner from "@/assets/png/dummy-banner.png";
import iconArrowDown from "@/assets/svg/arrow-down.svg";

export default function Home() {
  const [isOpenGuide, setIsOpenGuide] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [IsOpenPrices, setIsOpenPrices] = useState(false);
  const [IsOpenType, setIsOpenType] = useState(false);
  const [IsOpenDuration, setIsOpenDuration] = useState(false);
  const [IsOpenFacilities, setIsOpenFacilities] = useState(false);
  const [IsOpenBills, setIsOpenBills] = useState(false);

  const toggleCard = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto py-4 px-4 lg:px-0 relative">
        <Header />

        {/* ====================== Hero Banner ====================== */}
        <div className="py-2">
          <div className="relative bg-primary rounded-2xl w-full pb-28 md:pb-32 lg:pb-0 lg:h-[500px] p-10 flex items-center">
            <div>
              <h1 className="uppercase text-3xl md:text-7xl font-bold leading-none text-white">
                FIND YOUR <br />PERFECT RENTAL <br />PROPERTY
              </h1>
              <p className="text-sm md:text-xl text-white font-semibold mt-2 lg:mt-0">
                Discover the perfect property that suits your lifestyle. <br />
                Explore our curated listings and find your ideal property today!
              </p>
            </div>
            <div className="hidden lg:block absolute bottom-0 right-0">
              <Image
                className="rounded-2xl w-[700px]"
                src={imgDummyBanner}
                alt="Home Hero Image"
                width={1920}
                height={1080}
              />
            </div>
            <div className="z-50 absolute bottom-0 left-0 translate-y-[50%] w-full flex justify-center">
              <FilterCard toggleCard={toggleCard} />
            </div>
          </div>
        </div>

        {/* ====================== Recommendations ====================== */}
        <div className="pt-16 pb-3">
          <RecommendationCard category="Short" />
          <RecommendationCard category="Mid" />
          <RecommendationCard category="Long" />
        </div>

        {/* ====================== Guide ====================== */}
        <div className="bg-soft rounded-lg py-12 text-center my-10">
          <div>
            <p>Discover Keys with Our Fun<br className="block md:hidden" /> Guide to Property Deals</p>
          </div>
          <div className="mt-2">
            <p className="text-4xl font-bold">Your Guide to Property Deals</p>
          </div>
          <div className="mt-4">
            <button onClick={() => { setIsOpenGuide(true) }} className="px-6 py-2 rounded-full bg-second text-white text-sm hover:bg-second/85 duration-300 transition-all">See Guide Detail</button>
          </div>
        </div>
        <Modal width={1250} blur animationDuration={200} open={isOpenGuide} hideIcon onOpenChange={setIsOpenGuide}>
          <div className="p-5">
            <p className="font-bold text-4xl">Your Guide to Property Deals</p>
            <p className="text-sm mt-2 font-semibold text-justify md:text-start">Welcome to our all-inclusive guide to finding your perfect property! Whether you're seeking <br className="hidden md:block" /> a long-term home, mid-term, a short-term retreat, or ready to make a purchase, we're here<br className="hidden md:block" /> to support you through every step of the journey.</p>
            <p className="mt-5 text-lg font-bold underline">Rent Guide</p>
            <div className="mt-1 grid grid-cols-2 md:grid-cols-5 gap-y-2 md:gap-y-0 gap-x-2 md:gap-x-4">
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">1</p>
                <p className="font-bold mt-2">Find Your Property</p>
                <p className="mt-2 text-sm">Browse a variety of properties to find the perfect match for your needs.</p>
              </div>
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">2</p>
                <p className="font-bold mt-2">Explore the Details</p>
                <p className="mt-2 text-sm">Review property details and ensure it aligns with your preferences.</p>
              </div>
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">3</p>
                <p className="font-bold mt-2">Make Your Payment</p>
                <p className="mt-2 text-sm">Secure your booking easily with your preferred payment option.</p>
              </div>
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">4</p>
                <p className="font-bold mt-2">Head to Your Property</p>
                <p className="mt-2 text-sm">Go to your rental property and enjoy a hassle-free check-in.</p>
              </div>
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">5</p>
                <p className="font-bold mt-2">Enjoy Your Stay</p>
                <p className="mt-2 text-sm">Relax and make the most of your rental experience!</p>
              </div>
            </div>
            <p className="mt-5 text-lg font-bold underline">Buy Guide</p>
            <div className="mt-1 grid grid-cols-2 md:grid-cols-5 gap-y-2 md:gap-y-0 gap-x-2 md:gap-x-4">
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">1</p>
                <p className="font-bold mt-2">Find Your Property</p>
                <p className="mt-2 text-sm">Browse a variety of properties to find the perfect match for your needs.</p>
              </div>
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">2</p>
                <p className="font-bold mt-2">Explore the Details</p>
                <p className="mt-2 text-sm">Review property details and ensure it aligns with your preferences.</p>
              </div>
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">3</p>
                <p className="font-bold mt-2">Connect for Further Info</p>
                <p className="mt-2 text-sm">Discuss the details of your desired property with our team for personalized guidance.</p>
              </div>
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">4</p>
                <p className="font-bold mt-2">Plan Your Next Steps</p>
                <p className="mt-2 text-sm">Work with Suaka to finalize the paperwork and secure your dream home.</p>
              </div>
              <div className="rounded-xl bg-soft p-4">
                <p className="text-6xl font-black">5</p>
                <p className="font-bold mt-2">Move to Your New Home</p>
                <p className="mt-2 text-sm">Get ready to enjoy your new house and settle into your ideal space!</p>
              </div>
            </div>
          </div>
        </Modal>
        <div
          className={`shadow-card-filter fixed h-[350px] z-50 bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg border-2 p-4 transition-transform duration-300 transform ${isVisible ? 'translate-y-0' : 'translate-y-full'}`}>
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
        </div >
      </div >
      <Footer />
    </div >
  );
}
