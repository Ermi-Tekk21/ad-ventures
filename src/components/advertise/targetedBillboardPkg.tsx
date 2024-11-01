import { BillboardPackages } from "@/utils/Data/BillboardPackagesDetail";
import { DisplayLocation } from "./displayLocation";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

// Define props interface
interface TargetedBillboardPkgProps {
    keyToFindPkg: string;
}


// Define interfaces for Billboard and BillboardPackage
interface Billboard {
    id: string;
    size: string;
    placement: string;
    status: "active" | "inactive";
    packageAssignedId: string | null;
    adAssigned: string[] | null;
}

interface BillboardPackage {
    id: string;
    type: string;
    impressions: number;
    placement: number;
    billboardAssigned: Billboard[];
    pricePerMonth: number;
}

const TargetedBillboardPkg: React.FC<TargetedBillboardPkgProps> = ({ keyToFindPkg }) => {
    const pathname = usePathname()
    console.log("keyToFindPkg: ", keyToFindPkg);

    // Find the targeted package by type
    const targetedPkg = BillboardPackages.find((pkg) => pkg.type === keyToFindPkg) as BillboardPackage | undefined;

    if (!targetedPkg) {
        return (
            <div className="flex justify-center items-center h-full p-6 text-gray-500 dark:text-gray-400">
                No billboard package found with type: <span className="font-bold ml-1">{keyToFindPkg}</span>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Billboard Package Details
            </h2>
            <div className="space-y-4">
                <div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Package Type:</p>
                    <p className="text-gray-900 dark:text-gray-100">{targetedPkg.type}</p>
                </div>
                <div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Monthly Impressions:</p>
                    <p className="text-gray-900 dark:text-gray-100">{targetedPkg.impressions}</p>
                </div>
                <div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Placement Priority:</p>
                    <p className="text-gray-900 dark:text-gray-100">{targetedPkg.placement}</p>
                </div>
                <div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Price per Month:</p>
                    <p className="text-green-600 dark:text-green-400 font-semibold">${targetedPkg.pricePerMonth}</p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Assigned Billboards:</h3>
                <div className="grid gap-4 md:grid-cols-2">
                    {targetedPkg.billboardAssigned.map((billboard) => (
                        <div
                            key={billboard.id}
                            className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-sm"
                        >
                            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                                ID: <span className="text-gray-900 dark:text-gray-100">{billboard.id}</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Size: <span className="text-gray-900 dark:text-gray-100">{billboard.size}</span>
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Status:
                                <span className={`ml-1 font-semibold ${billboard.status === "active" ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}`}>
                                    {billboard.status}
                                </span>
                            </p>
                            <div className="py-4">
                                <DisplayLocation location={billboard.placement} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="py-3">
                {
                    pathname.includes("/advertise") ? (
                        <Button onClick={() => { window.location.href = `${targetedPkg.type}/payment/${targetedPkg.pricePerMonth}` }} className="bg-green-600 text-white hover:font-semibold">Purchase this package</Button>
                    ) : (
                        pathname.includes("/admin") && (<Button className="bg-green-600 text-white px-6">Edit</Button>)
                    )
                }
            </div>

        </div>
    );
};

export default TargetedBillboardPkg;
