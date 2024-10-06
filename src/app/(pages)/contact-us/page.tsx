"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import ContactUsImage from "@/public/asset/ad-3.jpg"
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Image from "next/image"

const formSchema = z.object({
    name: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({ message: "Invalid email address." }),
    message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

const ContactUs: React.FC = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            email: "",
            message: "",
        },
    })

    const onSubmit = (data: any) => {
        console.log("Submitted Data:", data)
    }

    return (
        <div className="flex flex-col md:flex-row justify-around items-center bg-gray-100 md:p-8 pt-32 md:px-32 md:pt-32">
            {/* Left Image Section */}
            <div className="flex-1 max-md:hidden">
                <Image
                    src={ContactUsImage} // Replace with your actual image path
                    alt="About Us"
                    className="rounded-lg shadow-lg w-[500px] has-[300px]:"
                    width={500} // Adjust width as needed
                    height={300} // Adjust height as needed
                />
            </div>

            {/* Right Form Section */}
            <div className="flex-1 bg-white flex-col max-md:py-10 md:py-20 px-5">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Your Name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="your-email@example.com" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Message</FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Your message..." {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Send Message</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}

export default ContactUs