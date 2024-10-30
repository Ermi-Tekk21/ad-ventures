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
import { Textarea } from "@/components/ui/textarea"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"

// Define form schema using zod
const formSchema = z.object({
    title: z.string().min(2, { message: "Title must be at least 2 characters" }).max(100, { message: "Title must be at most 100 characters" }),
    description: z.string().min(10, { message: "Description must be at least 10 characters" }).max(500, { message: "Description must be at most 500 characters" }),
    media: z
        .union([z.instanceof(FileList).optional(), z.undefined()])
        .refine(files => !files || files.length > 0, { message: "Please upload an image or video" }),
})

const AdForm = ({ handleNext}: { handleNext: () => void }) => {
    // Define the form using react-hook-form and zod schema
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
            media: undefined,
        },
    })

    // Handle form submission
    function onSubmit(values: z.infer<typeof formSchema>) {
        if (values) {
            // You can replace this with the logic to save the advertisement data to the database
            alert("Advertisement saved successfully!")
            handleNext()
            form.reset()
        }
        console.log(values)
    }

    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
                    {/* Title field */}
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel className="text-slate-900 dark:text-slate-100">Title</FormLabel>
                                <FormControl>
                                    <Input placeholder="Enter advertisement title" className="dark:border-slate-400 text-slate-600 dark:text-slate-100" {...field} />
                                </FormControl>
                                <FormDescription>
                                    The title of your advertisement.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Description field */}
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-slate-900 dark:text-slate-100">Description</FormLabel>
                                <FormControl>
                                    <Textarea placeholder="Enter advertisement description" className="dark:border-slate-400 text-slate-600 dark:text-slate-100" {...field} />
                                </FormControl>
                                <FormDescription>
                                    A short description of your advertisement.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Media (Image/Video) field */}
                    <FormField
                        control={form.control}
                        name="media"
                        render={({ field }) => (
                            <FormItem className="flex flex-col gap-5">
                                <FormLabel className="text-slate-900 dark:text-slate-100">Upload Media (Image or Video)</FormLabel>
                                <FormControl>
                                    <input
                                        type="file"
                                        accept="image/*,video/*"
                                        onChange={(e) => field.onChange(e.target.files)}
                                        className="text-slate-900 dark:text-slate-100 font-light"
                                    />
                                </FormControl>
                                <FormDescription>
                                    Upload an image or video to be displayed with your ad.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Submit Button */}
                    <Button type="submit">Submit Advertisement</Button>
                </form>
            </Form>
        </div>
    )
}

export default AdForm;
