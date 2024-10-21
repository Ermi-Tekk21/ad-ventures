"use client";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { BiboardPackages, TaxiPackages } from "@/utils/data";
import { useEffect, useState } from "react";

// Define the Package interface
interface Package {
  name: string;
  price: string;
  impressions: number | string;
  support: string;
  mapUrls: string[];
  description: string;
}

const PackageDeatils = ({ params }: { params: { adType: string; packageId: string; } }) => {
  // Use the defined Package type in useState
  const [targetPkg, setTargetPkg] = useState<Package | null>(null);

  useEffect(() => {
    // Identify the package based on adType and packageId
    const findPackage = () => {
      let targetPkg: Package | undefined;
      if (params.adType === "bilboard") {
        targetPkg = BiboardPackages.find((pkg) => pkg.name.split(" ").join("") === params.packageId?.split("%20").join(""));
      } else {
        targetPkg = TaxiPackages.find((pkg) => pkg.name.split(" ").join("") === params.packageId?.split("%20").join(""));
      }
      setTargetPkg(targetPkg || null); // Set the found package or null if not found
    };

    findPackage();
  }, [params.adType, params.packageId]); // Re-run the effect when adType or packageId changes

  return (
    <main>
      <ScrollArea className="h-screen relative pt w-full rounded-md border">
        <div className="absolute z-30 w-full pt-16 pl-4 dark:bg-indigo-950 bg-slate-50">
          <h1 className="text-2xl font-bold dark:text-slate-50 text-slate-800 mb-2">Package Detail</h1>
          <hr className="w-1/2 border-[0.5px] border-white" />
        </div>
        <div className="p-8 pt-24 items-center">
          {targetPkg ? (
            <div className="w-full flex flex-col gap-2 m-auto rounded-lg border border-gray-200 shadow-md p-6 text-white opacity-80 hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-2">{targetPkg.name}</h2>
              <p className="text-xl font-semibold text-blue-600 mb-4">{targetPkg.price}</p>
              <ul className="dark:text-slate-100 text-slate-800 mb-4">
                <li className="mb-2">
                  <span className="font-bold">Impressions:</span> {targetPkg.impressions.toLocaleString()}
                </li>
                <li className="mb-2">
                  <span className="font-bold">Support:</span> {targetPkg.support}
                </li>
                <li className="">
                  <span className="font-bold">Ad Placements:</span> {targetPkg.mapUrls.length}
                </li>
              </ul>
              <hr />
              <ul className="flex gap-4 snap-x overflow-x-auto max-w-[1000px]">
                {targetPkg.mapUrls.map((url: string, index: number) => (
                  <li key={index} className="snap-start">
                    <iframe
                      src={url}
                      width="400"
                      height="250"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </li>
                ))}
              </ul>
              <p className="dark:text-slate-200 text-lg text-slate-800 mb-4">{targetPkg.description}</p>

              {/* Button to redirect */}
              <Button
                className="w-fit bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                onClick={() =>
                  window.location.href = `/advertise/create-ad/${params.adType}/${targetPkg.name.split(" ").join("")}/${targetPkg.name.split(" ").join("")}`}
              >
                Choose this package
              </Button>
            </div>
          ) : (
            <p className="text-center text-gray-500">Package not found</p>
          )}
        </div>
      </ScrollArea>
    </main>
  );
}

export default PackageDeatils;
