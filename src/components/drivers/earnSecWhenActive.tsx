import { DriversData } from "@/utils/Data/DriversData";

const AdventuresEarningPage: React.FC = () => {
    const userInfo = DriversData[0];
    const PackageAssigned = userInfo.pkgDrInvolvedIn;

    return (
        <div className="relative flex flex-col items-center p-6 sm:p-8 lg:p-12 space-y-8">
            <header className="w-full bg-gradient-to-r from-blue-800 to-indigo-950 text-center py-4 text-3xl font-bold text-white dark:text-blue-300 shadow-md rounded-lg">
                Earnings - Package Details <span className="text-sm font-light">pkgs you are involved in</span>
            </header>

            {PackageAssigned.map((packageData, index) => (
                <div
                    key={index}
                    className="w-full max-w-4xl p-8 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-lg shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    <section className="mb-4">
                        <h2 className="text-2xl font-semibold text-blue-800 dark:text-blue-400 mb-2">{packageData.type}</h2>
                    </section>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-500 mb-2">Working Areas</h3>
                        <ul className="pl-5 list-disc space-y-2">
                            {packageData.workAreaofTaxi.map((area, index) => (
                                <li key={index} className="text-base font-medium text-gray-700 dark:text-gray-200">
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </section>

                    <section>
                        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-500 mb-2">Package Specifications</h3>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            <span className="font-semibold">{packageData.numberOfTaxiInvolved}</span> taxis involved in this package
                        </p>
                    </section>
                </div>
            ))}
        </div>
    );
};

export default AdventuresEarningPage;
