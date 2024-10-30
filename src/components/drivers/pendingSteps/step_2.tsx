"use client";

import * as React from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { availableDates } from "@/utils/Data/AdminData";

// Zod schema for form validation
const formSchema = z.object({
    selectedDateId: z.number().min(1, { message: "Please select a date." }),
});

interface FormValues {
    selectedDateId: number;
}

interface step2Props {
    twoTOthree: () => void;
}

const Step_2: React.FC<step2Props> = ({ twoTOthree }) => {
    const [selectedDate, setSelectedDate] = useState<number | null>(null);

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            selectedDateId: 0,
        },
    });

    const onSubmit = (values: FormValues) => {
        const chosenDate = availableDates.find((date) => date.id === values.selectedDateId);
        alert(`${chosenDate} is choosen date..`)
        twoTOthree()
        console.log("Appointment confirmed for:", chosenDate);
    };

    return (
        <div className="flex flex-col gap-10 p-5">
            <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#0f56b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar">
                    <rect width="18" height="13" x="3" y="4" rx="2" />
                    <path d="M8 2v4" />
                    <path d="M16 2v4" />
                    <line x1="4" x2="20" y1="10" y2="10" />
                </svg>
                <p className="text-slate-800 text-2xl dark:text-slate-100 font-serif">
                    <strong>Step 2:</strong> Book an appointment at our office for the installation of your advertising screen.
                </p>
            </div>

            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                {/* Display available dates as cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {availableDates.map((date) => (
                        <Card
                            key={date.id}
                            className={`p-4 border ${selectedDate === date.id ? "border-primary shadow-lg" : "border-muted"
                                }`}
                            onClick={() => {
                                setSelectedDate(date.id);
                                form.setValue("selectedDateId", date.id);
                            }}
                        >
                            <CardHeader>
                                <CardTitle>{date.date}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground">{date.time}</p>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    variant={selectedDate === date.id ? "default" : "outline"} // Use valid variants
                                    onClick={() => setSelectedDate(date.id)}
                                >
                                    {selectedDate === date.id ? "Selected" : "Select"}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Submit Button */}
                <Button type="submit" className="w-full">
                    Confirm Appointment
                </Button>
            </form>
        </div>

    );
};

export default Step_2;
