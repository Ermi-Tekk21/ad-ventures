
import { ScrollArea } from "@/components/ui/scroll-area";
import { EarnPerMon } from "@/components/drivers/earnPerMonthChart";
import { DriversStat } from "@/utils/Data/platformStatics";
import { DriverEarning } from "@/utils/Data/DriversData";

const ActiveStatus: React.FC = () => {

    return (
        <div>
            <div className="">
                <ScrollArea className="h-screen w-full pt-16 px-10 rounded-md border">
                    <div className="bg-indigo-800 px-2 py-1 rounded-md mt-4 bg-opacity-20">
                        {/* Welcome Message */}
                        <div className="mb-6 px-6 py-4 mt-5 bg-slate-100 dark:bg-cardBg rounded-md shadow text-center text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-50">
                            Welcome driver! <span className="font-bold">The more you drive, the more you earn.</span>
                        </div>

                        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 px-8">

                            {/* Earnings Chart */}
                            <div className="w-full lg:w-1/2 p-8 bg- bg-slate-100 dark:bg-cardBg shadow rounded-md">
                                <EarnPerMon />
                            </div>

                            {/* Summary Stats */}
                            <div className="flex flex-col gap-6 lg:w-1/3 w-full text-slate-800 dark:text-slate-200">
                                <div className="flex flex-col gap-4">
                                    {DriversStat.map((item, index) => (
                                        <div key={index} className="flex items-center gap-4 p-4 md:px-6 md:py-5 bg-slate-50 dark:bg-cardBg border-2 border-slate-200 dark:border-slate-700 rounded-lg shadow">
                                            <div className="text-xl md:text-2xl font-bold dark:text-slate-50">
                                                {item.value}
                                            </div>
                                            <div className="text-lg md:text-xl font-mono text-slate-700 dark:text-slate-100">
                                                {item.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Total Earnings Card */}
                                <div className="p-4 md:p-6 bg-slate-50 dark:bg-cardBg border-2 border-slate-200 dark:border-slate-700 rounded-lg shadow">
                                    <div className="text-xl md:text-2xl font-bold dark:text-slate-50">
                                        Total Earnings
                                    </div>
                                    <div className="text-lg md:text-xl font-mono text-slate-700 dark:text-slate-100 mt-2">
                                        ${DriverEarning.TotalEarnings}
                                    </div>
                                    <p className="text-sm md:text-base text-slate-600 dark:text-slate-400">
                                        This is the total amount of money you have earned to date.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </ScrollArea>
            </div>
        </div>
    )
}

export default ActiveStatus;