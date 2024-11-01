import { TaxiPackages } from "@/utils/Data/TaxiPackagesDetail";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";

// Define props interface
interface TargetedTaxiPkgProps {
    keyToFindPkg: string;
}

// Define TaxiPackage interface
interface TaxiPackage {
    id: string;
    type: string;
    workAreaofTaxi: string[];
    price: number;
    numberOfTaxiInvolved: number;
}

const TargetedTaxiPkg: React.FC<TargetedTaxiPkgProps> = ({ keyToFindPkg }) => {
    // Find the targeted taxi package by type
    const targetedPkg = TaxiPackages.find((pkg) => pkg.type === keyToFindPkg) as TaxiPackage | undefined;
    const pathname = usePathname();

    if (!targetedPkg) {
        return (
            <div className="flex justify-center items-center h-full p-6 text-gray-500 dark:text-gray-400">
                No taxi package found with type: <span className="font-bold ml-1">{keyToFindPkg}</span>
            </div>
        );
    }

    return (
        <div className="max-w-lg mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">
                Taxi Package Details
            </h2>
            <div className="space-y-4">
                <div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Package Type:</p>
                    <p className="text-gray-900 dark:text-gray-100">{targetedPkg.type}</p>
                </div>
                <div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Price:</p>
                    <p className="text-green-600 dark:text-green-400 font-semibold">${targetedPkg.price}</p>
                </div>
                <div>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-300">Number of Taxis Involved:</p>
                    <p className="text-gray-900 dark:text-gray-100">{targetedPkg.numberOfTaxiInvolved}</p>
                </div>
            </div>

            <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Work Areas Covered:</h3>
                <ul className="list-disc list-inside space-y-1">
                    {targetedPkg.workAreaofTaxi.map((area, index) => (
                        <li key={index} className="text-gray-600 dark:text-gray-400">
                            {area}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="py-3">
                {
                pathname.includes("/advertise") ? (
                    <Button onClick={() => { window.location.href = `${targetedPkg.type}/payment/${targetedPkg.price}` }} className="bg-green-600 text-white hover:font-semibold">Purchase this package</Button>
                ) : (
                    <Button className="bg-green-600 text-white">Edit</Button>
                )
                }
            </div>
        </div>
    );
};

export default TargetedTaxiPkg;
