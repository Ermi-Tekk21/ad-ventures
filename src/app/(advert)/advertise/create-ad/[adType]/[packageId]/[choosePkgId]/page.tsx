"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { BiboardPackages, TaxiPackages } from "@/utils/data";
import { useState, useEffect } from "react";
import AdForm from "./components/AdForm";
import PaymentForm from "./components/PaymentForm";
import { Button } from "@/components/ui/button";

interface Package {
  name: string;
  price: string; // Keep this as a string to match the data source
  impressions: number | string;
  support: string;
  mapUrls: string[];
  description: string;
}

const ChooseThisPkg = ({ params }: {
  params: {
    adType: string; // Added adType to the params
    packageId: string;
  }
}) => {
  const [step, setStep] = useState(1);
  const [targetPkg, setTargetPkg] = useState<Package | null>(null);

  // Use useEffect to find the package based on adType (bilboard or taxi)
  useEffect(() => {
    let foundPackage: Package | undefined;
    
    if (params.adType === "bilboard") {
      foundPackage = BiboardPackages.find(pkg => pkg.name.replace(/\s+/g, "") === params.packageId.replace(/\s+/g, ""));
    } else if (params.adType === "taxi") {
      foundPackage = TaxiPackages.find(pkg => pkg.name.replace(/\s+/g, "") === params.packageId.replace(/\s+/g, ""));
    }
    
    setTargetPkg(foundPackage || null);
  }, [params.adType, params.packageId]);

  const PaymentHandler = () => {
    setStep(2);
  };

  const ThankHandler = () => {
    setStep(3);
  };

  return (
    <main className="relative">
      {step !== 3 && (
        <div className="absolute flex gap-9 items-center top-16 md:pl-5 z-30 bg-slate-50 w-full text-slate-900 dark:text-slate-100 text-xl font-serif dark:bg-indigo-950 border-b-[0.5px] border-indigo-600 py-2">
          <div>Chosen package is <span className="text-orange-600">{targetPkg?.name}</span></div>|
          {step === 1 && <span className="font-mono dark:text-slate-300 dark:bg-indigo-900 rounded shadow text-sm bg-slate-200 px-2">Fill your ad information</span>}
          {step === 2 && <span className="font-mono dark:text-slate-300 dark:bg-indigo-900 rounded shadow text-sm bg-slate-200 px-2">Fill payment information</span>}
        </div>
      )}
      <ScrollArea className="h-screen pt-28 w-full rounded-md border">
        <div className="flex justify-center">
          {step === 1 && (
            <div className="w-1/2">
              <AdForm handleNext={PaymentHandler}/>
            </div>
          )}
          {step === 2 && (
            <div className="w-1/2">
              <PaymentForm handleNext={ThankHandler} price={targetPkg?.price ?? "0"} />
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col text-slate-800 dark:text-slate-200 space-y-6 text-center">
              <h1 className="text-4xl font-bold">Thank You!</h1>
              <p className="text-lg">
                Your payment has been successfully processed. We appreciate your business!
              </p>
              <Button onClick={() => window.location.href = `/advertise`}>
                Back to Home
              </Button>
            </div>
          )}
        </div>
      </ScrollArea>
    </main>
  );
};

export default ChooseThisPkg;
