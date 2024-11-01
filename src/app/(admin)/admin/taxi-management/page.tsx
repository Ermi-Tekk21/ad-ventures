"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DriversData } from "@/utils/Data/DriversData";
import { useState } from "react";

const Page: React.FC = () => {
    const [isVisible, setIsVisible] = useState("active");

    const toggleToActive = () => setIsVisible("active");
    const toggleToPending = () => setIsVisible("pending");

    const pendingTaxiData = DriversData.filter((taxi) => taxi.status === "pending");
    const activeTaxiData = DriversData.filter((taxi) => taxi.status === "active");

    const handleAccept = (taxiId: string) => {
        console.log(`Accepted taxi with ID: ${taxiId}`);
    };

    const handleReject = (taxiId: string) => {
        console.log(`Rejected taxi with ID: ${taxiId}`);
    };

    return (
        <div className="flex flex-col items-center">
            {/* Toggle Buttons */}
            <div className="fixed py-2 z-30 pt-16 flex w-full gap-4 justify-center dark:bg-gray-900 bg-gray-50">
                <Button
                    className={`px-5 py-2 font-semibold rounded-md transition-all ${isVisible === "active" ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
                        }`}
                    onClick={toggleToActive}
                >
                    Active Taxis
                </Button>
                <Button
                    className={`px-5 py-2 font-semibold rounded-md transition-all ${isVisible === "pending" ? 'bg-blue-600 text-white shadow-lg' : 'bg-gray-300 text-gray-700 dark:bg-gray-700 dark:text-gray-200'
                        }`}
                    onClick={toggleToPending}
                >
                    Pending Taxis
                </Button>
            </div>
            <ScrollArea className="h-screen w-full px-10 pt-16 rounded-lg shadow-xl  bg-gray-50 dark:bg-gray-900">



                {/* Taxi Data Display */}
                <div className="grid grid-cols-1 pt-16 gap-6 text-gray-800 dark:text-gray-100">
                    {isVisible === "active" && (
                        <div className="grid gap-4 px-6">
                            {activeTaxiData.map((taxi, index) => (
                                <div
                                    key={index}
                                    className="p-6 rounded-lg bg-white dark:bg-gray-800 shadow-md transition-transform transform hover:scale-105"
                                >
                                    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
                                        Taxi #{taxi.taxiNumber}
                                    </h3>
                                    <p><span className="font-semibold">Status:</span> {taxi.status}</p>
                                    <p><span className="font-semibold">Driver:</span> {taxi.name}</p>
                                    <p><span className="font-semibold">email:</span> {taxi.email}</p>
                                    <p><span className="font-semibold">Working Area:</span> {taxi.workingArea}</p>
                                    <p><span className="font-semibold">Make:</span> {taxi.taxiSpec}</p>
                                    <div className="flex gap-2 mt-3">
                                        <button
                                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                        >
                                            Delete
                                        </button>
                                        <Button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
                                            View
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    {isVisible === "pending" && (
                        <div className="grid gap-4 px-6">
                            {pendingTaxiData.map((taxi, index) => (
                                <div
                                    key={index}
                                    className="p-6 flex flex-col gap-2 rounded-lg bg-gray-100 dark:bg-gray-700 shadow-md transition-transform transform hover:scale-105"
                                >
                                    <h3 className="text-lg font-semibold text-red-500 dark:text-red-400 mb-2">
                                        Taxi #{taxi.taxiNumber}
                                    </h3>
                                    <p><span className="font-semibold">Status:</span> {taxi.status}</p>
                                    <p><span className="font-semibold">Working Area:</span> {taxi.workingArea}</p>
                                    <p><span className="font-semibold">Requested Package ID:</span> <span className="bg-red-200 dark:bg-red-400 px-2 py-1 rounded-md animate-pulse">Pending Request</span></p>
                                    <p><span className="font-semibold">Speciication:</span> {taxi.taxiSpec}</p>
                                    <p><span className="font-semibold">Booked Date:</span> {taxi.BookedDate?.date || "N/A"}</p>
                                    <p><span className="font-semibold">Booked Time:</span> {taxi.BookedDate?.time || "N/A"}</p>

                                    {/* Accept/Reject Buttons */}
                                    <div className="flex gap-4 mt-4">
                                        <Button
                                            className="bg-green-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-green-700 transition"
                                            onClick={() => handleAccept(taxi.taxiNumber)}
                                        >
                                            Accept
                                        </Button>
                                        <Button
                                            className="bg-red-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 transition"
                                            onClick={() => handleReject(taxi.taxiNumber)}
                                        >
                                            Reject
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </ScrollArea>


        </div>
    );
};

export default Page;
