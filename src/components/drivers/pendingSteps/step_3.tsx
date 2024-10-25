"use client";

import { Button } from "@/components/ui/button";

const Step_3: React.FC = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-10">
            <div className="flex gap-3 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="#0f56b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail">
                    <path d="M22 12l-10 7L2 12" />
                    <path d="M22 5H2v14h20V5z" />
                </svg>
                <p className="text-slate-800 text-2xl font-serif dark:text-slate-100">
                    <strong>Step 3:</strong> Once you complete the above steps, our staff will send you an approval notification via email.
                </p>
            </div>
            <div className="flex justify-center items-center">

                <div className="max-w-md w-full bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        Approval Status
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Your submission is under review. You will receive an approval email once everything has been verified.
                    </p>
                    <Button
                        onClick={() => window.location.href = '/driver'}
                        className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                        Go to Dashboard
                    </Button>
                </div>
            </div>
        </div>

    );
};

export default Step_3;
