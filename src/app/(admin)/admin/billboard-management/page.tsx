"use client";

import { DisplayLocation } from "@/components/advertise/displayLocation";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BillboardPackages } from "@/utils/Data/BillboardPackagesDetail";
import { BillboardsData } from "@/utils/Data/BillboardsData";
import { useState } from "react";

const Page: React.FC = () => {
    const [isActiveBillboards, setIsActiveBillboards] = useState(true);
    const [isInactiveBillboards, setIsInactiveBillboards] = useState(false);
    const [isAddNewBillboard, setIsAddNewBillboard] = useState(false);
    const [newBillboard, setNewBillboard] = useState({
        location: '',
        screenSize: '',
        packageAssignedId: '',
        status: 'active',
    });

    const handleToggleActiveBillboards = () => {
        setIsActiveBillboards(true);
        setIsInactiveBillboards(false);
        setIsAddNewBillboard(false);
    };

    const handleToggleInactiveBillboards = () => {
        setIsActiveBillboards(false);
        setIsInactiveBillboards(true);
        setIsAddNewBillboard(false);
    };

    const handleToggleAddNewBillboard = () => {
        setIsActiveBillboards(false);
        setIsInactiveBillboards(false);
        setIsAddNewBillboard(true);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setNewBillboard((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddBillboard = () => {
        console.log("Adding new billboard:", newBillboard);
        setNewBillboard({ location: '', screenSize: '', packageAssignedId: '', status: 'active' });
    };

    return (
        <div className="flex flex-col h-screen bg-white dark:bg-gray-800 transition-colors duration-300">
            <ScrollArea className="flex-1 pt-16 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-900 shadow-md transition-shadow duration-300">
                {/* Header */}
                <div className="mb-4">
                    <div className="flex justify-center gap-4">
                        <Button
                            onClick={handleToggleActiveBillboards}
                            className={isActiveBillboards ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" : "bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"}
                        >
                            <span className="max-md:text-sm">Active</span>
                        </Button>
                        <Button
                            onClick={handleToggleInactiveBillboards}
                            className={isInactiveBillboards ? "bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600" : "bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"}
                        >
                            <span className="max-md:text-sm">Inactive</span>
                        </Button>
                        <Button
                            onClick={handleToggleAddNewBillboard}
                            className={isAddNewBillboard ? "bg-green-600 text-white hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600" : "bg-gray-300 text-gray-800 hover:bg-gray-400 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"}
                        >
                            <span className="max-md:text-sm">Create</span>
                        </Button>
                    </div>

                </div>

                {/* Contents */}
                {isActiveBillboards && (
                    <div className="max-md:px-5 md:px-14">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Active Billboards</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {BillboardsData.filter(b => b.status === 'active').map(billboard => (
                                <div key={billboard.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-700">
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100"><span className="font-mono text-slate-400">Ad assigned:</span> {billboard.adAssigned}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Screen Size: {billboard.size}</p>
                                    <p className="text-gray-600 dark:text-gray-300">packageAssignedId: {billboard.packageAssignedId}</p>
                                    <DisplayLocation location={billboard.placement} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {isInactiveBillboards && (
                    <div className="max-md:px-5 md:px-14">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Inactive Billboards</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {BillboardsData.filter(b => b.status === 'inactive').map(billboard => (
                                <div key={billboard.id} className="p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-300 bg-gray-50 dark:bg-gray-700">
                                    <h3 className="font-bold text-gray-900 dark:text-gray-100"><span className="font-mono text-slate-400">Id:</span> {billboard.id}</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Screen Size: {billboard.size}</p>
                                    <DisplayLocation location={billboard.placement} />
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                {isAddNewBillboard && (
                    <div className="max-md:px-5 md:px-14">
                        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Add New Billboard</h2>
                        <form onSubmit={(e) => {
                            e.preventDefault();
                            handleAddBillboard();
                        }} className="space-y-4">
                            <input
                                type="text"
                                name="location"
                                placeholder="Location"
                                value={newBillboard.location}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                            />
                            <input
                                type="text"
                                name="screenSize"
                                placeholder="Screen Size"
                                value={newBillboard.screenSize}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                            />
                            <select
                                name="packageAssignedId"
                                value={newBillboard.packageAssignedId}
                                onChange={handleInputChange}
                                required
                                className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                            >{
                                    BillboardPackages.map((pkg, index) => (
                                        <option key={index} value={pkg.type}>{pkg.type}</option>
                                    ))
                                }
                            </select>
                            <select
                                name="status"
                                value={newBillboard.status}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded-md bg-gray-50 dark:bg-gray-800 dark:text-white border-gray-300 dark:border-gray-600"
                            >
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                            <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">Add Billboard</Button>
                        </form>
                    </div>
                )}
            </ScrollArea>
        </div>
    );
};

export default Page;
