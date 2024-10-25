
"use server"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }, {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }, {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }, {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    }, {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="w-full flex flex-col gap-5 p-4">
      <DataTable columns={columns} data={data} />
      <p className="font-light text-slate-800 font-serif dark:text-slate-400 text-center border-[0.5px] border-slate-500 dark:border-slate-100 text-sm rounded-sm px-3 "> your ad requests status</p>
    </div>
  )
}
