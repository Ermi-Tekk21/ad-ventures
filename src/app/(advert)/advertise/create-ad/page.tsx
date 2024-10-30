"use client";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { CarouselSpacing } from "../component/bookAdCards";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const CreateAd: React.FC = () => {
    const [selectedTypeOfAd, setTypeAd] = useState("billboard");

    const handleAdTypeChange = (type: string) => {
        setTypeAd(type);
    };

    return (
        <main className="z-10">
            <ScrollArea className="h-screen flex flex-col items-center text-black w-full pt-16 rounded-md border">
                {selectedTypeOfAd === "billboard" && (
                    <div className="flex flex-col md:flex-row gap-5 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="#a19b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tv">
                            <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
                            <polyline points="17 2 12 7 7 2" />
                        </svg>
                        <p className="text-3xl font-serif max-md:lg dark:text-slate-200">Billboard</p>
                    </div>
                )}
                {selectedTypeOfAd === "taxi" && (
                    <div className="flex flex-col md:flex-row gap-5 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="68" height="68" viewBox="0 0 24 24" fill="none" stroke="#a19b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car-taxi-front">
                            <path d="M10 2h4" />
                            <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                            <path d="M7 14h.01" />
                            <path d="M17 14h.01" />
                            <rect width="18" height="8" x="3" y="10" rx="2" />
                            <path d="M5 18v2" />
                            <path d="M19 18v2" />
                        </svg>
                        <p className="text-3xl font-serif dark:text-slate-200">Taxi</p>
                    </div>
                )}

                <div className="flex flex-col md:flex-row items-center gap-10 justify-between">
                    <h1 className="text-3xl max-md:text-lg md:text-4xl text-center font-extrabold text-slate-800 dark:text-white">
                        Choose your package and save your slot
                    </h1>
                    <div className="flex md:flex-row gap-2 bg-slate-400 px-3 py-2 rounded-md">
                        <Button
                            onClick={() => handleAdTypeChange("billboard")}
                            className={`flex items-center align-middle gap-2 ${
                                selectedTypeOfAd === "billboard"
                                    ? "bg-slate-800 text-white border-slate-100 border-2 font-semibold shadow-lg dark:hover:text-slate-800"
                                    : "font-serif bg-slate-700 dark:text-slate-300 dark:hover:text-slate-800"
                            }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a19b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-tv">
                                <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
                                <polyline points="17 2 12 7 7 2" />
                            </svg>
                            <p>Billboard</p>
                        </Button>
                        <Button
                            onClick={() => handleAdTypeChange("taxi")}
                            className={`flex items-center align-middle gap-2 ${
                                selectedTypeOfAd === "taxi"
                                    ? "bg-slate-800 text-white border-slate-100 border-2 font-semibold shadow-lg dark:hover:text-slate-800"
                                    : "font-serif bg-slate-700 dark:text-slate-300 dark:hover:text-slate-800"
                            }`}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#a19b9b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car-taxi-front">
                                <path d="M10 2h4" />
                                <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                                <path d="M7 14h.01" />
                                <path d="M17 14h.01" />
                                <rect width="18" height="8" x="3" y="10" rx="2" />
                                <path d="M5 18v2" />
                                <path d="M19 18v2" />
                            </svg>
                            <p>Taxi</p>
                        </Button>
                    </div>
                </div>
                    <div className="p-6 md:p-10 w-full">
                        <CarouselSpacing adType={selectedTypeOfAd} />
                    </div>
            </ScrollArea>
        </main>
    );
};

export default CreateAd;
