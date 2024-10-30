"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CreatedAd } from "@/utils/Data/CreatedAd";
import { DriversData } from "@/utils/Data/DriversData";
import { TaxisData } from "@/utils/Data/TaxisData";
import { useState } from "react";

interface TaxiSpec {
    make: string;
    model: string;
    year: number;
    color: string;
}

interface Taxi {
    id: string;
    status: string;
    owner: string;
    packageAssignedId: string;
    TaxiSpec: TaxiSpec;
}

interface PackageInvolvement {
    id: string;
    type: string;
    workAreaofTaxi: string[];
    price: number;
    numberOfTaxiInvolved: number;
}

interface Driver {
    profileImage: string;
    name: string;
    email: string;
    bio: string;
    taxiNumber: string;
    workingArea: string;
    hasBillboard: boolean;
    taxiSpec: string;
    status: string;
    pkgDrInvolvedIn: PackageInvolvement[];
    BookedDate?: {
        date: string;
        time: string;
    };
}

interface CreatedAd {
    id: string;
    createdBy: string;
    title: string;
    description: string;
    file: string;
    pkgType: string;
    status: string;
    price: number;
}

const Users: React.FC = () => {
    const [isAdClient, setIsAdClient] = useState(true);
    const [isAdDriver, setIsAdDriver] = useState(false);
    const [isCreatedAd, setIsCreatedAd] = useState(false);

    return (
        <main className="relative bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen p-4">
            <div className="absolute top-16 z-30 space-x-4 mb-4">
                <div className="mt-2 flex gap-4">
                    <Button
                        className={`${isAdClient ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                        onClick={() => { setIsAdClient(true); setIsAdDriver(false); setIsCreatedAd(false); }}
                    >
                        Ad Client
                    </Button>
                    <Button
                        className={`${isAdDriver ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                        onClick={() => { setIsAdClient(false); setIsAdDriver(true); setIsCreatedAd(false); }}
                    >
                        Ad Drivers
                    </Button>
                    <Button
                        className={`${isCreatedAd ? 'bg-blue-600 text-white' : 'bg-gray-300 dark:bg-gray-800 text-gray-700 dark:text-gray-300'}`}
                        onClick={() => { setIsAdClient(false); setIsAdDriver(false); setIsCreatedAd(true); }}
                    >
                        Created Ads
                    </Button>
                </div>
            </div>
            <ScrollArea className="h-[600px] pt-24 w-full rounded-lg border dark:border-gray-700">
                <div className="overflow-auto rounded-lg shadow-lg">
                    {isAdClient && (
                        <table className="min-w-full text-sm bg-white dark:bg-gray-800">
                            <thead className="bg-gray-200 dark:bg-gray-700">
                                <tr>
                                    <th className="py-3 px-4 text-left font-semibold">Owner</th>
                                    <th className="py-3 px-4 text-left font-semibold">Status</th>
                                    <th className="py-3 px-4 text-left font-semibold">Make</th>
                                    <th className="py-3 px-4 text-left font-semibold">Model</th>
                                    <th className="py-3 px-4 text-left font-semibold">Year</th>
                                    <th className="py-3 px-4 text-left font-semibold">Color</th>
                                    <th className="py-3 px-4 text-left font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {TaxisData.map((taxi: Taxi) => (
                                    <tr key={taxi.id} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-3 px-4">{taxi.owner}</td>
                                        <td className="py-3 px-4">{taxi.status}</td>
                                        <td className="py-3 px-4">{taxi.TaxiSpec.make}</td>
                                        <td className="py-3 px-4">{taxi.TaxiSpec.model}</td>
                                        <td className="py-3 px-4">{taxi.TaxiSpec.year}</td>
                                        <td className="py-3 px-4">{taxi.TaxiSpec.color}</td>
                                        <td className="py-3 px-4 flex gap-1">
                                            <button className="bg-red-600 px-1 py-1 text-white text-xs rounded">delete</button>
                                            <button className="bg-green-600 px-1 py-1 text-white  text-xs rounded">edit</button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {isAdDriver && (
                        <table className="min-w-full text-sm bg-white dark:bg-gray-800">
                            <thead className="bg-gray-200 dark:bg-gray-700">
                                <tr>
                                    <th className="py-3 px-4 text-left font-semibold">Name</th>
                                    <th className="py-3 px-4 text-left font-semibold">Email</th>
                                    <th className="py-3 px-4 text-left font-semibold">Working Area</th>
                                    <th className="py-3 px-4 text-left font-semibold">Taxi Spec</th>
                                    <th className="py-3 px-4 text-left font-semibold">Status</th>
                                    <th className="py-3 px-4 text-left font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {DriversData.map((driver: Driver) => (
                                    <tr key={driver.email} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-3 px-4">{driver.name}</td>
                                        <td className="py-3 px-4">{driver.email}</td>
                                        <td className="py-3 px-4">{driver.workingArea}</td>
                                        <td className="py-3 px-4">{driver.taxiSpec}</td>
                                        <td className="py-3 px-4">{driver.status}</td>
                                        <td className="py-3 px-4 flex gap-1">
                                            <button className="bg-red-600 px-1 py-1 text-white text-xs rounded">delete</button>
                                            <button className="bg-green-600 px-1 py-1 text-white  text-xs rounded">edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}

                    {isCreatedAd && (
                        <table className="min-w-full text-sm bg-white dark:bg-gray-800">
                            <thead className="bg-gray-200 dark:bg-gray-700">
                                <tr>
                                    <th className="py-3 px-4 text-left font-semibold">Title</th>
                                    <th className="py-3 px-4 text-left font-semibold">Created By</th>
                                    <th className="py-3 px-4 text-left font-semibold">Package Type</th>
                                    <th className="py-3 px-4 text-left font-semibold">Status</th>
                                    <th className="py-3 px-4 text-left font-semibold">Price</th>
                                    <th className="py-3 px-4 text-left font-semibold">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {CreatedAd.map((ad: CreatedAd) => (
                                    <tr key={ad.id} className="border-b dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700">
                                        <td className="py-3 px-4">{ad.title}</td>
                                        <td className="py-3 px-4">{ad.createdBy}</td>
                                        <td className="py-3 px-4">{ad.pkgType}</td>
                                        <td className="py-3 px-4">{ad.status}</td>
                                        <td className="py-3 px-4">${ad.price.toFixed(2)}</td>
                                        <td className="py-3 px-4 flex gap-1">
                                            <button className="bg-red-600 px-1 py-1 text-white text-xs rounded">delete</button>
                                            <button className="bg-green-600 px-1 py-1 text-white  text-xs rounded">edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </ScrollArea>
        </main>
    );
};

export default Users;
