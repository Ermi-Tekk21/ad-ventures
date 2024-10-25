"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import BookAdImg from "@/public/asset/bookAd.jpg"

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
import Image from "next/image"
import Link from "next/link"

// Zod schema for form validation
const formSchema = z.object({
    fullName: z.string().min(2, "Full name must be at least 2 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().min(6, "Password must be at least 6 characters long"),
    country: z.string().min(2, "Country is required"),
})

const SignUpForDr: React.FC = () => {
    // Initialize form using the schema
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
            country: "",
        },
    })

    // Submit handler
    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
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
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col gap-10">
                    <h1 className="text-4xl font-bold text-white text-center">
                        Maximize your earnings with Ad Ventures!
                    </h1>
                    <Button className="bg-red-800"><Link href={`/drivers`}>Learn more</Link></Button>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="w-1/2 max-md:w-full h-3/4 max-md:pt-20 md:pt-10 flex flex-col gap-8">

                <Link href='/' className="max-sm:text:lg text-slate-900 absolute top-0 font-heading sm:hidden font-bold z-50 max-sm:p-8">Ad Ventures</Link>

                <p className="text-3xl font-bold text-gray-800 text-center mb-6">Signup | <span className="text-red-800">Drivers</span></p>

                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 w-3/4 m-auto">
                        {/* Full Name Field */}
                        <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Full Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="John Doe" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

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
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Country Field */}
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Country of residence" {...field} />
                                    </FormControl>
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
                                        <Input type="password" placeholder="Create a strong password" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Password Field */}
                        <FormField
                            control={form.control}
                            name="confirmPassword"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Confirm Password</FormLabel>
                                    <FormControl>
                                        <Input type="password" placeholder="confirm" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
                            Sign Up
                        </Button>
                    </form>
                </Form>

                <p className="text-center text-gray-600 mt-4">
                    Already have an account? <a href="/auth/drivers/login" className="text-blue-600">Log In</a>
                </p>
            </div>
        </div>
    )
}

export default SignUpForDr;









