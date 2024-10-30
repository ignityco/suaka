"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const UploadImages = () => {
    const router = useRouter();
    const categories = [
        'Dining Room',
        'Kitchen Room',
        'Bathroom',
        'Living Room',
        'Bedroom',
        'Outdoor',
        'Pool Area',
        'Patio or Balcony',
        'Parking Area',
    ];

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [images, setImages] = useState<{ [key: string]: File[] }>({});

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((cat) => cat !== category)
                : [...prev, category]
        );
    };

    const handleImageChange = (category: string, event: any) => {
        const files = event.target.files;
        if (files) {
            setImages((prev: any) => ({
                ...prev,
                [category]: [...(prev[category] || []), ...Array.from(files)],
            }));
            event.target.value = ''; // Reset input
        }
    };

    const handleRemoveImage = (category: string, index: number) => {
        setImages((prev) => ({
            ...prev,
            [category]: prev[category].filter((_, i) => i !== index),
        }));
    };

    return (
        <div className="p-5">
            <h1 className="text-xl font-bold mb-4">Choose Room Categories</h1>
            <div className="grid grid-cols-2 gap-4">
                {categories.map((category) => (
                    <div key={category} className="border p-4 rounded flex flex-col">
                        <div className="inline-flex items-center mb-2">
                            <label className="flex items-center cursor-pointer relative">
                                <input
                                    type="checkbox"
                                    checked={selectedCategories.includes(category)}
                                    onChange={() => toggleCategory(category)}
                                    className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
                                />
                                <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" strokeWidth="1">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                    </svg>
                                </span>
                            </label>
                            <span className="ml-2">{category}</span>
                        </div>
                        {selectedCategories.includes(category) && (
                            <div className="flex items-start mt-2">
                                <div className="flex flex-col">
                                    {images[category]?.map((img, index) => (
                                        <div key={index} className="relative mb-2">
                                            <img src={URL.createObjectURL(img)} alt={`Uploaded ${index}`} className="w-32 h-32 object-cover" />
                                            <button
                                                className="absolute top-0 right-0 bg-red-500 text-white p-1 rounded"
                                                onClick={() => handleRemoveImage(category, index)}
                                            >
                                                X
                                            </button>
                                        </div>
                                    ))}
                                </div>
                                <div className="border-dashed border-2 border-gray-400 p-4 text-center relative w-32 h-32 ml-2">
                                    <input
                                        type="file"
                                        multiple
                                        accept="image/*"
                                        onChange={(e) => handleImageChange(category, e)}
                                        className="absolute inset-0 opacity-0 cursor-pointer"
                                    />
                                    <div className="flex items-center justify-center h-full">
                                        <span className="text-gray-600 text-2xl">+</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UploadImages;