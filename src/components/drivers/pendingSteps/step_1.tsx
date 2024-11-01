import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
    model: z.string().min(1, { message: "Taxi model is required" }),
    license: z.string().min(1, { message: "License number is required" }),
    specs: z.string().optional(),
});

interface TaxiInfo {
    model: string;
    license: string;
    specs?: string;
}

interface Step1Props{
    oneTOtwo: ()=> void;
}

const Step_1: React.FC<Step1Props> = ({ oneTOtwo }) => {
    const form = useForm<TaxiInfo>({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (values: TaxiInfo) => {
        alert('every thing is working properlly...')
        console.log(values);
        oneTOtwo(); // Call the function to navigate to the next step
      };
    return (
        <div className="flex flex-col gap-10 p-5">
            <div className="flex gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#0f56b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-taxi-front">
                    <path d="M10 2h4" />
                    <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                    <path d="M7 14h.01" />
                    <path d="M17 14h.01" />
                    <rect width="18" height="8" x="3" y="10" rx="2" />
                    <path d="M5 18v2" />
                    <path d="M19 18v2" />
                </svg>
                <p className="text-slate-800 text-2xl dark:text-slate-100 font-serif">
                    <strong>Step 1:</strong> Provide details about your taxi, including model, license number, and other specifications.
                </p>
            </div>

            <div className="w-3/4 m-auto">


                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <FormField
                            control={form.control}
                            name="model"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Taxi Model</FormLabel>
                                    <FormControl>
                                        <Input className="text-slate-800 dark:text-slate-100 border-slate-300" placeholder="Enter your taxi model" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="license"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>License Number</FormLabel>
                                    <FormControl>
                                        <Input className="text-slate-800 dark:text-slate-100 border-slate-300" placeholder="Enter your license number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="specs"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Other Specifications (Optional)</FormLabel>
                                    <FormControl>
                                        <Input className="text-slate-800 dark:text-slate-100 border-slate-300" placeholder="Enter any additional specifications" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button type="submit" className="w-full">
                            Submit Taxi Details
                        </Button>
                    </form>
                </Form>
            </div>

        </div>

    );
};

export default Step_1;
