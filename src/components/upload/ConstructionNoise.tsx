"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ConstructionNoise = () => {
    const router = useRouter();

    return (
        <div>
            <div className='mb-4'>
                <label className="block text-gray-700 mb-2">
                    During the day?
                </label>
                <div className='flex items-center space-x-4'>
                    <div className="mt-1 flex items-center">
                        <div className="inline-flex items-center">
                            <label className="flex items-center cursor-pointer relative">
                                <input type="radio" name="during-day" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
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
                                <input type="radio" name="during-day" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
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
                </div>
            </div>
            <div className='mb-4'>
                <label className="block text-gray-700 mb-2">
                    How loud is it?
                </label>
                <div className='flex items-center space-x-4'>
                    <div className="mt-1 flex items-center">
                        <div className="inline-flex items-center">
                            <label className="flex items-center cursor-pointer relative">
                                <input type="radio" name="loud" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                            <p>Low</p>
                        </button>
                    </div>
                    <div className="mt-1 flex items-center">
                        <div className="inline-flex items-center">
                            <label className="flex items-center cursor-pointer relative">
                                <input type="radio" name="loud" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                            <p>Moderate</p>
                        </button>
                    </div>
                    <div className="mt-1 flex items-center">
                        <div className="inline-flex items-center">
                            <label className="flex items-center cursor-pointer relative">
                                <input type="radio" name="loud" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                        </div>
                        <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                            <p>High</p>
                        </button>
                    </div>
                </div>
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 mb-2">
                    Description
                </label>
                <textarea className="outline-none border border-gray-300 rounded px-4 py-2 w-full" rows={4} placeholder="" />
            </div>
        </div>
    )
}

export default ConstructionNoise;