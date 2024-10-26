"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import BookAdImg from "@/public/asset/bookAd.jpg"

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
import Image from "next/image"
import Link from "next/link"

// Zod schema for form validation
const formSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
})

const LoginForDr: React.FC = () => {
    // Initialize form using the schema
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // Submit handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        alert("loged in succussfully")
        window.location.href = '/driver'
        console.log(values) // You can replace this with the login logic
    }

    return (
        <div className="flex h-screen w-screen">
            {/* Left Side: Image with Text */}
            <div className="hidden md:flex w-1/2 relative bg-slate-800">
                <Link href='/' className="md:text-3xl text-white font-heading font-bold z-50 md:p-8">Ad Ventures</Link>
                <Image
                    src={BookAdImg}
                    alt="Advertising Background"
                    layout="fill"
                    className="opacity-50"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                />
                <div className="absolute flex flex-col inset-0 bg-black bg-opacity-50 gap-5 items-center justify-center">
                    <h1 className="text-4xl font-bold text-white text-center">
                        Maximize your earnings with Ad Ventures!
                    </h1>
                    <Button className="bg-red-800"><Link href={`/drivers`}>Learn more</Link></Button>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="md:w-1/2 flex flex-col h-1/2 my-auto max-md:w-full">
                <Link href='/' className="max-sm:text:lg text-slate-900 absolute top-0 font-heading sm:hidden font-bold z-50 max-sm:p-8">Ad Ventures</Link>

                <p className="text-3xl font-bold text-gray-800 text-center mb-6">Login | <span className="text-red-800">Drivers</span></p>


                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 w-3/4 m-auto">
                        {/* Email Field */}
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="email@example.com" type="email" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Enter your registered email address.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        {/* Password Field */}
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="Enter your password" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        Your password must be at least 6 characters.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                            Log In
                        </Button>
                    </form>
                </Form>

                <p className="text-center text-gray-600 mt-4">
                    Do not have an account? <a href="/auth/drivers/signup" className="text-blue-600">Sign Up</a>
                </p>
            </div>
        </div>
    )
}

export default LoginForDr;
