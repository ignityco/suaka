"use client";

import Image from "next/image";
import Modal from 'react-minimal-modal';
import { useState } from "react";
import { useRouter } from "next/navigation";

const History = () => {
    const router = useRouter();
    const [IsOpenReview, setIsOpenReview] = useState(false);
    const [Rating, setRating] = useState(0);
    const [DescReview, setDescReview] = useState("");
    const [activeButtons, setActiveButtons] = useState<string[]>([]);
    const buttons = ['Service', 'Comfort', 'Cleanliness', 'Amenities', 'Location'];

    const toggleButton = (button: string) => {
        setActiveButtons((prev) =>
            prev.includes(button)
                ? prev.filter((activeButton) => activeButton !== button)
                : [...prev, button]
        );
    };

    const handleClick = (index: any) => {
        setRating(index + 1);
    };

    return (
        <div>
            <div className="text-gray-400 text-sm mb-4">
                7 Results Found
            </div>
            <div>
                <div className="flex items-center justify-center mb-4">
                    <hr className="border-gray-300 flex-grow" />
                    <span className="text-gray-500 text-sm mx-4">
                        Awaiting Review
                    </span>
                    <hr className="border-gray-300 flex-grow" />
                </div>
                <div className="space-y-2 mb-4">
                    {Array.from({ length: 2 }).map((_, index) => (
                        <div onClick={() => { setIsOpenReview(true) }} key={index} className="cursor-pointer hover:scale-[1.015] duration-300 transition-all md:flex md:items-center md:justify-between p-2 bg-white rounded-md shadow-md">
                            <div className="flex items-center">
                                <img alt="Image of a modern luxury villa with a pool in Umalas" className="w-20 h-12 object-cover rounded-md mr-4" height="100" src="https://storage.googleapis.com/a1aa/image/736u630ayToeUyb1VrDuSyOIcbfgJlYdebRynrQZnAgWXhWnA.jpg" width="100" />
                                <div>
                                    <div className="font-semibold text-sm text-gray-800">
                                        Villa Uma: A Modern Luxury Escape w...
                                    </div>
                                    <div className="mr-2 flex items-start space-x-1">
                                        <span className="mr-2 text-xs flex items-start space-x-1">
                                            <svg className="w-4 h-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.21875 16.5625V7.10938C4.21875 5.72297 4.21875 5.02977 4.50277 4.50666C4.71897 4.10847 5.04597 3.78147 5.44416 3.56527C5.96727 3.28125 6.66047 3.28125 8.04688 3.28125C9.43328 3.28125 10.1265 3.28125 10.6496 3.56527C11.0478 3.78147 11.3748 4.10847 11.591 4.50666C11.875 5.02977 11.875 5.72297 11.875 7.10938V16.5625V10.7031C11.875 10.0473 11.875 9.7193 11.995 9.46556C12.1187 9.20413 12.3291 8.99366 12.5906 8.87002C12.8443 8.75 13.1723 8.75 13.8281 8.75C14.484 8.75 14.812 8.75 15.0657 8.87002C15.3271 8.99366 15.5376 9.20413 15.6613 9.46556C15.7813 9.7193 15.7812 10.0473 15.7812 10.7031V16.5625" stroke="#999999" />
                                                <path d="M9.84375 16.5625V14.375C9.84375 14.0846 9.84375 13.9395 9.82239 13.8183C9.71973 13.2361 9.26389 12.7803 8.68169 12.6776C8.56053 12.6563 8.41536 12.6562 8.125 12.6562C7.83464 12.6562 7.68947 12.6563 7.56831 12.6776C6.98611 12.7803 6.53027 13.2361 6.42761 13.8183C6.40625 13.9395 6.40625 14.0846 6.40625 14.375V16.5625" stroke="#999999" />
                                                <path d="M17.1875 16.5625H2.8125M9.84375 8.125H6.40625M9.84375 6.25H6.40625M9.84375 10H6.40625" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>Villa</span>
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                            ID: INV-20241029-A1B2C3D4E5
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-2 md:ml-0 block md:hidden text-gray-500 text-sm">
                                    <span className="mr-2 flex items-center space-x-1">
                                        <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 16.9999C7.59334 16.9999 8.17336 16.824 8.66671 16.4943C9.16006 16.1647 9.54458 15.6962 9.77164 15.148C9.9987 14.5998 10.0581 13.9966 9.94236 13.4147C9.8266 12.8327 9.54088 12.2982 9.12132 11.8786C8.70176 11.4591 8.16721 11.1733 7.58527 11.0576C7.00333 10.9418 6.40013 11.0012 5.85195 11.2283C5.30377 11.4554 4.83524 11.8399 4.50559 12.3332C4.17595 12.8266 4 13.4066 4 13.9999C4 14.7956 4.31607 15.5586 4.87868 16.1213C5.44129 16.6839 6.20435 16.9999 7 16.9999ZM7 12.9999C7.19778 12.9999 7.39112 13.0586 7.55557 13.1685C7.72002 13.2783 7.84819 13.4345 7.92388 13.6172C7.99957 13.8 8.01937 14.001 7.98079 14.195C7.9422 14.389 7.84696 14.5672 7.70711 14.707C7.56725 14.8469 7.38907 14.9421 7.19509 14.9807C7.00111 15.0193 6.80004 14.9995 6.61732 14.9238C6.43459 14.8481 6.27841 14.7199 6.16853 14.5555C6.05865 14.3911 6 14.1977 6 13.9999C6 13.7347 6.10536 13.4804 6.29289 13.2928C6.48043 13.1053 6.73478 12.9999 7 12.9999ZM20 9.99993H12C11.7348 9.99993 11.4804 10.1053 11.2929 10.2928C11.1054 10.4804 11 10.7347 11 10.9999V17.9999H3V1.50008L2.5 1.5H2H1.5L1 1.50008V22.5H1.29289H2H2.70711H3V19.9999H21V22.5H21.2929H22H22.7071H23V12.9999C23 12.2043 22.6839 11.4412 22.1213 10.8786C21.5587 10.316 20.7956 9.99993 20 9.99993ZM21 17.9999H13V11.9999H20C20.2652 11.9999 20.5196 12.1053 20.7071 12.2928C20.8946 12.4804 21 12.7347 21 12.9999V17.9999Z" fill="#999999" />
                                        </svg>
                                        <span>4</span>
                                    </span>
                                    <span className="mr-2 flex items-center space-x-1">
                                        <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.85 11.4643H20.2V4.99911C20.2102 4.60899 20.1419 4.22079 19.9991 3.85739C19.8563 3.49399 19.6419 3.16275 19.3686 2.88323C19.0952 2.6037 18.7684 2.38154 18.4075 2.22984C18.0465 2.07815 17.6587 2 17.267 2C16.8753 2 16.4875 2.07815 16.1265 2.22984C15.7656 2.38154 15.4388 2.6037 15.1654 2.88323C14.8921 3.16275 14.6777 3.49399 14.5349 3.85739C14.3921 4.22079 14.3238 4.60899 14.334 4.99911V5.81598H12.816V7.0114H17.05V5.81598H15.534V4.99911C15.5261 4.76746 15.5651 4.5366 15.6486 4.32027C15.7321 4.10395 15.8585 3.90658 16.0202 3.73993C16.1819 3.57327 16.3757 3.44074 16.5899 3.35023C16.804 3.25972 17.0343 3.21307 17.267 3.21307C17.4997 3.21307 17.73 3.25972 17.9442 3.35023C18.1583 3.44074 18.3521 3.57327 18.5138 3.73993C18.6755 3.90658 18.8019 4.10395 18.8854 4.32027C18.9689 4.5366 19.0079 4.76746 19 4.99911V8.78461H17.676V9.98003H19V11.4803C17.7973 11.5116 16.5939 11.4529 15.4 11.305C14.124 11.1237 12.71 10.7411 11.216 10.3367C8.99201 9.73896 6.69201 9.11535 4.63801 9.11535H2.00001V16.8856C1.9994 17.1618 2.03026 17.4372 2.09201 17.7064C2.26378 18.4781 2.67999 19.1743 3.27922 19.6923C3.87845 20.2103 4.62896 20.5227 5.42001 20.5834V22H6.62001V20.6053H17.38V22H18.58V20.5814C19.5117 20.5036 20.38 20.0802 21.0133 19.3951C21.6467 18.7099 21.9988 17.813 22 16.8816V11.4643H20.85ZM20.8 16.8816C20.8008 17.2132 20.7359 17.5417 20.6092 17.8482C20.4824 18.1548 20.2962 18.4335 20.0612 18.6683C19.8262 18.9032 19.5471 19.0895 19.2397 19.2168C18.9324 19.344 18.6028 19.4097 18.27 19.4099H5.73001C5.15586 19.4068 4.59963 19.2105 4.15161 18.8528C3.70359 18.4951 3.39009 17.997 3.26201 17.4395C3.22022 17.2564 3.19942 17.0693 3.20001 16.8816V10.3068H4.64401C6.53801 10.3068 8.76001 10.9045 10.908 11.4883C12.44 11.9007 13.886 12.2852 15.236 12.4844C16.734 12.6976 18.236 12.6837 19.684 12.6657L20.8 12.6598V16.8816Z" stroke="#999999" stroke-width="0.75" />
                                        </svg>
                                        <span>2</span>
                                    </span>
                                </div>
                            </div>
                            <div className='md:hidden flex items-center justify-between mt-2 space-x-3'>
                                <div className="text-start">
                                    <div className="text-gray-500 text-sm text-start">
                                        Duration
                                    </div>
                                    <div className="font-semibold text-sm text-gray-800">
                                        3 Month
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-500 text-sm text-start">
                                        Pay with
                                    </div>
                                    <div className="font-semibold text-sm text-gray-800 text-start">
                                        Credit card or debit card
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-500 text-sm text-start">
                                        Start date
                                    </div>
                                    <div className="font-semibold text-sm text-gray-800 text-start">
                                        20 December 2024
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-500 text-sm text-start">
                                        Price
                                    </div>
                                    <div className="font-semibold text-sm text-gray-800 text-lg">
                                        $11,351
                                    </div>
                                </div>
                            </div>
                            <div className='md:hidden flex items-center justify-between mt-2 space-x-1 w-full'>
                                <div className="w-full">
                                    <div className="w-full relative rounded-full border border-primary p-1 flex items-center justify-center space-x-2">
                                        <p>Review</p>
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" stroke="#1A501A" />
                                        </svg>
                                        <div className="absolute -top-1.5 -right-1.5 flex items-center justify-center bg-green-500 w-4 h-4 rounded-full text-[9px] text-white font-bold">
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block text-gray-500 text-sm">
                                <span className="mr-2 flex items-center space-x-1">
                                    <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 16.9999C7.59334 16.9999 8.17336 16.824 8.66671 16.4943C9.16006 16.1647 9.54458 15.6962 9.77164 15.148C9.9987 14.5998 10.0581 13.9966 9.94236 13.4147C9.8266 12.8327 9.54088 12.2982 9.12132 11.8786C8.70176 11.4591 8.16721 11.1733 7.58527 11.0576C7.00333 10.9418 6.40013 11.0012 5.85195 11.2283C5.30377 11.4554 4.83524 11.8399 4.50559 12.3332C4.17595 12.8266 4 13.4066 4 13.9999C4 14.7956 4.31607 15.5586 4.87868 16.1213C5.44129 16.6839 6.20435 16.9999 7 16.9999ZM7 12.9999C7.19778 12.9999 7.39112 13.0586 7.55557 13.1685C7.72002 13.2783 7.84819 13.4345 7.92388 13.6172C7.99957 13.8 8.01937 14.001 7.98079 14.195C7.9422 14.389 7.84696 14.5672 7.70711 14.707C7.56725 14.8469 7.38907 14.9421 7.19509 14.9807C7.00111 15.0193 6.80004 14.9995 6.61732 14.9238C6.43459 14.8481 6.27841 14.7199 6.16853 14.5555C6.05865 14.3911 6 14.1977 6 13.9999C6 13.7347 6.10536 13.4804 6.29289 13.2928C6.48043 13.1053 6.73478 12.9999 7 12.9999ZM20 9.99993H12C11.7348 9.99993 11.4804 10.1053 11.2929 10.2928C11.1054 10.4804 11 10.7347 11 10.9999V17.9999H3V1.50008L2.5 1.5H2H1.5L1 1.50008V22.5H1.29289H2H2.70711H3V19.9999H21V22.5H21.2929H22H22.7071H23V12.9999C23 12.2043 22.6839 11.4412 22.1213 10.8786C21.5587 10.316 20.7956 9.99993 20 9.99993ZM21 17.9999H13V11.9999H20C20.2652 11.9999 20.5196 12.1053 20.7071 12.2928C20.8946 12.4804 21 12.7347 21 12.9999V17.9999Z" fill="#999999" />
                                    </svg>
                                    <span>4</span>
                                </span>
                                <span className="mr-2 flex items-center space-x-1">
                                    <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.85 11.4643H20.2V4.99911C20.2102 4.60899 20.1419 4.22079 19.9991 3.85739C19.8563 3.49399 19.6419 3.16275 19.3686 2.88323C19.0952 2.6037 18.7684 2.38154 18.4075 2.22984C18.0465 2.07815 17.6587 2 17.267 2C16.8753 2 16.4875 2.07815 16.1265 2.22984C15.7656 2.38154 15.4388 2.6037 15.1654 2.88323C14.8921 3.16275 14.6777 3.49399 14.5349 3.85739C14.3921 4.22079 14.3238 4.60899 14.334 4.99911V5.81598H12.816V7.0114H17.05V5.81598H15.534V4.99911C15.5261 4.76746 15.5651 4.5366 15.6486 4.32027C15.7321 4.10395 15.8585 3.90658 16.0202 3.73993C16.1819 3.57327 16.3757 3.44074 16.5899 3.35023C16.804 3.25972 17.0343 3.21307 17.267 3.21307C17.4997 3.21307 17.73 3.25972 17.9442 3.35023C18.1583 3.44074 18.3521 3.57327 18.5138 3.73993C18.6755 3.90658 18.8019 4.10395 18.8854 4.32027C18.9689 4.5366 19.0079 4.76746 19 4.99911V8.78461H17.676V9.98003H19V11.4803C17.7973 11.5116 16.5939 11.4529 15.4 11.305C14.124 11.1237 12.71 10.7411 11.216 10.3367C8.99201 9.73896 6.69201 9.11535 4.63801 9.11535H2.00001V16.8856C1.9994 17.1618 2.03026 17.4372 2.09201 17.7064C2.26378 18.4781 2.67999 19.1743 3.27922 19.6923C3.87845 20.2103 4.62896 20.5227 5.42001 20.5834V22H6.62001V20.6053H17.38V22H18.58V20.5814C19.5117 20.5036 20.38 20.0802 21.0133 19.3951C21.6467 18.7099 21.9988 17.813 22 16.8816V11.4643H20.85ZM20.8 16.8816C20.8008 17.2132 20.7359 17.5417 20.6092 17.8482C20.4824 18.1548 20.2962 18.4335 20.0612 18.6683C19.8262 18.9032 19.5471 19.0895 19.2397 19.2168C18.9324 19.344 18.6028 19.4097 18.27 19.4099H5.73001C5.15586 19.4068 4.59963 19.2105 4.15161 18.8528C3.70359 18.4951 3.39009 17.997 3.26201 17.4395C3.22022 17.2564 3.19942 17.0693 3.20001 16.8816V10.3068H4.64401C6.53801 10.3068 8.76001 10.9045 10.908 11.4883C12.44 11.9007 13.886 12.2852 15.236 12.4844C16.734 12.6976 18.236 12.6837 19.684 12.6657L20.8 12.6598V16.8816Z" stroke="#999999" stroke-width="0.75" />
                                    </svg>
                                    <span>2</span>
                                </span>
                            </div>
                            <div className="hidden md:block text-start">
                                <div className="text-gray-500 text-sm text-start">
                                    Duration
                                </div>
                                <div className="font-semibold text-sm text-gray-800">
                                    3 Month
                                </div>
                            </div>
                            <div className="hidden md:block text-center">
                                <div className="text-gray-500 text-sm text-start">
                                    Pay with
                                </div>
                                <div className="font-semibold text-sm text-gray-800 text-start">
                                    Credit card or debit card
                                </div>
                            </div>
                            <div className="hidden md:block text-center">
                                <div className="text-gray-500 text-sm text-start">
                                    Start date
                                </div>
                                <div className="font-semibold text-sm text-gray-800 text-start">
                                    20 December 2024
                                </div>
                            </div>
                            <div className="hidden md:block text-center">
                                <div className="text-gray-500 text-sm text-start">
                                    Price
                                </div>
                                <div className="font-semibold text-sm text-gray-800 text-lg">
                                    $11,351
                                </div>
                            </div>
                            <div className="hidden md:block mr-2">
                                <div className="relative rounded-full border border-primary p-1">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z" stroke="#1A501A" />
                                    </svg>
                                    <div className="absolute -top-1.5 -right-1.5 flex items-center justify-center bg-green-500 w-4 h-4 rounded-full text-[9px] text-white font-bold">
                                        <span>1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center mb-4">
                    <hr className="border-gray-300 flex-grow" />
                    <span className="text-gray-500 text-sm mx-4">
                        Completed Review
                    </span>
                    <hr className="border-gray-300 flex-grow" />
                </div>
                <div className="space-y-2">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div onClick={() => { router.push('/detail/rent'); }} key={index} className="cursor-pointer hover:scale-[1.015] duration-300 transition-all md:flex md:items-center md:justify-between p-2 bg-white rounded-md shadow-md">
                            <div className="flex items-center">
                                <img alt="Image of a modern luxury villa with a pool in Umalas" className="w-20 h-12 object-cover rounded-md mr-4" height="100" src="https://storage.googleapis.com/a1aa/image/736u630ayToeUyb1VrDuSyOIcbfgJlYdebRynrQZnAgWXhWnA.jpg" width="100" />
                                <div>
                                    <div className="font-semibold text-sm text-gray-800">
                                        Villa Uma: A Modern Luxury Escape w...
                                    </div>
                                    <div className="mr-2 flex items-start space-x-1">
                                        <span className="mr-2 text-xs flex items-start space-x-1">
                                            <svg className="w-4 h-4" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.21875 16.5625V7.10938C4.21875 5.72297 4.21875 5.02977 4.50277 4.50666C4.71897 4.10847 5.04597 3.78147 5.44416 3.56527C5.96727 3.28125 6.66047 3.28125 8.04688 3.28125C9.43328 3.28125 10.1265 3.28125 10.6496 3.56527C11.0478 3.78147 11.3748 4.10847 11.591 4.50666C11.875 5.02977 11.875 5.72297 11.875 7.10938V16.5625V10.7031C11.875 10.0473 11.875 9.7193 11.995 9.46556C12.1187 9.20413 12.3291 8.99366 12.5906 8.87002C12.8443 8.75 13.1723 8.75 13.8281 8.75C14.484 8.75 14.812 8.75 15.0657 8.87002C15.3271 8.99366 15.5376 9.20413 15.6613 9.46556C15.7813 9.7193 15.7812 10.0473 15.7812 10.7031V16.5625" stroke="#999999" />
                                                <path d="M9.84375 16.5625V14.375C9.84375 14.0846 9.84375 13.9395 9.82239 13.8183C9.71973 13.2361 9.26389 12.7803 8.68169 12.6776C8.56053 12.6563 8.41536 12.6562 8.125 12.6562C7.83464 12.6562 7.68947 12.6563 7.56831 12.6776C6.98611 12.7803 6.53027 13.2361 6.42761 13.8183C6.40625 13.9395 6.40625 14.0846 6.40625 14.375V16.5625" stroke="#999999" />
                                                <path d="M17.1875 16.5625H2.8125M9.84375 8.125H6.40625M9.84375 6.25H6.40625M9.84375 10H6.40625" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
                                            </svg>
                                            <span>Villa</span>
                                        </span>
                                        <p className="text-gray-500 text-xs">
                                            ID: INV-20241029-A1B2C3D4E5
                                        </p>
                                    </div>
                                </div>
                                <div className="ml-2 md:ml-0 block md:hidden text-gray-500 text-sm">
                                    <span className="mr-2 flex items-center space-x-1">
                                        <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M7 16.9999C7.59334 16.9999 8.17336 16.824 8.66671 16.4943C9.16006 16.1647 9.54458 15.6962 9.77164 15.148C9.9987 14.5998 10.0581 13.9966 9.94236 13.4147C9.8266 12.8327 9.54088 12.2982 9.12132 11.8786C8.70176 11.4591 8.16721 11.1733 7.58527 11.0576C7.00333 10.9418 6.40013 11.0012 5.85195 11.2283C5.30377 11.4554 4.83524 11.8399 4.50559 12.3332C4.17595 12.8266 4 13.4066 4 13.9999C4 14.7956 4.31607 15.5586 4.87868 16.1213C5.44129 16.6839 6.20435 16.9999 7 16.9999ZM7 12.9999C7.19778 12.9999 7.39112 13.0586 7.55557 13.1685C7.72002 13.2783 7.84819 13.4345 7.92388 13.6172C7.99957 13.8 8.01937 14.001 7.98079 14.195C7.9422 14.389 7.84696 14.5672 7.70711 14.707C7.56725 14.8469 7.38907 14.9421 7.19509 14.9807C7.00111 15.0193 6.80004 14.9995 6.61732 14.9238C6.43459 14.8481 6.27841 14.7199 6.16853 14.5555C6.05865 14.3911 6 14.1977 6 13.9999C6 13.7347 6.10536 13.4804 6.29289 13.2928C6.48043 13.1053 6.73478 12.9999 7 12.9999ZM20 9.99993H12C11.7348 9.99993 11.4804 10.1053 11.2929 10.2928C11.1054 10.4804 11 10.7347 11 10.9999V17.9999H3V1.50008L2.5 1.5H2H1.5L1 1.50008V22.5H1.29289H2H2.70711H3V19.9999H21V22.5H21.2929H22H22.7071H23V12.9999C23 12.2043 22.6839 11.4412 22.1213 10.8786C21.5587 10.316 20.7956 9.99993 20 9.99993ZM21 17.9999H13V11.9999H20C20.2652 11.9999 20.5196 12.1053 20.7071 12.2928C20.8946 12.4804 21 12.7347 21 12.9999V17.9999Z" fill="#999999" />
                                        </svg>
                                        <span>4</span>
                                    </span>
                                    <span className="mr-2 flex items-center space-x-1">
                                        <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.85 11.4643H20.2V4.99911C20.2102 4.60899 20.1419 4.22079 19.9991 3.85739C19.8563 3.49399 19.6419 3.16275 19.3686 2.88323C19.0952 2.6037 18.7684 2.38154 18.4075 2.22984C18.0465 2.07815 17.6587 2 17.267 2C16.8753 2 16.4875 2.07815 16.1265 2.22984C15.7656 2.38154 15.4388 2.6037 15.1654 2.88323C14.8921 3.16275 14.6777 3.49399 14.5349 3.85739C14.3921 4.22079 14.3238 4.60899 14.334 4.99911V5.81598H12.816V7.0114H17.05V5.81598H15.534V4.99911C15.5261 4.76746 15.5651 4.5366 15.6486 4.32027C15.7321 4.10395 15.8585 3.90658 16.0202 3.73993C16.1819 3.57327 16.3757 3.44074 16.5899 3.35023C16.804 3.25972 17.0343 3.21307 17.267 3.21307C17.4997 3.21307 17.73 3.25972 17.9442 3.35023C18.1583 3.44074 18.3521 3.57327 18.5138 3.73993C18.6755 3.90658 18.8019 4.10395 18.8854 4.32027C18.9689 4.5366 19.0079 4.76746 19 4.99911V8.78461H17.676V9.98003H19V11.4803C17.7973 11.5116 16.5939 11.4529 15.4 11.305C14.124 11.1237 12.71 10.7411 11.216 10.3367C8.99201 9.73896 6.69201 9.11535 4.63801 9.11535H2.00001V16.8856C1.9994 17.1618 2.03026 17.4372 2.09201 17.7064C2.26378 18.4781 2.67999 19.1743 3.27922 19.6923C3.87845 20.2103 4.62896 20.5227 5.42001 20.5834V22H6.62001V20.6053H17.38V22H18.58V20.5814C19.5117 20.5036 20.38 20.0802 21.0133 19.3951C21.6467 18.7099 21.9988 17.813 22 16.8816V11.4643H20.85ZM20.8 16.8816C20.8008 17.2132 20.7359 17.5417 20.6092 17.8482C20.4824 18.1548 20.2962 18.4335 20.0612 18.6683C19.8262 18.9032 19.5471 19.0895 19.2397 19.2168C18.9324 19.344 18.6028 19.4097 18.27 19.4099H5.73001C5.15586 19.4068 4.59963 19.2105 4.15161 18.8528C3.70359 18.4951 3.39009 17.997 3.26201 17.4395C3.22022 17.2564 3.19942 17.0693 3.20001 16.8816V10.3068H4.64401C6.53801 10.3068 8.76001 10.9045 10.908 11.4883C12.44 11.9007 13.886 12.2852 15.236 12.4844C16.734 12.6976 18.236 12.6837 19.684 12.6657L20.8 12.6598V16.8816Z" stroke="#999999" stroke-width="0.75" />
                                        </svg>
                                        <span>2</span>
                                    </span>
                                </div>
                            </div>
                            <div className='md:hidden flex items-center justify-between mt-2 space-x-3'>
                                <div className="text-start">
                                    <div className="text-gray-500 text-sm text-start">
                                        Duration
                                    </div>
                                    <div className="font-semibold text-sm text-gray-800">
                                        3 Month
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-500 text-sm text-start">
                                        Pay with
                                    </div>
                                    <div className="font-semibold text-sm text-gray-800 text-start">
                                        Credit card or debit card
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-500 text-sm text-start">
                                        Start date
                                    </div>
                                    <div className="font-semibold text-sm text-gray-800 text-start">
                                        20 December 2024
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-gray-500 text-sm text-start">
                                        Price
                                    </div>
                                    <div className="font-semibold text-sm text-gray-800 text-lg">
                                        $11,351
                                    </div>
                                </div>
                            </div>
                            <div className="hidden md:block text-gray-500 text-sm">
                                <span className="mr-2 flex items-center space-x-1">
                                    <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7 16.9999C7.59334 16.9999 8.17336 16.824 8.66671 16.4943C9.16006 16.1647 9.54458 15.6962 9.77164 15.148C9.9987 14.5998 10.0581 13.9966 9.94236 13.4147C9.8266 12.8327 9.54088 12.2982 9.12132 11.8786C8.70176 11.4591 8.16721 11.1733 7.58527 11.0576C7.00333 10.9418 6.40013 11.0012 5.85195 11.2283C5.30377 11.4554 4.83524 11.8399 4.50559 12.3332C4.17595 12.8266 4 13.4066 4 13.9999C4 14.7956 4.31607 15.5586 4.87868 16.1213C5.44129 16.6839 6.20435 16.9999 7 16.9999ZM7 12.9999C7.19778 12.9999 7.39112 13.0586 7.55557 13.1685C7.72002 13.2783 7.84819 13.4345 7.92388 13.6172C7.99957 13.8 8.01937 14.001 7.98079 14.195C7.9422 14.389 7.84696 14.5672 7.70711 14.707C7.56725 14.8469 7.38907 14.9421 7.19509 14.9807C7.00111 15.0193 6.80004 14.9995 6.61732 14.9238C6.43459 14.8481 6.27841 14.7199 6.16853 14.5555C6.05865 14.3911 6 14.1977 6 13.9999C6 13.7347 6.10536 13.4804 6.29289 13.2928C6.48043 13.1053 6.73478 12.9999 7 12.9999ZM20 9.99993H12C11.7348 9.99993 11.4804 10.1053 11.2929 10.2928C11.1054 10.4804 11 10.7347 11 10.9999V17.9999H3V1.50008L2.5 1.5H2H1.5L1 1.50008V22.5H1.29289H2H2.70711H3V19.9999H21V22.5H21.2929H22H22.7071H23V12.9999C23 12.2043 22.6839 11.4412 22.1213 10.8786C21.5587 10.316 20.7956 9.99993 20 9.99993ZM21 17.9999H13V11.9999H20C20.2652 11.9999 20.5196 12.1053 20.7071 12.2928C20.8946 12.4804 21 12.7347 21 12.9999V17.9999Z" fill="#999999" />
                                    </svg>
                                    <span>4</span>
                                </span>
                                <span className="mr-2 flex items-center space-x-1">
                                    <svg className="w-4 h-4" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.85 11.4643H20.2V4.99911C20.2102 4.60899 20.1419 4.22079 19.9991 3.85739C19.8563 3.49399 19.6419 3.16275 19.3686 2.88323C19.0952 2.6037 18.7684 2.38154 18.4075 2.22984C18.0465 2.07815 17.6587 2 17.267 2C16.8753 2 16.4875 2.07815 16.1265 2.22984C15.7656 2.38154 15.4388 2.6037 15.1654 2.88323C14.8921 3.16275 14.6777 3.49399 14.5349 3.85739C14.3921 4.22079 14.3238 4.60899 14.334 4.99911V5.81598H12.816V7.0114H17.05V5.81598H15.534V4.99911C15.5261 4.76746 15.5651 4.5366 15.6486 4.32027C15.7321 4.10395 15.8585 3.90658 16.0202 3.73993C16.1819 3.57327 16.3757 3.44074 16.5899 3.35023C16.804 3.25972 17.0343 3.21307 17.267 3.21307C17.4997 3.21307 17.73 3.25972 17.9442 3.35023C18.1583 3.44074 18.3521 3.57327 18.5138 3.73993C18.6755 3.90658 18.8019 4.10395 18.8854 4.32027C18.9689 4.5366 19.0079 4.76746 19 4.99911V8.78461H17.676V9.98003H19V11.4803C17.7973 11.5116 16.5939 11.4529 15.4 11.305C14.124 11.1237 12.71 10.7411 11.216 10.3367C8.99201 9.73896 6.69201 9.11535 4.63801 9.11535H2.00001V16.8856C1.9994 17.1618 2.03026 17.4372 2.09201 17.7064C2.26378 18.4781 2.67999 19.1743 3.27922 19.6923C3.87845 20.2103 4.62896 20.5227 5.42001 20.5834V22H6.62001V20.6053H17.38V22H18.58V20.5814C19.5117 20.5036 20.38 20.0802 21.0133 19.3951C21.6467 18.7099 21.9988 17.813 22 16.8816V11.4643H20.85ZM20.8 16.8816C20.8008 17.2132 20.7359 17.5417 20.6092 17.8482C20.4824 18.1548 20.2962 18.4335 20.0612 18.6683C19.8262 18.9032 19.5471 19.0895 19.2397 19.2168C18.9324 19.344 18.6028 19.4097 18.27 19.4099H5.73001C5.15586 19.4068 4.59963 19.2105 4.15161 18.8528C3.70359 18.4951 3.39009 17.997 3.26201 17.4395C3.22022 17.2564 3.19942 17.0693 3.20001 16.8816V10.3068H4.64401C6.53801 10.3068 8.76001 10.9045 10.908 11.4883C12.44 11.9007 13.886 12.2852 15.236 12.4844C16.734 12.6976 18.236 12.6837 19.684 12.6657L20.8 12.6598V16.8816Z" stroke="#999999" stroke-width="0.75" />
                                    </svg>
                                    <span>2</span>
                                </span>
                            </div>
                            <div className="hidden md:block text-start">
                                <div className="text-gray-500 text-sm text-start">
                                    Duration
                                </div>
                                <div className="font-semibold text-sm text-gray-800">
                                    3 Month
                                </div>
                            </div>
                            <div className="hidden md:block text-center">
                                <div className="text-gray-500 text-sm text-start">
                                    Pay with
                                </div>
                                <div className="font-semibold text-sm text-gray-800">
                                    Credit card or debit card
                                </div>
                            </div>
                            <div className="hidden md:block text-center">
                                <div className="text-gray-500 text-sm text-start">
                                    Start date
                                </div>
                                <div className="font-semibold text-sm text-gray-800">
                                    20 December 2024
                                </div>
                            </div>
                            <div className="hidden md:block text-center">
                                <div className="text-gray-500 text-sm text-start">
                                    Price
                                </div>
                                <div className="font-semibold text-sm text-gray-800 text-lg">
                                    $11,351
                                </div>
                            </div>
                            <div className="hidden md:block mr-2">
                                <svg className="w-4 h-4" width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_2129_1403)">
                                        <path d="M8.75 0C8.26602 0 7.875 0.391016 7.875 0.875C7.875 1.35898 8.26602 1.75 8.75 1.75H11.0113L5.50703 7.25703C5.16523 7.59883 5.16523 8.15391 5.50703 8.4957C5.84883 8.8375 6.40391 8.8375 6.7457 8.4957L12.25 2.98867V5.25C12.25 5.73398 12.641 6.125 13.125 6.125C13.609 6.125 14 5.73398 14 5.25V0.875C14 0.391016 13.609 0 13.125 0H8.75ZM2.1875 0.875C0.978906 0.875 0 1.85391 0 3.0625V11.8125C0 13.0211 0.978906 14 2.1875 14H10.9375C12.1461 14 13.125 13.0211 13.125 11.8125V8.75C13.125 8.26602 12.734 7.875 12.25 7.875C11.766 7.875 11.375 8.26602 11.375 8.75V11.8125C11.375 12.0531 11.1781 12.25 10.9375 12.25H2.1875C1.94687 12.25 1.75 12.0531 1.75 11.8125V3.0625C1.75 2.82188 1.94687 2.625 2.1875 2.625H5.25C5.73398 2.625 6.125 2.23398 6.125 1.75C6.125 1.26602 5.73398 0.875 5.25 0.875H2.1875Z" fill="#232222" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_2129_1403">
                                            <rect width="14" height="14" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Modal onClose={() => {
                setActiveButtons([]);
                setRating(0);
            }} position="center" blur animationDuration={200} open={IsOpenReview} hideIcon onOpenChange={setIsOpenReview}>
                <div>
                    <p className="font-bold">Review</p>
                    <div className="mt-4">
                        <div className="mb-4">
                            <label className="block text-sm  text-gray-700 mb-2">
                                Rate
                            </label>
                            <div className="flex space-x-1">
                                {[...Array(5)].map((_, index) => (
                                    <svg
                                        key={index}
                                        onClick={() => handleClick(index)}
                                        className="w-6 h-6"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill={index < Rating ? "#FFDF2B" : "none"}
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ cursor: 'pointer' }}
                                    >
                                        <path
                                            d="M10.9057 2.5625C10.7309 2.21875 10.3615 2 9.9558 2C9.55012 2 9.18402 2.21875 9.00592 2.5625L6.88518 6.69688L2.14897 7.35938C1.75319 7.41563 1.42337 7.67812 1.30133 8.0375C1.1793 8.39687 1.27825 8.79375 1.56189 9.05937L4.99861 12.2812L4.18725 16.8344C4.12129 17.2094 4.2862 17.5906 4.61272 17.8125C4.93924 18.0344 5.37131 18.0625 5.72751 17.8844L9.9591 15.7437L14.1907 17.8844C14.5469 18.0625 14.9789 18.0375 15.3055 17.8125C15.632 17.5875 15.7969 17.2094 15.7309 16.8344L14.9163 12.2812L18.353 9.05937C18.6366 8.79375 18.7389 8.39687 18.6136 8.0375C18.4882 7.67812 18.1617 7.41563 17.7659 7.35938L13.0264 6.69688L10.9057 2.5625Z"
                                            stroke="#FFDF2B"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>
                        <div className="w-full overflow-x-hidden block">
                            <div className="mb-4 grid grid-cols-3 gap-2 md:gap-0 md:flex md:items-center w-full md:space-x-2">
                                {buttons.map((button) => (
                                    <button
                                        key={button}
                                        onClick={() => toggleButton(button)}
                                        className={`px-2 py-1 rounded-md text-sm ${activeButtons.includes(button)
                                            ? 'bg-brown-soft text-white'
                                            : 'border border-brown-soft text-brown-soft'
                                            }`}
                                    >
                                        {button}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm  text-gray-700 mb-2">
                                Give Your Feedback
                            </label>
                            <textarea onChange={(e) => { setDescReview(e.target.value) }} value={DescReview} className="outline-none border border-gray-300 rounded px-4 py-2 w-full" rows={4}></textarea>
                        </div>
                        <div className="mt-5">
                            <button onClick={() => { setIsOpenReview(false) }} className="bg-second text-white border border-second rounded-full px-4 py-1 font-semibold hover:bg-second/85 duration-300 transition-all">Submit</button>
                        </div>
                    </div>
                </div>
            </Modal>
        </div >
    )
}

export default History;