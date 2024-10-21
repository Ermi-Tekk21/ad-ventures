import Chart from "./component/chart";
import Pichart from "./component/pieChart"
import TableTr from "./component/table"
import Table from "./component/tableAdv/table";
import { ScrollArea } from "@/components/ui/scroll-area"

const Advetise: React.FC = () => {
    return (
        <main className="z-10">
            <ScrollArea className="h-screen w-full pt-16 rounded-md border">
                <div className="flex items-center w-full gap-6 p-10">
                    <div className="w-full"><Chart /></div>
                    <div className="w-full"><Pichart /></div>
                </div>
                <div className="flex items-centerw-full gap-6 p-10">
                    <div className="w-full"><Table /></div>
                    <div className="w-full"><TableTr /></div>
                </div>
            </ScrollArea>
        </main>
    )
}
export default Advetise;