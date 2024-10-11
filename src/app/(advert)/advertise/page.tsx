// "use client"

type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
}

export const payments: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
    },
    {
        id: "489e1d42",
        amount: 125,
        status: "processing",
        email: "example@gmail.com",
    },
    // ...
]
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