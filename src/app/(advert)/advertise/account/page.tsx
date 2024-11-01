"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { userInfo } from "@/utils/Data/UsersData/index";
import { EditProfile } from "./components/EditProfile";
import { Button } from "@/components/ui/button";
import Image from "next/image";


const Account: React.FC = () => {

    return (
        <main className="z-10 dark:bg-indigo-950">
            <ScrollArea className="h-screen w-full pt-16 rounded-md border">
                <div className="bg-gray-100 dark:bg-indigo-950 flex flex-col items-center p-6">
                    <div className="max-w-4xl w-full bg-white  dark:bg-opacity-10 dark:bg-none rounded-lg shadow-md p-8">
                        {/* Profile Header */}
                        <div className="flex flex-col items-center">    
                            <Image
                            src={userInfo.profileImage}
                            alt="Profile"
                            width={32}
                            height={32}
                            className="w-32 h-32 rounded-full shadow-md mb-4"></Image>
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

                    {/* Additional Info Section */}
                    <div className="mt-8 max-w-4xl w-full bg-white dark:bg-opacity-10 dark:bg-none rounded-lg shadow-md p-6">
                        <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">User Information</h3>
                        <div className="grid grid-cols-2 gap-6">
                            <div>
                                <h4 className="font-semibold dark:text-slate-200 text-gray-700">Username:</h4>
                                <p className="text-gray-600 dark:text-slate-300">{userInfo.name}</p>
                            </div>
                            <div>
                                <h4 className="font-semibold dark:text-slate-200 text-gray-700">Email:</h4>
                                <p className="text-gray-600 dark:text-slate-300">{userInfo.email}</p>
                            </div>
                            {/* Add more details as needed */}
                        </div>
                    </div>
                </div>
            </ScrollArea>
        </main>
    )
}

export default Account;