// pages/admin/dashboard.tsx
"use client";
import { useEffect, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";
import Chart from "@/app/(advert)/advertise/component/chart";
import Pichart from "@/app/(advert)/advertise/component/pieChart";
import { BillboardsData } from "@/utils/Data/BillboardsData";
import { TaxisData } from "@/utils/Data/TaxisData";


const Advetise: React.FC = () => {
    const [taxiStats, setTaxiStats] = useState({ total: 0, active: 0 });
    const [billboardStats, setBillboardStats] = useState({ total: 0, active: 0 });

    useEffect(() => {
        const totalBillboards = BillboardsData.length
        const activeBillboards = BillboardsData.filter(b => b.status === "active").length

        const totalTaxis = TaxisData.length
        const activeTaxis = TaxisData.filter(t => t.status === "active").length
        // Fetch taxi statistics (dummy data for illustration)
        setTaxiStats({ total: totalTaxis, active: activeTaxis }); // Replace with your API call

        // Fetch billboard statistics (dummy data for illustration)
        setBillboardStats({ total: totalBillboards, active: activeBillboards }); // Replace with your API call
    }, []);
    return (
        <main className="z-10">
            <ScrollArea className="h-screen w-full md:px-14 max-md:px-4 pt-16 rounded-md border">
                <div className="bg-indigo-800 dark:bg-opacity-20 bg-opacity-15 rounded-md w-full mt-6 p-10 shadow-lg transition-transform transform hover:scale-105 duration-300">
                    <div className="text-center">
                        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-slate-100 mb-1">
                            Admin Dashboard
                        </h1>
                    </div>
                </div>

                <div className="bg-indigo-800 dark:bg-opacity-20 bg-opacity-15 rounded-md w-full mt-4 p-10">
                    <div className="text-start my-2">
                        <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                            AdVentures Statistical Data
                        </h1>
                    </div>
                    <div className="flex max-md:flex-col items-center gap-6 md:p-5">
                        <div className="w-full"><Chart /></div>
                        <div className="w-full"><Pichart /></div>
                    </div>
                </div>
                <div className="bg-indigo-800 dark:bg-opacity-20 bg-opacity-15 rounded-md w-full mt-6 p-10">
                    <div className="flex flex-col items-centerw-full gap-6 p-10">
                        <div className="flex flex-col items-center p-">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                                {/* Taxi Management Card */}
                                <div className="bg-white dark:bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg flex flex-col items-center">
                                    <h2 className="text-xl font-semibold dark:text-white">Taxi Management</h2>
                                    <p className="text-gray-700 dark:text-gray-300">Total Taxis: {taxiStats.total}</p>
                                    <p className="text-gray-700 dark:text-gray-300">Active Taxis: {taxiStats.active}</p>
                                    <Link href="/admin/taxi-management" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                        Manage Taxis
                                    </Link>
                                </div>
                                {/* Billboard Management Card */}
                                <div className="bg-white dark:bg-gray-800 bg-opacity-70 p-4 rounded-lg shadow-lg flex flex-col items-center">
                                    <h2 className="text-xl font-semibold dark:text-white">Billboard Management</h2>
                                    <p className="text-gray-700 dark:text-gray-300">Total Billboards: {billboardStats.total}</p>
                                    <p className="text-gray-700 dark:text-gray-300">Active Billboards: {billboardStats.active}</p>
                                    <Link href="/admin/billboard-management" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                                        Manage Billboards
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </main>
    )
}
export default Advetise;