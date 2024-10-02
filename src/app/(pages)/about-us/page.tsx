import React from "react";
import Image from "next/image";
import AboutUsImage from "@/public/asset/bookAd.jpg"; // Replace with your actual image path

const AboutUsSection: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-8 pt-20 bg-gray-100">
            {/* Left Side: About Us Information */}
            <div className="md:w-1/2 p-4">
                <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
                <p className="text-lg mb-4 text-gray-600">
                    At Ad Ventures, we are dedicated to transforming the advertising landscape for drivers and businesses. Our platform empowers drivers to increase their earnings effortlessly while offering advertisers unmatched access to a diverse audience.
                </p>
                <p className="text-lg mb-4 text-gray-600">
                    We believe in creating win-win opportunities, fostering innovation, and building lasting partnerships. Join us on our journey to reshape the future of advertising and unlock the full potential of your driving experience!
                </p>
            </div>

            {/* Right Side: Image */}
            <div className="md:w-1/2 flex justify-center">
                <Image
                    src={AboutUsImage} // Replace with your actual image path
                    alt="About Us"
                    className="rounded-lg shadow-lg"
                    width={500} // Adjust width as needed
                    height={300} // Adjust height as needed
                />
            </div>
        </div>
    );
};

export default AboutUsSection;
