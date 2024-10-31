"use client";

import { useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useRouter } from "next/navigation";
import History from "@/components/dashboard/History";
import Wishlist from "@/components/dashboard/Wishlist";
import Order from "@/components/dashboard/Order";
import MyProperty from "@/components/dashboard/MyProperty";

import imgUser from "@/assets/png/user.png";

export default function Page() {
  const [TabActive, setTabActive] = useState("Order");
  const router = useRouter();
  return (
    <div>
      <div className="max-w-7xl mx-auto py-4 px-4 lg:px-0 relative">
        <Header />

        <div className="mb-10">
          <nav aria-label="breadcrumb" className="w-full mt-6 mb-1">
            <ol className="flex w-full flex-wrap items-center">
              <li className="flex cursor-pointer items-center text-sm text-gray-900 transition-colors duration-300 hover:text-slate-800">
                <button onClick={() => { router.push("/") }}>Home</button>
                <span className="pointer-events-none mx-2 text-gray-900">
                  /
                </span>
              </li>
              <li className="flex cursor-pointer items-center text-sm text-gray-900 transition-colors duration-300 hover:text-slate-800">
                <button>Dashboard</button>
                <span className="pointer-events-none mx-2 text-gray-900">
                  /
                </span>
              </li>
              <li className="flex cursor-pointer items-center text-sm text-gray-900 transition-colors duration-300 hover:text-slate-800 border-b border-primary">
                <button onClick={() => { router.push("/dashboard/profile") }}>Profile</button>
              </li>
            </ol>
          </nav>

          <div className="mt-4">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-4 space-y-4">
              <div className="lg:col-span-3">
                <div className="bg-soft rounded-lg relative">
                  <div className="absolute left-0 top-0 m-2">
                    <div className="mb-2 text-xs bg-white p-2 shadow-md rounded-lg">
                      <p className="text-gray-400">User ID</p>
                      <p>1827641203</p>
                    </div>
                  </div>
                  <svg className="rounded-b pt-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
                    <path fill="#1A501A" fill-opacity="1" d="M0,192L30,176C60,160,120,128,180,133.3C240,139,300,181,360,170.7C420,160,480,96,540,69.3C600,43,660,53,720,74.7C780,96,840,128,900,122.7C960,117,1020,75,1080,90.7C1140,107,1200,181,1260,192C1320,203,1380,149,1410,122.7L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"></path>
                  </svg>
                  <div className="absolute left-[50%] translate-y-[40%] bottom-0 translate-x-[-50%]">
                    <div className="relative">
                      <div className="bg-white p-1 rounded-full w-20 h-20">
                        <Image className="w-full h-full" src={imgUser} width={150} height={150} alt="user" />
                      </div>
                      <button className="absolute right-0 bottom-0 p-2 rounded-full bg-white shadow-md">
                        <svg className="w-3 h-3" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_2718_3101)">
                            <path d="M3.5 24H18.5C19.4297 23.9974 20.3204 23.626 20.9765 22.9674C21.6327 22.3087 22.0008 21.4167 22 20.487V12.95C22 12.6848 21.8946 12.4304 21.7071 12.2429C21.5196 12.0554 21.2652 11.95 21 11.95C20.7348 11.95 20.4804 12.0554 20.2929 12.2429C20.1054 12.4304 20 12.6848 20 12.95V20.487C20.0013 20.8864 19.8441 21.2701 19.5629 21.5537C19.2817 21.8374 18.8994 21.9979 18.5 22H3.5C3.10057 21.9979 2.7183 21.8374 2.43708 21.5537C2.15587 21.2701 1.99867 20.8864 2 20.487V5.513C1.99867 5.11357 2.15587 4.72993 2.43708 4.44627C2.7183 4.16262 3.10057 4.00212 3.5 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H3.5C2.57031 2.00265 1.67964 2.37403 1.02346 3.03265C0.367281 3.69126 -0.000797091 4.5833 1.29611e-06 5.513V20.487C-0.000797091 21.4167 0.367281 22.3087 1.02346 22.9674C1.67964 23.626 2.57031 23.9974 3.5 24Z" fill="gray" />
                            <path d="M9.45547 10.5441L8.66647 14.1581C8.63076 14.322 8.63686 14.4923 8.68422 14.6532C8.73158 14.8142 8.81867 14.9606 8.93747 15.0791C9.05791 15.1946 9.20441 15.2793 9.36456 15.3261C9.52472 15.373 9.6938 15.3805 9.85747 15.3481L13.4635 14.5571C13.6507 14.516 13.8222 14.4219 13.9575 14.2861L23.0715 5.1721C23.3501 4.89351 23.5711 4.56277 23.7219 4.19876C23.8727 3.83475 23.9503 3.4446 23.9503 3.0506C23.9503 2.65659 23.8727 2.26644 23.7219 1.90243C23.5711 1.53842 23.3501 1.20768 23.0715 0.929096C22.5003 0.383232 21.7406 0.0786133 20.9505 0.0786133C20.1604 0.0786133 19.4007 0.383232 18.8295 0.929096L9.72947 10.0521C9.59289 10.1865 9.49779 10.3572 9.45547 10.5441ZM20.2435 2.3441C20.4337 2.16184 20.687 2.06009 20.9505 2.06009C21.2139 2.06009 21.4672 2.16184 21.6575 2.3441C21.8425 2.53272 21.9461 2.78639 21.9461 3.0506C21.9461 3.3148 21.8425 3.56847 21.6575 3.7571L20.9505 4.4641L19.5365 3.0501L20.2435 2.3441ZM11.3435 11.2581L18.1175 4.4671L19.5175 5.8741L12.7405 12.6671L10.9455 13.0611L11.3435 11.2581Z" fill="gray" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2718_3101">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-12 mx-auto bg-white rounded-lg shadow-md p-4">
                  <div className="mb-2">
                    <p className="text-gray-400">Name</p>
                    <div className="flex items-center justify-between">
                      <p>John James Doe</p>
                      <button>
                        <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_2718_3101)">
                            <path d="M3.5 24H18.5C19.4297 23.9974 20.3204 23.626 20.9765 22.9674C21.6327 22.3087 22.0008 21.4167 22 20.487V12.95C22 12.6848 21.8946 12.4304 21.7071 12.2429C21.5196 12.0554 21.2652 11.95 21 11.95C20.7348 11.95 20.4804 12.0554 20.2929 12.2429C20.1054 12.4304 20 12.6848 20 12.95V20.487C20.0013 20.8864 19.8441 21.2701 19.5629 21.5537C19.2817 21.8374 18.8994 21.9979 18.5 22H3.5C3.10057 21.9979 2.7183 21.8374 2.43708 21.5537C2.15587 21.2701 1.99867 20.8864 2 20.487V5.513C1.99867 5.11357 2.15587 4.72993 2.43708 4.44627C2.7183 4.16262 3.10057 4.00212 3.5 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H3.5C2.57031 2.00265 1.67964 2.37403 1.02346 3.03265C0.367281 3.69126 -0.000797091 4.5833 1.29611e-06 5.513V20.487C-0.000797091 21.4167 0.367281 22.3087 1.02346 22.9674C1.67964 23.626 2.57031 23.9974 3.5 24Z" fill="gray" />
                            <path d="M9.45547 10.5441L8.66647 14.1581C8.63076 14.322 8.63686 14.4923 8.68422 14.6532C8.73158 14.8142 8.81867 14.9606 8.93747 15.0791C9.05791 15.1946 9.20441 15.2793 9.36456 15.3261C9.52472 15.373 9.6938 15.3805 9.85747 15.3481L13.4635 14.5571C13.6507 14.516 13.8222 14.4219 13.9575 14.2861L23.0715 5.1721C23.3501 4.89351 23.5711 4.56277 23.7219 4.19876C23.8727 3.83475 23.9503 3.4446 23.9503 3.0506C23.9503 2.65659 23.8727 2.26644 23.7219 1.90243C23.5711 1.53842 23.3501 1.20768 23.0715 0.929096C22.5003 0.383232 21.7406 0.0786133 20.9505 0.0786133C20.1604 0.0786133 19.4007 0.383232 18.8295 0.929096L9.72947 10.0521C9.59289 10.1865 9.49779 10.3572 9.45547 10.5441ZM20.2435 2.3441C20.4337 2.16184 20.687 2.06009 20.9505 2.06009C21.2139 2.06009 21.4672 2.16184 21.6575 2.3441C21.8425 2.53272 21.9461 2.78639 21.9461 3.0506C21.9461 3.3148 21.8425 3.56847 21.6575 3.7571L20.9505 4.4641L19.5365 3.0501L20.2435 2.3441ZM11.3435 11.2581L18.1175 4.4671L19.5175 5.8741L12.7405 12.6671L10.9455 13.0611L11.3435 11.2581Z" fill="gray" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2718_3101">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <hr className="mb-2" />
                  <div className="mb-2">
                    <p className="text-gray-400">Phone Number</p>
                    <div className="flex items-center justify-between">
                      <p>+62 514-1273-1231</p>
                      <button>
                        <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_2718_3101)">
                            <path d="M3.5 24H18.5C19.4297 23.9974 20.3204 23.626 20.9765 22.9674C21.6327 22.3087 22.0008 21.4167 22 20.487V12.95C22 12.6848 21.8946 12.4304 21.7071 12.2429C21.5196 12.0554 21.2652 11.95 21 11.95C20.7348 11.95 20.4804 12.0554 20.2929 12.2429C20.1054 12.4304 20 12.6848 20 12.95V20.487C20.0013 20.8864 19.8441 21.2701 19.5629 21.5537C19.2817 21.8374 18.8994 21.9979 18.5 22H3.5C3.10057 21.9979 2.7183 21.8374 2.43708 21.5537C2.15587 21.2701 1.99867 20.8864 2 20.487V5.513C1.99867 5.11357 2.15587 4.72993 2.43708 4.44627C2.7183 4.16262 3.10057 4.00212 3.5 4H11C11.2652 4 11.5196 3.89464 11.7071 3.70711C11.8946 3.51957 12 3.26522 12 3C12 2.73478 11.8946 2.48043 11.7071 2.29289C11.5196 2.10536 11.2652 2 11 2H3.5C2.57031 2.00265 1.67964 2.37403 1.02346 3.03265C0.367281 3.69126 -0.000797091 4.5833 1.29611e-06 5.513V20.487C-0.000797091 21.4167 0.367281 22.3087 1.02346 22.9674C1.67964 23.626 2.57031 23.9974 3.5 24Z" fill="gray" />
                            <path d="M9.45547 10.5441L8.66647 14.1581C8.63076 14.322 8.63686 14.4923 8.68422 14.6532C8.73158 14.8142 8.81867 14.9606 8.93747 15.0791C9.05791 15.1946 9.20441 15.2793 9.36456 15.3261C9.52472 15.373 9.6938 15.3805 9.85747 15.3481L13.4635 14.5571C13.6507 14.516 13.8222 14.4219 13.9575 14.2861L23.0715 5.1721C23.3501 4.89351 23.5711 4.56277 23.7219 4.19876C23.8727 3.83475 23.9503 3.4446 23.9503 3.0506C23.9503 2.65659 23.8727 2.26644 23.7219 1.90243C23.5711 1.53842 23.3501 1.20768 23.0715 0.929096C22.5003 0.383232 21.7406 0.0786133 20.9505 0.0786133C20.1604 0.0786133 19.4007 0.383232 18.8295 0.929096L9.72947 10.0521C9.59289 10.1865 9.49779 10.3572 9.45547 10.5441ZM20.2435 2.3441C20.4337 2.16184 20.687 2.06009 20.9505 2.06009C21.2139 2.06009 21.4672 2.16184 21.6575 2.3441C21.8425 2.53272 21.9461 2.78639 21.9461 3.0506C21.9461 3.3148 21.8425 3.56847 21.6575 3.7571L20.9505 4.4641L19.5365 3.0501L20.2435 2.3441ZM11.3435 11.2581L18.1175 4.4671L19.5175 5.8741L12.7405 12.6671L10.9455 13.0611L11.3435 11.2581Z" fill="gray" />
                          </g>
                          <defs>
                            <clipPath id="clip0_2718_3101">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-9">
                <div className="md:flex md:justify-between md:items-start mb-4">
                  <div className="flex items-center bg-white shadow-lg rounded-md p-1">
                    <button onClick={() => { setTabActive("Order") }} className={`${TabActive === "Order" ? "bg-second text-white" : "text-gray-700 "} px-4 py-2 rounded-lg`}>
                      Order
                    </button>
                    <button onClick={() => { setTabActive("My Property") }} className={`${TabActive === "My Property" ? "bg-second text-white" : "text-gray-700 "} px-4 py-2 rounded-lg`}>
                      My Property
                    </button>
                    <button onClick={() => { setTabActive("Wishlist") }} className={`${TabActive === "Wishlist" ? "bg-second text-white" : "text-gray-700 "} px-4 py-2 rounded-lg`}>
                      Wishlist
                    </button>
                    <button onClick={() => { setTabActive("History") }} className={`${TabActive === "History" ? "bg-second text-white" : "text-gray-700 "} relative px-4 py-2 rounded-lg`}>
                      <div className="absolute top-0 right-0 m-1 w-2 h-2 rounded-full bg-green-500"></div>
                      <span>History</span>
                    </button>
                  </div>
                  <div className="flex items-center space-x-1 bg-white shadow-md rounded-lg p-2 mt-2 md:mt-0">
                    <svg className="w-5 h-5" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.62447 14.9999C5.00921 16.3866 6.85324 17.2191 8.80917 17.3405C10.7651 17.4618 12.6979 16.8638 14.2435 15.6589L19.5615 20.9769C19.7501 21.1591 20.0027 21.2599 20.2649 21.2576C20.5271 21.2553 20.7779 21.1502 20.9633 20.9648C21.1487 20.7793 21.2539 20.5285 21.2561 20.2663C21.2584 20.0041 21.1576 19.7515 20.9755 19.5629L15.6575 14.2449C16.9158 12.6301 17.5107 10.5961 17.3209 8.5577C17.131 6.51933 16.1708 4.63013 14.636 3.2754C13.1011 1.92067 11.1073 1.20245 9.06114 1.26721C7.01496 1.33198 5.07056 2.17485 3.62447 3.62393C2.87727 4.37076 2.28454 5.25748 1.88013 6.23345C1.47573 7.20942 1.26758 8.2555 1.26758 9.31193C1.26758 10.3684 1.47573 11.4145 1.88013 12.3904C2.28454 13.3664 2.87727 14.2531 3.62447 14.9999ZM5.03847 5.03993C6.02705 4.05138 7.3278 3.43618 8.7191 3.29913C10.1104 3.16209 11.5062 3.51168 12.6686 4.28836C13.8311 5.06503 14.6883 6.22073 15.0942 7.55855C15.5001 8.89637 15.4296 10.3335 14.8946 11.6252C14.3597 12.9169 13.3935 13.9831 12.1606 14.6422C10.9277 15.3014 9.5044 15.5126 8.13319 15.24C6.76199 14.9674 5.52772 14.2279 4.64067 13.1473C3.75362 12.0667 3.26868 10.712 3.26847 9.31393C3.26573 8.51951 3.42078 7.73245 3.72462 6.99842C4.02846 6.26439 4.47505 5.598 5.03847 5.03793V5.03993Z" fill="black" />
                    </svg>
                    <input className="px-2 py-1 border-b w-64 focus:outline-none" placeholder="Search" type="text" />
                  </div>
                </div>
                {TabActive === "Wishlist" ?
                  <Wishlist />
                  :
                  TabActive === "Order" ?
                    <Order />
                    :
                    TabActive === "My Property" ?
                      <MyProperty />
                      :
                      <History />
                }
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
