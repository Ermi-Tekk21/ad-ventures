import { BillboardPackages } from "@/utils/Data/BillboardPackagesDetail";
import { TaxiPackages } from "@/utils/Data/TaxiPackagesDetail";
import React from "react";

const PricingSection: React.FC = () => {
    return (
        <div className="pt-40 md:px-20 pb-10">
            <div className="flex flex-col md:px-16 text-center justify-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Affordable Pricing Plans</h1>
                <p className="text-lg max-md:px-2 mb-4 text-gray-600">
                    At Ad Ventures, we offer competitive pricing plans to suit all types of advertisers. Choose the perfect package for your needs and start reaching your audience today!
                </p>
            </div>

            {/* Pricing Options */}
            <h1 className="font-semibold md:text-lg py-4">Taxi Packages</h1>
            <div className="flex max-md:flex-col items-center justify-around max-md:mx-5 gap-8">
                {TaxiPackages.map((txPkg, index) => (
                    <div key={index} className="border border-gray-300 flex flex-col justify-center rounded-lg p-6 bg-white w-full shadow-md">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">{txPkg.type}</h2>
                        <p className="text-xl text-gray-600">${txPkg.price} / month</p>
                        <ul className="list-disc list-inside mb-4 text-gray-600">
                            <li>{txPkg.numberOfTaxiInvolved} taxis involved</li>
                            <li>taxis working area</li>
                            <ul className="pl-5">{txPkg.workAreaofTaxi.map((area, index) => (
                                <li className="text-sm font-light" key={index}>
                                    {area}
                                </li>
                            ))}</ul>
                        </ul>
                    </div>
                ))}

            </div>

            {/* Pricing Options */}
            <h1 className="font-semibold md:text-lg py-4">Billboard Packages</h1>
            <div className="flex max-md:flex-col items-center justify-around max-md:mx-5 gap-8">
                {BillboardPackages.map((BBPkg, index) => (
                    <div key={index} className="border border-gray-300 flex flex-col justify-center rounded-lg p-6 bg-white w-full shadow-md">
                        <h2 className="text-2xl font-bold mb-2 text-gray-800">{BBPkg.type}</h2>
                        <p className="text-xl text-gray-600">${BBPkg.pricePerMonth} / month</p>
                        <ul className="list-disc list-inside mb-4 text-gray-600">
                            <li>{BBPkg.impressions} impressions</li>
                            <li>{BBPkg.placement} placement</li>

                        </ul>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default PricingSection;
