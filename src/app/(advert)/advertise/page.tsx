import Chart from "./component/chart";
import Pichart from "./component/pieChart"
import TableTr from "./component/table"
import Table from "./component/tableAdv/table";
import { ScrollArea } from "@/components/ui/scroll-area"

const Advetise: React.FC = () => {
    return (
        <main className="z-10">
            <ScrollArea className="h-screen w-full px-14 pt-16 rounded-md border">
                <div className="bg-indigo-800 dark:bg-opacity-20 bg-opacity-15 rounded-md w-full mt-4 p-10">
                    <div className="text-center my-2">
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                            AdVentures Statistical Data
                        </h1>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="w-full"><Chart /></div>
                        <div className="w-full"><Pichart /></div>
                    </div>

                </div>
                <div className="bg-indigo-800 dark:bg-opacity-20 bg-opacity-15 rounded-md w-full mt-6 p-10">
                    <div className="flex flex-col items-centerw-full gap-6 p-10">
                        <div className="text-center my-2 ">
                            <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
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