"use client"
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState } from "react";
import AdForm from "./components/AdForm";
import PaymentForm from "./components/PaymentForm";
import { Button } from "@/components/ui/button";


const ChooseThisPkg = ({ params }: {
  params: {
    adType: string; // Added adType to the params
    targetedPackage: string; // Added targetedPackage to the params
    targetedPkgPrice: number;
  }
}) => {
  const [step, setStep] = useState(1);

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
          <div>Chosen package is <span className="text-orange-600">{params.targetedPackage}</span></div>|
          {step === 1 && <span className="font-mono dark:text-slate-300 dark:bg-indigo-900 rounded shadow text-sm bg-slate-200 px-2">Fill your ad information</span>}
          {step === 2 && <span className="font-mono dark:text-slate-300 dark:bg-indigo-900 rounded shadow text-sm bg-slate-200 px-2">Fill payment information</span>}
        </div>
      )}
      <ScrollArea className="h-screen pt-28 w-full rounded-md border">
        <div className="flex justify-center">
          {step === 1 && (
            <div className="w-1/2">
              <AdForm handleNext={PaymentHandler} />
            </div>
          )}
          {step === 2 && (
            <div className="w-1/2">
              <PaymentForm handleNext={ThankHandler} price={params.targetedPkgPrice} />
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
