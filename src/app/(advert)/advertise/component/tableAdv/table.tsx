
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
      <p className="font-light text-slate-800 font-serif font dark:text-slate-700">Monthly subscriber to our platform</p>
    </div>
  )
}
