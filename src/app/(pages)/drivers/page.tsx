import React from "react";
import Image from "next/image";
import DriverImage from "@/public/asset/bookAd.jpg"; // Replace with your actual image path

const DriverPage: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-gray-100 pt-20">
            {/* Left Side: Text Information */}
            <div className="md:w-1/2 p-4">
                <h1 className="text-4xl font-bold mb-4">Become an Ad Ventures Driver!</h1>
                <p className="text-lg mb-4">
                    Join our platform to turn your vehicle into a mobile advertising space. By participating, you can earn extra income while you drive!
                </p>
                <h2 className="text-2xl font-semibold mb-2">How It Works:</h2>
                <ul className="list-disc list-inside mb-4">
                    <li>Sign up and create your driver profile.</li>
                    <li>Choose when and where to display ads.</li>
                    <li>Get paid based on the time and locations you drive.</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2">Benefits:</h2>
                <ul className="list-disc list-inside">
                    <li>Increase your earnings with minimal effort.</li>
                    <li>Flexible schedule to fit your lifestyle.</li>
                    <li>Access to real-time performance tracking.</li>
                </ul>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src={DriverImage} // Replace with your actual image path
                    alt="Driver with Ad Ventures"
                    className="rounded-lg shadow-lg"
                    width={500} // Adjust width as needed
                    height={300} // Adjust height as needed
                />
            </div>
        </div>
    );
};

export default DriverPage;
