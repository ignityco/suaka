"use client";

import { useState, useEffect } from "react";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import { useRouter } from "next/navigation";
import LocationInput from "@/components/LocationInput";
import { Editor, EditorState, convertToRaw, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

import iconListNumber from "@/assets/svg/list-number.svg";
import iconListBullet from "@/assets/svg/list-bullet.svg";
import Bills from "@/components/upload/Bills";
import ConstructionNoise from "@/components/upload/ConstructionNoise";
import UploadImages from "@/components/upload/UploadImages";

export default function Page() {
    const router = useRouter();
    const [TabActive, setTabActive] = useState("Upload Images");
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [jsonOutput, setJsonOutput] = useState('');

    const toggleBold = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    };

    const toggleItalic = () => {
        setEditorState(RichUtils.toggleInlineStyle(editorState, 'ITALIC'));
    };

    const toggleBulletList = () => {
        handleEditorChange(RichUtils.toggleBlockType(editorState, 'unordered-list-item'));
    };

    const toggleNumberedList = () => {
        handleEditorChange(RichUtils.toggleBlockType(editorState, 'ordered-list-item'));
    };

    const handleEditorChange = (state: any) => {
        setEditorState(state);
    };

    const handleSaveJson = () => {
        const contentState = editorState.getCurrentContent();
        const json = JSON.stringify(convertToRaw(contentState));
        setJsonOutput(json);
        // Simpan ke database di sini
        console.log('Saved JSON:', json);
    };

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
                            <li className="flex cursor-pointer items-center text-sm text-gray-900 transition-colors duration-300 hover:text-slate-800">
                                <button onClick={() => { router.push("/dashboard/profile") }}>Profile</button>
                                <span className="pointer-events-none mx-2 text-gray-900">
                                    /
                                </span>
                            </li>
                            <li className="flex cursor-pointer items-center text-sm text-gray-900 transition-colors duration-300 hover:text-slate-800 border-b border-primary">
                                <button onClick={() => { router.push("/dashboard/profile/upload") }}>Upload</button>
                            </li>
                        </ol>
                    </nav>
                    <div className="mt-2">
                        <button onClick={() => { router.back() }} className="flex items-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.2563 9.50724C5.91457 9.84892 5.91457 10.4038 6.2563 10.7455L11.5053 15.9937C11.847 16.3354 12.402 16.3354 12.7437 15.9937C13.0854 15.6521 13.0854 15.0972 12.7437 14.7555L8.11258 10.125L12.741 5.49452C13.0827 5.15284 13.0827 4.59794 12.741 4.25626C12.3992 3.91458 11.8443 3.91458 11.5025 4.25626L6.25356 9.5045L6.2563 9.50724Z" fill="#000000" />
                            </svg>
                            <span className="border-b border-primary">Back</span>
                        </button>
                    </div>
                    <div className="mt-6">
                        <div className="rounded-lg border border-gray-400 relative p-2 pt-4 md:pt-5 md:p-5">
                            <div className="px-2 text-sm text-gray-900 bg-base-background absolute ml-2 top-0 translate-y-[-50%] left-0 ">
                                <p>Owner Information</p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Name
                                </label>
                                <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="name" placeholder="" type="text" />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="phonenumber" placeholder="" type="text" />
                            </div>
                        </div>
                        <div className="rounded-lg border border-gray-400 relative p-2 pt-4 md:pt-5 md:p-5 mt-4">
                            <div className="px-2 text-sm text-gray-900 bg-base-background absolute ml-2 top-0 translate-y-[-50%] left-0 ">
                                <p>Property Information</p>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Property Title
                                </label>
                                <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="name" placeholder="" type="text" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Price
                                </label>
                                <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="price" placeholder="" type="number" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Location
                                </label>
                                <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="location" placeholder="" type="text" />
                            </div>
                            <div className="mb-4 pt-4">
                                <div className="rounded-lg border border-gray-400 relative p-5">
                                    <div className="px-2 text-sm text-gray-900 bg-base-background absolute ml-2 top-0 translate-y-[-50%] left-0 ">
                                        <p>Address</p>
                                    </div>
                                    <div className="mb-4">
                                        <label className="block text-gray-700 mb-2">
                                            Street
                                        </label>
                                        <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="address" placeholder="" type="text" />
                                    </div>
                                    <div className="flex items-center space-x-2 w-full">
                                        <div className="mb-4 w-full">
                                            <label className="block text-gray-700 mb-2">
                                                Country
                                            </label>
                                            <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="address" placeholder="" type="text" />
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label className="block text-gray-700 mb-2">
                                                Province
                                            </label>
                                            <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="address" placeholder="" type="text" />
                                        </div>
                                        <div className="mb-4 w-full">
                                            <label className="block text-gray-700 mb-2">
                                                City
                                            </label>
                                            <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="address" placeholder="" type="text" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 mb-2">
                                    Description
                                </label>
                                <div>
                                    <div className="border border-gray-300 rounded-lg" style={{ padding: '10px', minHeight: '300px' }}>
                                        <label className="text-xs text-gray-400">Action</label>
                                        <div className="flex items-center space-x-2 p-2">
                                            <button className="hover:bg-gray-300 transition-all duration-300 px-2 py-1" onClick={toggleBold}>Bold</button>
                                            <button className="hover:bg-gray-300 transition-all duration-300 px-2 py-1" onClick={toggleItalic}>Italic</button>
                                            <div className="flex items-center border border-gray-400 rounded-lg">
                                                <button className="hover:bg-gray-300 transition-all duration-300 px-2 py-1" onClick={toggleBulletList}><Image className="w-5 h-5" src={iconListBullet} width={25} height={25} alt="" /></button>
                                                <button className="hover:bg-gray-300 transition-all duration-300 px-2 py-1.5" onClick={toggleNumberedList}><Image className="w-[17px] h-[17px]" src={iconListNumber} width={25} height={25} alt="" /></button>
                                            </div>
                                        </div>
                                        <hr className="border-gray-300 mt-2 mb-4" />
                                        <div className="h-[250px] overflow-y-scroll">
                                            <Editor editorState={editorState} onChange={handleEditorChange} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4 pt-4">
                                <div className="lg:flex lg:items-center space-y-4 lg:space-y-0 lg:space-x-4">
                                    <div className="rounded-lg border border-gray-400 relative p-5 w-full">
                                        <div className="px-2 text-sm text-gray-900 bg-base-background absolute ml-2 top-0 translate-y-[-50%] left-0 ">
                                            <p>Property Type</p>
                                        </div>
                                        <div className="mt-1 flex items-center">
                                            <div className="inline-flex items-center">
                                                <label className="flex items-center cursor-pointer relative">
                                                    <input type="radio" name="property-type" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
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
                                                    <input type="radio" name="property-type" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
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
                                        <div className="mt-1 flex items-center">
                                            <div className="inline-flex items-center">
                                                <label className="flex items-center cursor-pointer relative">
                                                    <input type="radio" name="property-type" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
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
                                    </div>
                                    <div className="rounded-lg border border-gray-400 relative p-5 w-full">
                                        <div className="px-2 text-sm text-gray-900 bg-base-background absolute ml-2 top-0 translate-y-[-50%] left-0 ">
                                            <p>Facilities</p>
                                        </div>
                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4">
                                            <div className="mt-1 flex items-center">
                                                <div className="inline-flex items-center">
                                                    <label className="flex items-center cursor-pointer relative">
                                                        <input type="radio" name="facilities" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>
                                                <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                                    <p>WiFi</p>
                                                </button>
                                            </div>
                                            <div className="mt-1 flex items-center">
                                                <div className="inline-flex items-center">
                                                    <label className="flex items-center cursor-pointer relative">
                                                        <input type="radio" name="facilities" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
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
                                                        <input type="radio" name="facilities" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
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
                                            <div className="mt-1 flex items-center">
                                                <div className="inline-flex items-center">
                                                    <label className="flex items-center cursor-pointer relative">
                                                        <input type="radio" name="facilities" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
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
                                                        <input type="radio" name="facilities" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>
                                                <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                                    <p>Water Heater</p>
                                                </button>
                                            </div>
                                            <div className="mt-1 flex items-center">
                                                <div className="inline-flex items-center">
                                                    <label className="flex items-center cursor-pointer relative">
                                                        <input type="radio" name="facilities" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>
                                                <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                                    <p>Bath</p>
                                                </button>
                                            </div>
                                            <div className="mt-1 flex items-center">
                                                <div className="inline-flex items-center">
                                                    <label className="flex items-center cursor-pointer relative">
                                                        <input type="radio" name="facilities" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>
                                                <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                                    <p>TV</p>
                                                </button>
                                            </div>
                                            <div className="mt-1 flex items-center">
                                                <div className="inline-flex items-center">
                                                    <label className="flex items-center cursor-pointer relative">
                                                        <input type="radio" name="facilities" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>
                                                <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                                    <p>Kitchen</p>
                                                </button>
                                            </div>
                                            <div className="mt-1 flex items-center">
                                                <div className="inline-flex items-center">
                                                    <label className="flex items-center cursor-pointer relative">
                                                        <input type="radio" name="facilities" className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800" id="check" />
                                                        <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                                                                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                                                            </svg>
                                                        </span>
                                                    </label>
                                                </div>
                                                <button className="block w-full text-start rounded-full px-2 py-1" onClick={() => { }}>
                                                    <p>Pation or Balcony</p>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center space-x-4">
                                    <div className="mb-4 w-full">
                                        <label className="block text-gray-700 mb-2">
                                            Number of Bedrooms
                                        </label>
                                        <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="bedroom" placeholder="" type="number" />
                                    </div>
                                    <div className="mb-4 w-full">
                                        <label className="block text-gray-700 mb-2">
                                            Number of Bathrooms
                                        </label>
                                        <input className="outline-none border border-gray-300 rounded px-4 py-2 w-full" id="bathroom" placeholder="" type="number" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <div className="flex items-center bg-white shadow-lg rounded-md p-1 max-w-fit">
                                    <button onClick={() => { setTabActive("Upload Images") }} className={`${TabActive === "Upload Images" ? "bg-second text-white" : "text-gray-700 "} px-4 py-2 rounded-lg`}>
                                        Upload Images
                                    </button>
                                    <button onClick={() => { setTabActive("Construction Noise") }} className={`${TabActive === "Construction Noise" ? "bg-second text-white" : "text-gray-700 "} px-4 py-2 rounded-lg`}>
                                        Construction Noise
                                    </button>
                                    <button onClick={() => { setTabActive("Bills") }} className={`${TabActive === "Bills" ? "bg-second text-white" : "text-gray-700 "} px-4 py-2 rounded-lg`}>
                                        Bills
                                    </button>
                                </div>
                            </div>
                            <div className="mb-4">
                                {TabActive === "Bills" ?
                                    <Bills />
                                    :
                                    TabActive === "Construction Noise" ?
                                        <ConstructionNoise /> :
                                        <UploadImages />
                                }
                            </div>
                        </div>
                            <div className="mt-6">
                                <button className="bg-second hover:bg-second/85 transition-all duration-300 py-2 rounded-full text-white w-full">Save</button>
                            </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
