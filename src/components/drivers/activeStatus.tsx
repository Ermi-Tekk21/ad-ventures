
import { ScrollArea } from "@/components/ui/scroll-area";
import { EarnPerMon } from "@/components/drivers/earnPerMonthChart";
import { TableDemo } from "@/components/drivers/currentAd";
import { useState, useEffect } from "react";

const ActiveStatus: React.FC = () => {



    // State to manage visibility
    const [isVisible, setIsVisible] = useState(true);
    // useEffect to hide content after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false); // Hide content after 5 seconds
        }, 5000);

        // Clean up the timer if the component unmounts
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <div className="relative">
                <div className="absolute top-16 overflow-hidden h-64 w-full">
                    {isVisible && ( // Conditionally render based on isVisible state
                        <div className="w-full items-end flex gap-2 h-auto animate-move-left-right">
                            <p className="text-slate-800 font-mono font-light dark:text-slate-200">Hello Drivers</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#7e7777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide border-b-2 border-yellow-700 lucide-car"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2" /><circle cx="7" cy="17" r="2" /><path d="M9 17h6" /><circle cx="17" cy="17" r="2" /></svg>
                        </div>
                    )}{/* scroll heading */}
                    {!isVisible && (
                        <div className="text-slate-800 pt-2 flex justify-around">
                            <div className="flex gap-4 bg-slate-50 md:py-4 md:px-8 border-2 rounded-lg dark:bg-cardBg items-center">
                                <div className="text-slate-800 border-b-2 dark:text-slate-100 font-mono">1200

                                    <span className="text-slate-800 text-2xl dark:text-slate-50 font-bold"> plus </span>
                                    drivers</div>
                            </div>

                            <div className="flex gap-4 bg-slate-50 md:py-4 md:px-8 border-2 rounded-lg dark:bg-cardBg items-center">
                                <div className="text-slate-800 border-b-2 dark:text-slate-100 font-mono">
                                    <span className="text-slate-800 text-2xl dark:text-slate-50 font-bold">over </span>
                                    1500

                                    Ads</div>
                            </div>


                            <div className="flex gap-4 bg-slate-50 md:py-4 md:px-8 border-2 rounded-lg dark:bg-cardBg items-center">
                                <div className="text-slate-800 border-b-2 dark:text-slate-100 font-mono">
                                    <span className="text-slate-800 text-2xl dark:text-slate-50 font-bold">over </span>    189

                                    client</div>
                            </div>
                        </div>
                    )}
                </div>
                <ScrollArea className="h-screen w-full pt-36 rounded-md border">
                    <div className="flex justify-around">
                        <div className="w-3/5 px-16 py-10">
                            <EarnPerMon />
                        </div><div className="w-3/5  px-16 py-10">
                            <TableDemo />
                        </div>
                    </div>
                </ScrollArea>
            </div>
        </div>
    )
}

export default ActiveStatus;