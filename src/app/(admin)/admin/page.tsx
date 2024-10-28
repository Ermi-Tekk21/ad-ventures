// pages/admin/dashboard.tsx
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const Dashboard: React.FC = () => {
    const [taxiStats, setTaxiStats] = useState({ total: 0, active: 0 });
    const [billboardStats, setBillboardStats] = useState({ total: 0, active: 0 });

    useEffect(() => {
        // Fetch taxi statistics (dummy data for illustration)
        setTaxiStats({ total: 50, active: 30 }); // Replace with your API call

        // Fetch billboard statistics (dummy data for illustration)
        setBillboardStats({ total: 20, active: 15 }); // Replace with your API call
    }, []);

    return (
        <div className="flex flex-col items-center p-">
            <h1 className="text-3xl font-extrabold dark:text-white">Dashboard</h1>
            <hr className="border-slate-800 w-full my-4" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-4xl">
                {/* Taxi Management Card */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl font-semibold dark:text-white">Taxi Management</h2>
                    <p className="text-gray-700 dark:text-gray-300">Total Taxis: {taxiStats.total}</p>
                    <p className="text-gray-700 dark:text-gray-300">Active Taxis: {taxiStats.active}</p>
                    <Link href="/admin/taxi-management" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Manage Taxis
                    </Link>
                </div>

                {/* Billboard Management Card */}
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl font-semibold dark:text-white">Billboard Management</h2>
                    <p className="text-gray-700 dark:text-gray-300">Total Billboards: {billboardStats.total}</p>
                    <p className="text-gray-700 dark:text-gray-300">Active Billboards: {billboardStats.active}</p>
                    <Link href="/admin/billboard-management" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                        Manage Billboards
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
