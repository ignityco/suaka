"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import React, { useState } from 'react';
import Modal from 'react-minimal-modal'
import RecommendationCard from "@/components/RecommendationCard";
import FilterCard from "@/components/FilterCard";

import imgDummyBanner from "@/assets/png/dummy-banner.png";
import FloatingFilterCard from "@/components/FloatingFilterCard";

export default function Home() {
  const [isOpenGuide, setIsOpenGuide] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
          <div className="p-5 relative">
            <div className="absolute top-0 right-0 m-2">
              <button
                onClick={()=>{setIsOpenGuide(!isOpenGuide)}}
                className="text-black border-b border-gray-900">
                Close
              </button>
            </div>
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
        <FloatingFilterCard toggleCard={toggleCard} isVisible={isVisible} />
      </div >
      <Footer />
    </div >
  );
}
