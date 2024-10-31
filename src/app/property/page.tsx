"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import FilterCard from "@/components/FilterCard";
import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

import iconLove from "@/assets/svg/love.svg";
import iconArrowRedirect from "@/assets/svg/arrow-redirect.svg";
import iconBath from "@/assets/svg/bathtub.svg";
import iconBed from "@/assets/svg/bed.svg";
import iconBills from "@/assets/svg/bills.svg";
import iconBuilding from "@/assets/svg/building.svg";
import imgDummyProp from "@/assets/png/dummy-prop.png";

const PropertyPageContent = () => {
  const [PropertyFilter, setPropertyFilter] = useState("To Rent");
  const [isVisible, setIsVisible] = useState(false);
  const searchParams = useSearchParams();
  const category = searchParams.get('category');

  const toggleCard = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (category) {
      if (category === 'rent') {
        setPropertyFilter("To Rent");
      } else if (category === 'sale') {
        setPropertyFilter("For Sale");
      }
    } else {
      setPropertyFilter("To Rent");
    }
  }, [PropertyFilter, category]);

  return (
    <div>
      <div className="max-w-7xl mx-auto py-4">
        <Header />

        <div className="mt-10 z-50 relative">
          <h1 className="text-3xl font-semibold text-center">Find Your Perfect Property Deals</h1>
          <div className="mt-14 w-full flex justify-center">
            <FilterCard propertyFilter={PropertyFilter} toggleCard={toggleCard} />
          </div>
        </div>

        {/* ====================== Recommendations ====================== */}
        <div className="pt-10 pb-3">
          <p className="text-gray-400">Available in over 1,000 places</p>

          <div className="grid grid-cols-4 gap-4 mt-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:scale-[1.015] duration-300 transition-all overflow-hidden">
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
                    <span className="leading-none text-gray-400 text-sm line-through">
                      $12,351
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center w-full my-6">
            <div className="space-x-2 flex items-center justify-center">
              <button>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.2563 9.50724C5.91457 9.84892 5.91457 10.4038 6.2563 10.7455L11.5053 15.9937C11.847 16.3354 12.402 16.3354 12.7437 15.9937C13.0854 15.6521 13.0854 15.0972 12.7437 14.7555L8.11258 10.125L12.741 5.49452C13.0827 5.15284 13.0827 4.59794 12.741 4.25626C12.3992 3.91458 11.8443 3.91458 11.5025 4.25626L6.25356 9.5045L6.2563 9.50724Z" fill="#999999" />
                </svg>
              </button>

              <button className="underline font-bold">1</button>
              <button className="font-semibold">2</button>
              <button className="font-semibold">3</button>
              <button className="font-semibold">4</button>
              <button className="font-semibold">5</button>
              <button className="font-semibold">...</button>
              <button className="font-semibold">99</button>

              <button>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.7437 9.50724C14.0854 9.84892 14.0854 10.4038 13.7437 10.7455L8.49473 15.9937C8.153 16.3354 7.59803 16.3354 7.2563 15.9937C6.91457 15.6521 6.91457 15.0972 7.2563 14.7555L11.8874 10.125L7.25903 5.49452C6.9173 5.15284 6.9173 4.59794 7.25903 4.25626C7.60076 3.91458 8.15573 3.91458 8.49746 4.25626L13.7464 9.5045L13.7437 9.50724Z" fill="#232222" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PropertyPageContent />
    </Suspense>
  );
}