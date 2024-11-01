"use client";

import TargetedTaxiPkg from "@/components/advertise/targetedTaxiPkg";
import TargetedBillboardPkg from "@/components/advertise/targetedBillboardPkg";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define the props for PackageDetails component
interface PackageDetailsProps {
  params: {
    adType: string;
    targetedPackage: string;
  };
}

const PackageDetails: React.FC<PackageDetailsProps> = ({ params }) => {
  const adKey = params.adType;
  const PkgKey = params.targetedPackage; // string

  return (
    <main>
      <ScrollArea className="h-screen pt-16 w-full rounded-md border">
        <div className="py-2">
          {adKey === "billboard" && (
            <div className="">
              <TargetedBillboardPkg keyToFindPkg={PkgKey} />
            </div>
          )}

          {adKey === "taxi" && (
            <div className="">
              <TargetedTaxiPkg keyToFindPkg={PkgKey} />
            </div>
          )}
        </div>
      </ScrollArea>

    </main>
  );
};

export default PackageDetails;
