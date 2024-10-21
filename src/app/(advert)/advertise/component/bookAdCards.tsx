"use client";

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { BiboardPackages, TaxiPackages } from "@/utils/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CarouselSpacingProps {
    adType: string;
}

export function CarouselSpacing({ adType }: CarouselSpacingProps) {
    const handleRedirect = (url: string) => {
        window.location.href = `${url}`;
    };

    return (
        <Carousel className="w-full relative"> {/* Full width and height */}
            {adType === "bilboard" && (
                <CarouselContent className="flex"> {/* Use flex to align the items horizontally */}
                    {BiboardPackages.map((item, index) => (
                        <CarouselItem key={index} className="flex-none opacity-85 shadow-md w-1/3"> {/* Ensure each item takes 1/3 of the screen */}
                            <div className="border border-gray-300 flex flex-col justify-center rounded-lg p-6 bg-white w-full shadow-md">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h2>
                                <p className="text-xl text-gray-600">{item.price}</p>
                                <ul className="list-disc list-inside mb-4 text-gray-600">
                                    <li>{item.impressions} impressions</li>
                                    <li>{item.adPlacements} ad placement</li>
                                    <li>{item.support}</li>
                                </ul>
                                <div className="flex flex-col gap-2">
                                    {/* Button to redirect */}
                                    <Button
                                        className="bg-indigo-900 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                                        onClick={() => handleRedirect(`create-ad/${adType}/${item.name}`)}
                                    >
                                        Learn more
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            )}
            {adType === "taxi" && (
                <CarouselContent className="flex"> {/* Use flex to align the items horizontally */}
                    {TaxiPackages.map((item, index) => (
                        <CarouselItem key={index} className="flex-none opacity-85 shadow-md w-1/3"> {/* Ensure each item takes 1/3 of the screen */}
                            <div className="border border-gray-300 flex flex-col justify-center rounded-lg p-6 bg-white w-full shadow-md">
                                <h2 className="text-2xl font-bold mb-2 text-gray-800">{item.name}</h2>
                                <p className="text-xl text-gray-600">{item.price}</p>
                                <ul className="list-disc list-inside mb-4 text-gray-600">
                                    <li>{item.impressions} impressions</li>
                                    <li>{item.mapUrls.length} ad placement</li>
                                    <li>{item.support}</li>
                                </ul>
                                <div className="flex flex-col gap-2">
                                    {/* Button to redirect */}
                                    <Button
                                        className="bg-indigo-900 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                                        onClick={() => handleRedirect(`create-ad/${adType}/${item.name}`)}
                                    >
                                        Learn more
                                    </Button>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            )}


            <div className="absolute gap-28 flex bg-slate-50 right-14 -bottom-10">
                <CarouselPrevious />
                <CarouselNext />
            </div>
        </Carousel>
    );
}
