import { userInfo } from "@/utils/data/driver/driverData";

const PackageAssigned = userInfo.pkgDrInvolvedIn

const AdventuresEarningPage: React.FC = () => {
    return (
        <div className="relative flex flex-col gap-4">
                                <h1 className="fixed text-2xl font-bold mb-4 text-blue-800 dark:text-blue-500 bg-indigo-950 w-full">Earnings - Package Details</h1>

            {PackageAssigned.map((packageData, index) => (
                <div key={index} className="max-w-4xl mx-auto px-6 py-10 bg-white dark:bg-opacity-5 rounded-lg shadow-lg">
                    <section className="mb-6">
                        <h2 className="text-2xl font-semibold text-blue-700 dark:text-blue-600">{packageData.name}</h2>
                        <p className="text-lg dark:text-slate-300 text-gray-700">{packageData.price}</p>
                        <p className="text-md dark:text-slate-300 text-gray-600 mt-2">{packageData.description}</p>
                    </section>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-600">Package Specifications</h3>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li className="dark:text-slate-300"><strong>Impressions:</strong> {packageData.impressions.toLocaleString()}</li>
                            <li className="dark:text-slate-300"><strong>Taxi Ads:</strong> {packageData.taxiAds}</li>
                            <li className="dark:text-slate-300"><strong>Ad Duration:</strong> {packageData.adDuration}</li>
                            <li className="dark:text-slate-300"><strong>Support:</strong> {packageData.support}</li>
                        </ul>
                    </section>

                    <section className="mb-6">
                        <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-600">Map Locations | <span className="text-sm font-light dark:text-slate-100">around where the taxis give a service and promotes</span></h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            {packageData.mapUrls.map((url, index) => (
                                <div>

                                    <iframe
                                        key={index}
                                        src={url}
                                        width="100%"
                                        height="250"
                                        className="border-2 border-gray-200 rounded-lg"
                                        loading="lazy"
                                        allowFullScreen
                                    ></iframe>
                                </div>



                            ))}
                        </div>
                    </section>
                </div>
            ))}
        </div>
    )
}
export default AdventuresEarningPage;

