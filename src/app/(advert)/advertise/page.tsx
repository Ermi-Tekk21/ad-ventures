import Chart from "./component/chart";
import Pichart from "./component/pieChart"
import Table from "./component/tableAdv/table";
import { ScrollArea } from "@/components/ui/scroll-area"
import Link from "next/link";

const Advetise: React.FC = () => {
    return (
        <main className="z-10">
            <ScrollArea className="h-screen w-full max-md:px-6 px-14 pt-16 rounded-md border">
                <div className="bg-indigo-800 dark:bg-opacity-20 bg-opacity-15 rounded-md w-full mt-6 p-10 shadow-lg transition-transform transform hover:scale-105 duration-300">
                    <div className="text-center my-2">
                        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-slate-100 mb-2">
                            Advertise Your Business Here.
                        </h1>
                        <p className="text-lg text-slate-600 dark:text-slate-300">
                            Reach your audience with engaging ads and powerful insights.
                        </p>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Link
                            href={`advertise/create-ad`}
                            className="bg-indigo-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-indigo-500 transition duration-200"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>

                <div className="bg-indigo-800 dark:bg-opacity-20 bg-opacity-15 rounded-md w-full mt-4 max-md:p-4 p-10">
                    <div className="text-start my-2">
                        <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                            AdVentures Statistical Data
                        </h1>
                    </div>
                    <div className="flex items-center max-md:flex-col gap-6 p-5">
                        <div className="w-full"><Chart /></div>
                        <div className="w-full"><Pichart /></div>
                    </div>

                </div>
                <div className="bg-indigo-800 dark:bg-opacity-20 bg-opacity-15 rounded-md w-full mt-6 md:p-10">
                    <div className="flex flex-col items-centerw-full gap-6 max-md:p-4 p-10">
                        <div className="text-left my-2 ">
                            <h1 className="text-lg font-semibold text-slate-800 dark:text-slate-200">
                                your recent created Ads
                            </h1>
                        </div>
                        <div className="w-full"><Table /></div>
                    </div>

                </div>

            </ScrollArea>
        </main>
    )
}
export default Advetise;