"use client";

import * as React from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { BillboardPackages } from "@/utils/Data/BillboardPackagesDetail";
import { TaxiPackages } from "@/utils/Data/TaxiPackagesDetail";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CarouselSpacingProps {
    adType: string;
}

export function CarouselSpacing({ adType }: CarouselSpacingProps) {
    const handleRedirect = (url: string) => {
        window.location.href = `${url}`;
    };

    return (
        
            <Carousel className="w-full relative"><ScrollArea className="mt-6 max-md:h-[500px] md:h-full w-full">
                {adType === "billboard" && (
                    <CarouselContent className="flex md:flex-row flex-col items-center md:items-stretch">
                        {BillboardPackages.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="flex-none opacity-85 shadow-md w-full md:w-1/3 mb-6 md:mb-0"
                            >
                                <div className="border border-gray-300 flex flex-col justify-center rounded-lg p-6 bg-white shadow-md w-full">
                                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{item.type}</h2>
                                    <p className="text-xl text-gray-600">{item.pricePerMonth} per month</p>
                                    <ul className="list-disc list-inside mb-4 text-gray-600">
                                        <li>{item.impressions} impressions</li>
                                        <li>{item.placement} ad placement</li>
                                    </ul>
                                    <div className="flex flex-col gap-2">
                                        <Button
                                            className="bg-indigo-900 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                                            onClick={() => handleRedirect(`create-ad/${adType}/${item.type}`)}
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
                    <CarouselContent className="flex md:flex-row flex-col items-center md:items-stretch">
                        {TaxiPackages.map((item, index) => (
                            <CarouselItem
                                key={index}
                                className="flex-none opacity-85 shadow-md w-full md:w-1/3 mb-6 md:mb-0"
                            >
                                <div className="border border-gray-300 flex flex-col justify-center rounded-lg p-6 bg-white shadow-md w-full">
                                    <h2 className="text-2xl font-bold mb-2 text-gray-800">{item.type}</h2>
                                    <p className="text-xl text-gray-600">{item.price} per month</p>
                                    <ul className="list-disc list-inside mb-4 text-gray-600">
                                        <li>{item.numberOfTaxiInvolved} taxis involved</li>
                                    </ul>
                                    <div className="flex flex-col gap-2">
                                        <Button
                                            className="bg-indigo-900 text-white py-2 px-4 rounded hover:bg-blue-500 transition"
                                            onClick={() => handleRedirect(`create-ad/${adType}/${item.type}`)}
                                        >
                                            Learn more
                                        </Button>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                )}
 </ScrollArea>
                <div className="absolute gap-8 flex bg-slate-50 right-14 -bottom-10 max-md:hidden">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </Carousel>
       

    );
}
