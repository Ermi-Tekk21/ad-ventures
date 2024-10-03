import React from "react";
import Image from "next/image";
import BookAdImage from "@/public/asset/bookAd.jpg"; // Replace with your actual image path

const BookAdSection: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center bg-gray-50 p-20">
            {/* Left Side: Text Information */}
            <div className="md:w-1/2 p-4">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">Book Your Ad Today!</h1>
                <p className="text-lg mb-4 text-gray-600">
                    Join the Ad Ventures family and start advertising your business on the go! Our platform offers a seamless booking process, allowing you to choose the perfect ad spot for your needs.
                </p>
                <h2 className="text-2xl font-semibold mb-2 text-gray-700">Easy Booking Steps:</h2>
                <ul className="list-disc list-inside mb-4 text-gray-600">
                    <li>Select your preferred advertising package.</li>
                    <li>Choose the location and duration for your ad.</li>
                    <li>Complete the booking process in just a few clicks!</li>
                </ul>
                <h2 className="text-2xl font-semibold mb-2 text-gray-700">Why Advertise with Us?</h2>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Reach a wider audience effortlessly.</li>
                    <li>Increase your brand visibility on the go.</li>
                    <li>Real-time tracking of your ad performance.</li>
                </ul>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src={BookAdImage} // Replace with your actual image path
                    alt="Book Your Ad with Ad Ventures"
                    className="rounded-lg shadow-lg"
                    width={500} // Adjust width as needed
                    height={300} // Adjust height as needed
                />
            </div>
        </div>
    );
};

export default BookAdSection;
