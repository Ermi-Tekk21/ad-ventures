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
            <div className="flex max-md:flex-col items-center justify-around max-md:mx-5 gap-8">
                {/* Pricing Option 1 */}
                <div className="border border-gray-300 flex flex-col justify-center rounded-lg p-6 bg-white w-full shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Basic Package</h2>
                    <p className="text-xl text-gray-600">$99 / month</p>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                        <li>10,000 impressions</li>
                        <li>1 ad placement</li>
                        <li>Email support</li>
                    </ul>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
                        Book Now
                    </button>
                </div>

                {/* Pricing Option 2 */}
                <div className="border flex flex-col justify-center border-gray-300 rounded-lg p-6 w-full bg-white shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Standard Package</h2>
                    <p className="text-xl text-gray-600">$199 / month</p>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                        <li>25,000 impressions</li>
                        <li>2 ad placements</li>
                        <li>Priority email support</li>
                    </ul>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
                        Book Now
                    </button>
                </div>

                {/* Pricing Option 3 */}
                <div className="border flex flex-col justify-center border-gray-300 rounded-lg w-full p-6 bg-white shadow-md">
                    <h2 className="text-2xl font-bold mb-2 text-gray-800">Premium Package</h2>
                    <p className="text-xl text-gray-600">$299 / month</p>
                    <ul className="list-disc list-inside mb-4 text-gray-600">
                        <li>50,000 impressions</li>
                        <li>5 ad placements</li>
                        <li>24/7 support</li>
                    </ul>
                    <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-500 transition">
                        Book Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PricingSection;
