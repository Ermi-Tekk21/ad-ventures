import { useState } from "react";
import { Button } from "@/components/ui/button";
interface stepZeroProps {
    zeroTOone: () => void;
}
const Step_0: React.FC<stepZeroProps> = ({ zeroTOone }) => {

    const [acceptedTerms, setAcceptedTerms] = useState(false);

    const handleCheckboxChange = () => {
        zeroTOone()
        setAcceptedTerms(!acceptedTerms);
    };
    return (
        <div className="flex w-3/4 m-auto items-center h-screen justify-center flex-col space-y-4 text-center">
            <p className="text-lg text-muted-foreground">
                Your account is awaiting activation. Please follow the steps below to get started:
            </p>
            <ul className="list-decimal list-inside space-y-4 text-left">
                <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0f56b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-car-taxi-front">
                        <path d="M10 2h4" />
                        <path d="m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8" />
                        <path d="M7 14h.01" />
                        <path d="M17 14h.01" />
                        <rect width="18" height="8" x="3" y="10" rx="2" />
                        <path d="M5 18v2" />
                        <path d="M19 18v2" />
                    </svg>
                    <p className="text-slate-800 dark:text-slate-100">
                        <strong>Step 1:</strong> Provide details about your taxi, including model, license number, and other specifications.
                    </p>
                </li>
                <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0f56b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-calendar">
                        <rect width="18" height="13" x="3" y="4" rx="2" />
                        <path d="M8 2v4" />
                        <path d="M16 2v4" />
                        <line x1="4" x2="20" y1="10" y2="10" />
                    </svg>
                    <p className="text-slate-800 dark:text-slate-100">
                        <strong>Step 2:</strong> Book an appointment at our office for the installation of your advertising screen.
                    </p>
                </li>
                <li className="flex gap-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#0f56b3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail">
                        <path d="M22 12l-10 7L2 12" />
                        <path d="M22 5H2v14h20V5z" />
                    </svg>
                    <p className="text-slate-800 dark:text-slate-100">
                        <strong>Step 3:</strong> Once you complete the above steps, our staff will send you an approval notification via email.
                    </p>
                </li>
            </ul>
            <div className="flex items-center space-x-2 mt-4">
                <input
                    type="checkbox"
                    id="accept-terms"
                    className="w-4 h-4 border-gray-300 rounded text-primary focus:ring-primary"
                    checked={acceptedTerms}
                    onChange={handleCheckboxChange}
                />
                <label htmlFor="accept-terms" className="text-sm text-slate-800 dark:text-slate-100">
                    I agree to the <a href="/privacy-policy" className="text-primary underline">Privacy Policy</a> and <a href="/terms" className="text-primary underline">Terms of Service</a>.
                </label>
            </div>
            <Button
                className={`mt-4 px-6 py-3 rounded-md transition-all duration-300 ${acceptedTerms ? "bg-primary text-white hover:bg-primary-dark" : "bg-gray-400 text-gray-200 cursor-not-allowed"
                    }`}
                disabled={!acceptedTerms}
            >
                Start the Process
            </Button>
        </div>
    )
}
export default Step_0;