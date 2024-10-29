"use server"
import { CreatedAd } from "@/utils/Data/CreatedAd"
import { Payment, columns } from "./columns"
import { DataTable } from "./data-table"

// Function to fetch data
async function getData(): Promise<Payment[]> {
  // Filter ads created by user4@email.com and return them
  return CreatedAd.filter(ad => ad.createdBy === "ermias@example.com").map(ad => ({
    ...ad,
    status: ad.status as "active" | "pending" | "declined" | "success",
  }));
}

// Main component for the demo page
export default async function DemoPage() {
  const data = await getData();

  return (
    <div className="w-full flex flex-col gap-5 p-4">
      <DataTable columns={columns} data={data} />
      <p className="font-light text-slate-800 font-serif dark:text-slate-400 text-center border-[0.5px] border-slate-500 dark:border-slate-100 text-sm rounded-sm px-3">
        Your ad requests status
      </p>
    </div>
  );
}
