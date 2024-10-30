"use client";

import Modal from 'react-minimal-modal';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Signin from './Signin';
import Signup from './Signup';
import iconUser from "@/assets/svg/User.svg";

const Header = () => {
    const router = useRouter();
    const [IsOpenSignin, setIsOpenSignin] = useState(false);
    const [IsOpenSignup, setIsOpenSignup] = useState(false);
    return (
        <div>
            <div className="bg-white shadow-md rounded-xl py-3 px-5 w-full flex items-center justify-between mb-4">
                <div onClick={() => { router.push('/'); }} className="cursor-pointer flex items-center space-x-2">
                    <div className="w-6 h-6 rounded-full bg-gray-300"></div>
                    <h1 className="font-bold">Suaka</h1>
                </div>
                <div className="flex items-center space-x-6">
                    <button onClick={() => { router.push('/property?category=rent') }} className="hover:text-gray-500 duration-250 transition-all">To Rent</button>
                    <button onClick={() => { router.push('/property?category=sale') }} className="hover:text-gray-500 duration-250 transition-all">For Sale</button>
                </div>
                <div className='flex items-center space-x-2'>
                    <button onClick={() => { setIsOpenSignin(true) }} className="px-6 py-1 rounded-full bg-second text-white hover:bg-second/85 duration-300 transition-all">Sign In</button>
                    <button onClick={() => { router.push('/dashboard/profile') }} className="p-1 rounded-full bg-second text-white hover:bg-second/85 duration-300 transition-all">
                        <Image className='w-6 h-6' src={iconUser} width={50} height={50} alt=''/>
                    </button>
                </div>
            </div>

            <Modal blur animationDuration={200} open={IsOpenSignin} hideIcon onOpenChange={setIsOpenSignin}>
                <Signin setIsOpenSignin={setIsOpenSignin} setIsOpenSignup={setIsOpenSignup} />
            </Modal>
            <Modal blur animationDuration={200} open={IsOpenSignup} hideIcon onOpenChange={setIsOpenSignup}>
                <Signup setIsOpenSignup={setIsOpenSignup} setIsOpenSignin={setIsOpenSignin} />
            </Modal>
        </div>
    )
}

export default Header;