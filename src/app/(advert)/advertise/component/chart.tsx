"use client"

import { ChartContainer, ChartLegend, ChartLegendContent, type ChartConfig } from "@/components/ui/chart"
import { ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { MonthlySubscribersStatics } from "@/utils/Data/platformStatics"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

const Chart: React.FC = () => {

    return (
        <main>
            <div className="">
                <ChartContainer config={chartConfig} className="h-1/2 w-full">
                    <BarChart accessibilityLayer data={MonthlySubscribersStatics
                    }>
                        <CartesianGrid vertical={false} />
                        <XAxis
                            dataKey="month"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip content={<ChartTooltipContent />} />
                        <ChartLegend content={<ChartLegendContent />} />
                        <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
                        <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
                    </BarChart>
                </ChartContainer>
                <p className="font-light  text-slate-700 dark:text-slate-500 text-center border-[0.5px] border-slate-500 dark:border-slate-100 text-sm rounded-sm px-3 ">Monthly subscriber to our platform</p>
            </div>
        </main>
    )
}
export default Chart;