"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { EditProfile } from "@/app/(advert)/advertise/account/components/EditProfile";
import { DriversData } from "@/utils/Data/DriversData";
import Image from "next/image";

const DriverAccount: React.FC = () => {
    const userInfo = DriversData[0];
    return (
        <main className="z-10 dark:bg-indigo-950">
            <ScrollArea className="h-screen w-full pt-16 rounded-md border">
                <div className="bg-gray-100 dark:bg-indigo-950 flex flex-col items-center p-6">
                    <div className="max-w-4xl w-full bg-white dark:bg-opacity-10 dark:bg-none rounded-lg shadow-md p-8">
                        {/* Profile Header */}
                        <div className="flex flex-col items-center">
                            <div className="w-36 h-36 rounded-full shadow-md mb-4 border-4 border-gray-300 flex items-center justify-center">
                                <Image
                                    src={userInfo.profileImage}
                                    alt="Profile"
                                    width={32}
                                    height={32}
                                    className="w-32 h-32 rounded-full"></Image>
                            </div>


                            <h2 className="text-3xl dark:text-white font-bold text-gray-900">{userInfo.name}</h2>
                            <p className="text-gray-600 dark:text-slate-50 mb-4">{userInfo.email}</p>
                            <p className="text-center dark:text-slate-100 text-gray-700">{userInfo.bio}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex justify-center mt-6 space-x-4">
                            <EditProfile user={userInfo} />
                            <Button
                                onClick={() => window.location.href = `/auth/book-ad/login`}
                                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors duration-200">
                                Log Out
                            </Button>
                        </div>
                    </div>

                    {/* Driver Information Section */}
                    <div className="mt-8 max-w-4xl w-full bg-white dark:bg-opacity-10 dark:bg-none rounded-lg shadow-md p-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Driver Information</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold dark:text-slate-200 text-gray-700">Taxi Number:</h4>
                                <p className="text-gray-600 dark:text-slate-300">{userInfo.taxiNumber}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold dark:text-slate-200 text-gray-700">Working Area:</h4>
                                <p className="text-gray-600 dark:text-slate-300">{userInfo.workingArea}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold dark:text-slate-200 text-gray-700">Has Billboard:</h4>
                                <p className="text-gray-600 dark:text-slate-300">
                                    {userInfo.hasBillboard ? "Yes" : "No"}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-semibold dark:text-slate-200 text-gray-700">Taxi Specification:</h4>
                                <p className="text-gray-600 dark:text-slate-300">{userInfo.taxiSpec}</p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 max-w-4xl w-full bg-white dark:bg-opacity-10 dark:bg-none rounded-lg shadow-md p-6">
                        <div className="mt-4 w-full">
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">
                                Packages Assigned to the Driver (You)
                            </h3>
                            {/* Flex container for the packages */}
                            <div className="flex justify-center flex-wrap gap-4">
                                {userInfo.pkgDrInvolvedIn.map((pkg, index) => (
                                    <div
                                        key={index}
                                        className="flex-1 min-w-[250px] max-w-[350px] p-4 bg-gray-50 dark:bg-indigo-950 shadow-lg rounded-lg 
                   hover:bg-indigo-100 dark:hover:bg-indigo-800 transition-colors duration-300 border dark:border-gray-700"
                                    >
                                        <div className="flex flex-col space-y-2">
                                            <div className="text-indigo-600 dark:text-indigo-300 font-semibold text-lg">
                                                {pkg.type}
                                            </div>
                                            <div className="text-gray-600 dark:text-gray-400 text-sm">
                                                <ol>
                                                    <strong>working areas</strong>
                                                    {pkg.workAreaofTaxi.map((area, index) => (
                                                        <li className="pl-3" key={index}>
                                                            {area}
                                                        </li>
                                                    ))}
                                                </ol>

                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </main>
    );
};

export default DriverAccount;
