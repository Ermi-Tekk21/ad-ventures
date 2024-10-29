"use client"

import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// Define schema using zod for validation
const formSchema = z.object({
    cardholderName: z.string().min(2, { message: "Cardholder name must be at least 2 characters" }).max(50, { message: "Cardholder name must be at most 50 characters" }),
    cardNumber: z.string().regex(/^\d{16}$/, { message: "Card number must be exactly 16 digits" }),
    expirationDate: z.string().regex(/^(0[1-9]|1[0-2])\/\d{2}$/, {
        message: "Expiration date must follow the format MM/YY, with a valid month (01-12).",
    }),
    cvv: z.string().regex(/^\d{3,4}$/, { message: "CVV must be 3 or 4 digits" }),
})

const PaymentForm = ({ handleNext, price }: { handleNext: () => void; price: number }) => {
    // Define the form with react-hook-form and zod schema
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cardholderName: "",
            cardNumber: "",
            expirationDate: "",
            cvv: "",
        },
    })

    // Handle form submission
    function onSubmit(values: z.infer<typeof formSchema>) {
        alert("Payment submitted successfully!");
        handleNext();
        console.log(values);
        // Here you can handle payment logic (e.g., call your payment API)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Cardholder Name */}
                <FormField
                    control={form.control}
                    name="cardholderName"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900 dark:text-slate-100">Cardholder Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" className="dark:border-slate-400 text-slate-600 dark:text-slate-100" {...field} />
                            </FormControl>
                            <FormDescription>
                                The name as it appears on your card.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Card Number */}
                <FormField
                    control={form.control}
                    name="cardNumber"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900 dark:text-slate-100">Card Number</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="1234 5678 9012 3456" className="dark:border-slate-400 text-slate-600 dark:text-slate-100" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter the 16-digit card number.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Expiration Date */}
                <FormField
                    control={form.control}
                    name="expirationDate"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900 dark:text-slate-100">Expiration Date</FormLabel>
                            <FormControl>
                                <Input type="text" className="dark:border-slate-400 text-slate-600 dark:text-slate-100" placeholder="MM/YY" {...field} />
                            </FormControl>
                            <FormDescription>
                                Enter the expiration date in MM/YY format.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* CVV */}
                <FormField
                    control={form.control}
                    name="cvv"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="text-slate-900 dark:text-slate-100">CVV</FormLabel>
                            <FormControl>
                                <Input type="text" className="dark:border-slate-400 text-slate-600 dark:text-slate-100" placeholder="123" {...field} />
                            </FormControl>
                            <FormDescription>
                                The 3 or 4 digit security code on the back of your card.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Submit Button */}
                <Button type="submit">Submit Payment <span className="text-slate-100 bg-green-600 mx-2 px-2 rounded">${price}</span></Button>
            </form>
        </Form>
    )
}

export default PaymentForm;
