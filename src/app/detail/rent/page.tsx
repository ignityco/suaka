"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';
import { useRouter } from "next/navigation";
import Modal from 'react-minimal-modal';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions } from "@stripe/stripe-js";
import { BookingProvider } from "@/contexts/BookingContext";
import CheckoutForm from "@/components/payment/CheckoutForm";
import { handleEmailForm } from "@/app/actions";

import imgDummyP1 from "@/assets/png/dummy-p-1.webp";
import imgDummyP2 from "@/assets/png/dummy-p-2.jpeg";
import imgDummyP3 from "@/assets/png/dummy-p-3.webp";
import imgDummyP4 from "@/assets/png/dummy-p-4.webp";
import imgDummyP5 from "@/assets/png/dummy-p-5.webp";
// import iconCC from "@/assets/svg/credit-card.svg";
// import iconPaypal from "@/assets/svg/paypal.svg";
// import iconApplePay from "@/assets/svg/apple-pay.svg";
import iconWA from "@/assets/svg/whatsapp.svg";
import iconLove from "@/assets/svg/love.svg";
import iconShare from "@/assets/svg/share-link.svg";
import iconStar from "@/assets/svg/star.svg";
import iconBath from "@/assets/svg/bathtub.svg";
import iconBed from "@/assets/svg/bed.svg";
import iconBills from "@/assets/svg/bills.svg";
import iconPdf from "@/assets/svg/pdf.svg";
import iconArrowFac from "@/assets/svg/arrow-facilities.svg";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? '');

export default function Page() {
  const router = useRouter();
  const [StartDate, setStartDate] = useState(new Date());
  const [RentalPeriod, setRentalPeriod] = useState("1 Month");
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isPickerOpen, setIsPickerOpen] = useState(false);
  const datePickerRef = useRef<HTMLDivElement>(null);
  const [isOpenPayment, setIsOpenPayment] = useState(false);
  const [IsBills, setIsBills] = useState(true);
  const [IsConfirmed, setIsConfirmed] = useState(false);
  const [hasRun, setHasRun] = useState(false);
  const [Email, setEmail] = useState("");

  const [clientSecret, setClientSecret] = useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = useState("");
  const [confirmed, setConfirmed] = useState(false);

  const handleRadioChange = (value: any) => {
    setIsBills(value);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (datePickerRef.current && !datePickerRef.current.contains(event.target as Node)) {
      setIsPickerOpen(false);
    }
  };

  useEffect(() => {
    if (hasRun) {
      checkAndFetchPayment();
    }
    setHasRun(true);
  }, [hasRun]);

  const checkAndFetchPayment = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const existingClientSecret = await urlParams.get("payment_intent_client_secret");
    const emailData = localStorage.getItem('emailData');

    const data = {
      propertyName: 'Villa Uma: A Modern Luxury Escape w/Pool in Umalas',
      to: emailData as string,
    }

    const formData = new FormData();
    for (const key in data) {
      formData.append(key as keyof typeof data, data[key as keyof typeof data]);
    }

    if (existingClientSecret) {
      // If the payment intent client secret is present in the URL, we set it and confirm
      setClientSecret(existingClientSecret);
      setConfirmed(true);
      setIsConfirmed(true);
      handleEmailForm(formData);
    } else {
      // Only fetch a new payment intent if there is no existing client secret
      fetchPaymentIntent();
    }
  }

  const fetchPaymentIntent = async () => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: Email, items: [{ id: "xl-tshirt" }] }),
      });

      const data = await response.json();
      if (response.ok) {
        setClientSecret(data.clientSecret);
        setDpmCheckerLink(data.dpmCheckerLink);
      } else {
        console.error("Error fetching payment intent:", data.error);
      }
    } catch (error) {
      console.error("Fetch error:", error);
    }
  };

  const options: StripeElementsOptions = {
    clientSecret,
    appearance: {
      theme: 'stripe',
      variables: {
        colorPrimary: '#0c8ce9',
      },
    },
  };

  const villa = {
    id: 'prod_R6PegAngNkSMTR',
    name: 'Villa Uma: A Modern Luxury Escape w/Pool in Umalas',
    description: `Indulge in the luxury of Villa Uma, a stunning 4-bedroom retreat set in the serene surroundings of Umalas. This exquisite villa offers an ideal blend of contemporary design, comfort, and convenience, perfect for those looking to experience the best of Bali’s vibrant lifestyle.`,
    price: 1135100,
    discount: 1235100,
    billCosts: 150000
  };

  React.useEffect(() => {
    if (isPickerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isPickerOpen]);

  const formattedDate = selectedDate ? selectedDate.toLocaleDateString() : StartDate.toLocaleDateString();

  const formatDate = (date: any) => {
    return moment(date).format('DD MMMM YYYY');
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto py-4 px-4 lg:px-0 relative">
        <Header />
        <div className="fixed bottom-0 right-0 m-5 z-50 rounded-full">
          <a href="#reserve" className="lg:hidden bg-second text-white border border-second rounded-full px-6 py-1 font-semibold flex items-center justify-center mb-2 space-x-2 w-full"><span>Reserve</span></a>
          <button onClick={() => { }} className="bg-second text-white border border-second rounded-full px-6 py-1 font-semibold flex items-center space-x-2"><Image className="w-5 h-5" src={iconWA} width={50} height={50} alt="" /><span>Free Visit</span></button>
        </div>
        <div>
          <button onClick={() => { router.back() }} className="flex items-center">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.2563 9.50724C5.91457 9.84892 5.91457 10.4038 6.2563 10.7455L11.5053 15.9937C11.847 16.3354 12.402 16.3354 12.7437 15.9937C13.0854 15.6521 13.0854 15.0972 12.7437 14.7555L8.11258 10.125L12.741 5.49452C13.0827 5.15284 13.0827 4.59794 12.741 4.25626C12.3992 3.91458 11.8443 3.91458 11.5025 4.25626L6.25356 9.5045L6.2563 9.50724Z" fill="#000000" />
            </svg>
            <span className="border-b border-primary">Back</span>
          </button>
        </div>
        <div className="mt-4 mb-10">
          <div className="md:grid md:grid-cols-12 gap-x-4 space-y-2 md:space-y-0">
            <div className="md:col-span-8">
              <div className="relative">
                <Image className="rounded-xl h-[250px] lg:h-[425px] object-cover" src={imgDummyP1} width={1500} height={1500} alt="" />
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
            <div className="md:col-span-4">
              <div className="grid grid-cols-2 gap-2 md:gap-4 h-full">
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
          <div className="lg:grid lg:grid-cols-12 gap-x-4 mt-4">
            <div className="lg:col-span-8">
              <div className="flex items-center justify-between">
                <p className="text-lg md:text-xl">Villa Uma: A Modern Luxury Escape w/Pool in Umalas</p>
                <button className="min-w-fit rounded-md bg-gray-300 text-gray-900 text-sm font-semibold flex items-center space-x-2 py-1.5 px-3">
                  <Image className="w-4 h-4" src={iconShare} width={50} height={50} alt="" />
                  <span className="leading-none">Share</span>
                </button>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.21875 16.5625V7.10938C4.21875 5.72297 4.21875 5.02977 4.50277 4.50666C4.71897 4.10847 5.04597 3.78147 5.44416 3.56527C5.96727 3.28125 6.66047 3.28125 8.04688 3.28125C9.43328 3.28125 10.1265 3.28125 10.6496 3.56527C11.0478 3.78147 11.3748 4.10847 11.591 4.50666C11.875 5.02977 11.875 5.72297 11.875 7.10938V16.5625V10.7031C11.875 10.0473 11.875 9.7193 11.995 9.46556C12.1187 9.20413 12.3291 8.99366 12.5906 8.87002C12.8443 8.75 13.1723 8.75 13.8281 8.75C14.484 8.75 14.812 8.75 15.0657 8.87002C15.3271 8.99366 15.5376 9.20413 15.6613 9.46556C15.7813 9.7193 15.7812 10.0473 15.7812 10.7031V16.5625" stroke="#999999" />
                    <path d="M9.84375 16.5625V14.375C9.84375 14.0846 9.84375 13.9395 9.82239 13.8183C9.71973 13.2361 9.26389 12.7803 8.68169 12.6776C8.56053 12.6563 8.41536 12.6562 8.125 12.6562C7.83464 12.6562 7.68947 12.6563 7.56831 12.6776C6.98611 12.7803 6.53027 13.2361 6.42761 13.8183C6.40625 13.9395 6.40625 14.0846 6.40625 14.375V16.5625" stroke="#999999" />
                    <path d="M17.1875 16.5625H2.8125M9.84375 8.125H6.40625M9.84375 6.25H6.40625M9.84375 10H6.40625" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                  <p className="text-sm text-gray-500 leading-none">Villa</p>
                </div>
                <div className="flex items-center space-x-1">
                  <Image className="w-4 h-4" src={iconStar} alt="" width={50} height={50} />
                  <p className="text-sm text-gray-500 leading-none">5.0 Review</p>
                </div>
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
              </div>
              <div className="flex items-center space-x-2 mt-4">
                <div className="flex items-center space-x-1">
                  <Image className="w-6 h-6" src={iconBills} alt="" width={50} height={50} />
                  <p className="text-sm font-semibold mt-1">Bills</p>
                </div>
                <div>
                  <button className="bg-red-500 py-1 px-2 font-semibold text-white rounded-md text-sm space-x-0.5 flex items-center">
                    <Image className="w-6 h-6" src={iconPdf} alt="" width={50} height={50} />
                    <span className="leading-none">Download</span>
                  </button>
                </div>
              </div>
              {/* </div> */}
              <div className="mt-4">
                <p className="text-justify">Indulge in the luxury of Villa Uma, a stunning 4-bedroom retreat set in the serene surroundings of Umalas. This exquisite villa offers an ideal blend of contemporary design, comfort, and convenience, perfect for those looking to experience the best of Bali’s vibrant lifestyle.</p>
                <button className="border-b border-gray-900 font-semibold mt-2">Show more</button>
              </div>
              <div className="mt-4">
                <p className="font-bold text-lg">Facilities</p>
                <div className="grid grid-cols-6">
                  <div className="col-span-6 md:col-span-3 mt-2 grid grid-cols-2 gap-x-2">
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>WiFi</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>Parking</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>Bathub</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>Pool</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>TV</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>Kitchen</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>AC</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>Balcony</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>Hair Dryer</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Image className="h-3 w-auto" src={iconArrowFac} width={50} height={50} alt="" />
                      <p>Refrigator</p>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold text-lg">See Where You'll Stay</p>
                <div className="hidden md:block mt-2 relative">
                  <iframe className="rounded-xl w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.4056201533!2d115.14187074748004!3d-8.67250475807647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1730036777727!5m2!1sid!2sid" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="block md:hidden mt-2 relative">
                  <iframe className="rounded-xl w-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126214.4056201533!2d115.14187074748004!3d-8.67250475807647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd2409b0e5e80db%3A0xe27334e8ccb9374a!2sDenpasar%2C%20Kota%20Denpasar%2C%20Bali!5e0!3m2!1sid!2sid!4v1730036777727!5m2!1sid!2sid" height="250" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-bold text-lg">Reviews</p>
                <div className="mt-2">
                  <div className="md:flex md:items-center md:space-x-4 space-y-4 md:space-y-0">
                    <div>
                      <button className="flex items-center space-x-1">
                        <svg className="text-[#FFDF2B]" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                        </svg>
                        <span className="text-gray-500 leading-none mt-0.5">5.0 Review</span>
                      </button>
                      <div className="w-full p-1 mt-1 rounded-full bg-[#FFDF2B]"></div>
                    </div>
                    <div>
                      <button className="flex items-center space-x-1">
                        <svg className="text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                        </svg>
                        <span className="text-gray-500 leading-none mt-0.5">4.0 Review</span>
                      </button>
                      <div className="w-full p-1 mt-1 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <button className="flex items-center space-x-1">
                        <svg className="text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                        </svg>
                        <span className="text-gray-500 leading-none mt-0.5">3.0 Review</span>
                      </button>
                      <div className="w-full p-1 mt-1 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <button className="flex items-center space-x-1">
                        <svg className="text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                        </svg>
                        <span className="text-gray-500 leading-none mt-0.5">2.0 Review</span>
                      </button>
                      <div className="w-full p-1 mt-1 rounded-full bg-gray-300"></div>
                    </div>
                    <div>
                      <button className="flex items-center space-x-1">
                        <svg className="text-gray-400" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                        </svg>
                        <span className="text-gray-500 leading-none mt-0.5">1.0 Review</span>
                      </button>
                      <div className="w-full p-1 mt-1 rounded-full bg-gray-300"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-5 md:mt-3">
                  <div className="grid md:grid-cols-3 gap-6">
                    {Array.from({ length: 6 }).map((_, index) => (
                      <div key={index} className="rounded-lg">
                        <div className="flex items-center mb-2">
                          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
                          <div className="ml-3">
                            <div className="text-sm font-semibold">Anonymous</div>
                            <div className="text-xs text-gray-500">1 month</div>
                          </div>
                          <div className="ml-auto flex items-center">
                            <svg className="text-[#FFDF2B]" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                            </svg>
                            <svg className="text-[#FFDF2B]" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                            </svg>
                            <svg className="text-[#FFDF2B]" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                            </svg>
                            <svg className="text-[#FFDF2B]" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                            </svg>
                            <svg className="text-[#FFDF2B]" width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" />
                            </svg>
                          </div>
                        </div>
                        <div className="flex space-x-1 mb-2">
                          <span className="bg-brown-soft text-white text-xs font-semibold px-2 py-1 rounded-full">Cleanliness</span>
                          <span className="bg-brown-soft text-white text-xs font-semibold px-2 py-1 rounded-full">Comfort</span>
                          <span className="bg-brown-soft text-white text-xs font-semibold px-2 py-1 rounded-full">Service</span>
                          <span className="bg-brown-soft text-white text-xs font-semibold px-2 py-1 rounded-full">2+</span>
                        </div>
                        <div className="text-sm text-gray-800">
                          great price for what's included in this stay, very sleek modern design. will definitely be coming back🙏 perfect for families and larger groups
                        </div>
                      </div>
                    ))}
                  </div>
                  <button className="border-b border-gray-900 font-semibold mt-3">See more reviews</button>
                </div>
              </div>
            </div>
            <div id="reserve" className="lg:col-span-4">
              <p className="lg:hidden mt-10 mb-2 text-xl font-bold">Reserve</p>
              <div className="bg-white border rounded-lg shadow-md p-3">
                <p className="font-semibold">Rental Period</p>
                <div className="flex items-center space-x-2 mt-2">
                  <button onClick={() => { setRentalPeriod("1 Month") }} className={`${RentalPeriod === "1 Month" ? "bg-second text-white" : "bg-white"} border border-second rounded-md px-2 py-1 font-semibold hover:bg-second hover:text-white duration-300 transition-all`}>1 Month</button>
                  <button onClick={() => { setRentalPeriod("3 Month") }} className={`${RentalPeriod === "3 Month" ? "bg-second text-white" : "bg-white"} border border-second rounded-md px-2 py-1 font-semibold hover:bg-second hover:text-white duration-300 transition-all`}>3 Month</button>
                  <button onClick={() => { setRentalPeriod("6 Month") }} className={`${RentalPeriod === "6 Month" ? "bg-second text-white" : "bg-white"} border border-second rounded-md px-2 py-1 font-semibold hover:bg-second hover:text-white duration-300 transition-all`}>6 Month</button>
                  <button onClick={() => { setRentalPeriod("12 Month") }} className={`${RentalPeriod === "12 Month" ? "bg-second text-white" : "bg-white"} border border-second rounded-md px-2 py-1 font-semibold hover:bg-second hover:text-white duration-300 transition-all`}>12 Month</button>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">Period Price (USD)</p>
                  <p className="font-semibold mt-1">
                    <span className="rounded-md leading-none text-primary text-xl font-bold mr-2">
                      {calculatePrice(RentalPeriod, villa)}
                    </span>
                    <span className="leading-none text-gray-400 line-through">
                      {calculateDiscountPrice(RentalPeriod, villa)}
                    </span>
                  </p>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">With bills</p>
                  <div>
                    <div className="flex items-center space-x-4">
                      <div className="mt-1 flex items-center">
                        <div className="inline-flex items-center">
                          <label className="flex items-center cursor-pointer relative">
                            <input
                              defaultChecked={IsBills} // Menyinkronkan dengan state
                              type="radio"
                              name="bills"
                              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                              id="checkYes"
                              onChange={() => handleRadioChange(true)}
                            />
                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </label>
                        </div>
                        <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => handleRadioChange(true)}>
                          <p>Yes</p>
                        </button>
                      </div>

                      <div className="mt-1 flex items-center">
                        <div className="inline-flex items-center">
                          <label className="flex items-center cursor-pointer relative">
                            <input
                              type="radio"
                              name="bills"
                              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                              id="checkNo"
                              onChange={() => handleRadioChange(false)}
                            />
                            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                              </svg>
                            </span>
                          </label>
                        </div>
                        <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => handleRadioChange(false)}>
                          <p>No</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  {IsBills &&
                    <div>
                      <p className="font-semibold">Bill Costs (USD)</p>
                      <span className="rounded-md leading-none text-gray-900 font-bold mr-2">
                        {new Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "USD",
                        }).format(villa.billCosts / 100)
                        }
                      </span>
                    </div>
                  }
                  <p className="font-semibold mt-2">Total (USD)</p>
                  <p className="font-semibold mt-1">
                    <span className="rounded-md leading-none text-primary text-xl font-bold mr-2">
                      {IsBills ? calculatePriceWBills(RentalPeriod, villa) : calculatePrice(RentalPeriod, villa)}
                    </span>
                  </p>
                </div>
              </div>
              <div className="bg-white border rounded-lg shadow-md p-3 mt-3">
                <div>
                  <p className="font-semibold">Start Date</p>
                  <div className="flex items-center justify-between">
                    <div className="relative inline-block">
                      <p>
                        {selectedDate ? formatDate(formattedDate) : formatDate(formattedDate)}
                      </p>
                      {isPickerOpen && (
                        <div ref={datePickerRef} className="absolute mt-2 z-10 bg-white border rounded shadow-md">
                          <DatePicker
                            dateFormat="yyyy/MM/dd"
                            selected={selectedDate}
                            minDate={new Date()}
                            onChange={(date) => {
                              setSelectedDate(date);
                              setIsPickerOpen(false);
                            }}
                            inline
                          />
                        </div>
                      )}
                    </div>

                    <button onClick={() => setIsPickerOpen(!isPickerOpen)} className="border-b border-gray-900 font-semibold">
                      Change
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">Guest</p>
                  <input className="mt-1 border border-gray-300 rounded px-4 py-2 w-full outline-none" id="guest" placeholder="1" type="number" />
                </div>
                <div className="mt-2">
                  <p className="font-semibold">Phone Number</p>
                  <div className="flex mt-1">
                    <input className="w-1/6 border-gray-300 outline-none px-4 py-2 border rounded-l" type="text" id="country-code" name="country-code" value="+62" readOnly />
                    <input className="w-5/6 border-gray-300 px-4 py-2 border-t border-b border-r rounded-r" type="text" id="phone-number" name="phone-number" />
                  </div>
                </div>
                <div className="mt-2">
                  <p className="font-semibold">Email</p>
                  <input onChange={(e) => { setEmail(e.target.value) }} value={Email} className="mt-1 border border-gray-300 rounded px-4 py-2 w-full outline-none" id="email" type="email" />
                </div>
                <div className="mt-5">
                  <button onClick={() => { 
                    setIsOpenPayment(true) ;
                      window.localStorage.setItem('emailData', Email);
                    }} className="bg-second text-white border border-second rounded-full px-4 py-1 font-semibold hover:bg-second/85 duration-300 transition-all">Submit</button>
                </div>
              </div>
              <Modal position="center" blur animationDuration={200} open={isOpenPayment} hideIcon onOpenChange={setIsOpenPayment}>
                <div>
                  <p>Payment</p>
                  <BookingProvider>
                    {clientSecret && (
                      <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm dpmCheckerLink={dpmCheckerLink} />
                      </Elements>
                    )}
                  </BookingProvider>
                </div>
              </Modal>

              {confirmed && IsConfirmed &&
                <div className="fixed left-0 bottom-0 m-5 w-full">
                  <div id="toast-default" className="flex items-center w-full max-w-xs p-4 text-white bg-primary rounded-lg shadow" role="alert">
                    <div className="inline-flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2286_9574)">
                          <path d="M11.8125 3.93799L5.6875 10.0627L2.625 7.00049" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_2286_9574">
                            <rect width="14" height="14" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                    <div className="ms-3 text-sm font-normal">See your Transaction History</div>
                    <button onClick={() => { router.push('/dashboard/profile'); }} type="button" className="text-white text-sm border-b border-white ms-auto -mx-1.5 -my-1.5 inline-flex items-center justify-center" data-dismiss-target="#toast-default" aria-label="Close">
                      <span>Check</span>
                    </button>
                  </div>
                </div>
              }

            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
}

const calculatePrice = (period: any, villa: any) => {
  let price = 0;
  switch (period) {
    case "1 Month":
      price = villa.price * 1;
      break;
    case "3 Month":
      price = villa.price * 3;
      break;
    case "6 Month":
      price = villa.price * 6;
      break;
    case "12 Month":
      price = villa.price * 12;
      break;
    default:
      price = 0;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};

const calculatePriceWBills = (period: any, villa: any) => {
  let price = 0;
  switch (period) {
    case "1 Month":
      price = villa.price * 1;
      break;
    case "3 Month":
      price = villa.price * 3;
      break;
    case "6 Month":
      price = villa.price * 6;
      break;
    case "12 Month":
      price = villa.price * 12;
      break;
    default:
      price = 0;
  }

  let totalPrice = price + villa.billCosts;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(totalPrice / 100);
};

const calculateDiscountPrice = (period: any, villa: any) => {
  let price = 0;
  switch (period) {
    case "1 Month":
      price = villa.discount * 1;
      break;
    case "3 Month":
      price = villa.discount * 3;
      break;
    case "6 Month":
      price = villa.discount * 6;
      break;
    case "12 Month":
      price = villa.discount * 12;
      break;
    default:
      price = 0;
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price / 100);
};
