import iconIg from "@/assets/svg/icon-ig.svg";
import iconFb from "@/assets/svg/icon-fb.svg";
import iconX from "@/assets/svg/icon-x.svg";
import iconMail from "@/assets/svg/icon-mail.svg";
import iconPhone from "@/assets/svg/icon-phone.svg";

import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl border-b border-white py-8 container mx-auto flex justify-between items-start">
                <div className="w-2/4">
                    <div className="flex items-center mb-4">
                        <div className="bg-gray-300 rounded-full w-8 h-8"></div>
                        <span className="ml-3 text-lg font-semibold">Suaka</span>
                    </div>
                    <p className="mb-4">Discover the perfect rental that suits your lifestyle. <br /> Explore our curated listings and find your ideal <br /> property today!</p>
                    <div className="flex space-x-4">
                        <button className="rounded-full border p-2 border-white hover:bg-white">
                            <div className="w-5 h-5">
                                <Image className="w-auto h-5 mx-auto" src={iconIg} width={50} height={50} alt="icon" unoptimized />
                            </div>
                        </button>
                        <button className="rounded-full border p-2 border-white">
                            <div className="w-5 h-5">
                                <Image className="w-auto h-5 mx-auto" src={iconFb} width={50} height={50} alt="icon" unoptimized />
                            </div>
                        </button>
                        <button className="rounded-full border p-2 border-white">
                            <div className="w-5 h-5">
                                <Image className="w-auto h-5 mx-auto" src={iconX} width={50} height={50} alt="icon" unoptimized />
                            </div>
                        </button>
                    </div>
                </div>
                <div className="w-1/4">
                    <h3 className="font-semibold mb-4">Help</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-soft duration-200 transition-all">Terms & Conditions</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-soft duration-200 transition-all">Privacy</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-soft duration-200 transition-all">About Suaka</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-soft duration-200 transition-all">About Company</a></li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h3 className="font-semibold mb-4">Navigation</h3>
                    <ul>
                        <li className="mb-2"><a href="#" className="hover:text-soft duration-200 transition-all">For Sale</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-soft duration-200 transition-all">To Rent</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-soft duration-200 transition-all">Recommendation</a></li>
                        <li className="mb-2"><a href="#" className="hover:text-soft duration-200 transition-all">Guides</a></li>
                    </ul>
                </div>
                <div className="w-1/4">
                    <h3 className="font-semibold mb-4">Contact Us</h3>
                    <ul>
                        <li className="mb-2 flex items-center">
                            <div className="w-5 h-5 mr-2">
                                <Image className="w-auto h-5 mx-auto" src={iconMail} width={50} height={50} alt="icon" unoptimized />
                            </div>
                            <a href="mailto:support@suaka.com" className="hover:text-soft duration-200 transition-all">support@suaka.com</a>
                        </li>
                        <li className="mb-2 flex items-center">
                            <div className="w-5 h-5 mr-2">
                                <Image className="w-auto h-5 mx-auto" src={iconPhone} width={50} height={50} alt="icon" unoptimized />
                            </div>
                            <a href="tel:+6285155551212" className="hover:text-soft duration-200 transition-all">+62 851 5555 1212</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="py-6 text-center text-sm">
                <p>© Copyright 2024, All Rights Reserved by Suaka</p>
            </div>
        </footer>
    )
}

export default Footer;