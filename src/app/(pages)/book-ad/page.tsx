import React from "react";
import Image from "next/image";
import BookAdImage from "@/public/asset/bookAd.jpg"; // Replace with your actual image path
import { Button } from "@/components/ui/button";

const BookAdSection: React.FC = () => {
    return (
        <main className="px-24 flex flex-col gap-4 py-16">
            <div className="flex flex-col items-center gap-4 pt-20">
                <h1 className="text-4xl font-semibold">for brands and agencies</h1>
                <p className="text-lg font-light">
                    Maximize Your Brand Exposure with Our Innovative Advertising Solutions
                </p>
                <div className="w-1/3 flex gap-2 items-center">
                    <hr className="border-[0.5px] w-1/2 border-red-600" />
                    <p className="text-3xl">,,</p>
                    <hr className="border-[0.5px] w-1/2 border-red-600" />
                </div>

            </div>
            <div className="p-8 pt-20 bg-gray-50 rounded-md shadow-md">
                <div className="flex flex-col md:flex-row justify-center items-center ">
                    {/* Left Side: About Us Information */}
                    <div className="md:w-1/2 p-4 flex flex-col gap-6">
                        <div className="flex gap-5">
                            <hr className="border-4 border-red-900 h-10 " />
                            <h1 className="text-4xl font-bold mb-4 text-gray-800">Location-Based Advertising</h1>
                        </div>
                        <div className="flex flex-col">
                            <p className="text-lg mb-4 text-gray-600">
                                Reach your audience exactly where they are, at the right moment. Our GPS-enabled advertising solutions, such as taxi-tops and billboards, allow you to target specific locations with precision.
                            </p>
                            <p className="text-lg mb-4 text-gray-600">

                                Whether you want to advertise in busy downtown areas or specific neighbourhoods, we provide the flexibility to pinpoint your audience and deliver impactful messages that get results.
                            </p>
                <Button className="bg-red-600 p-4 w-1/4">See pricing</Button>

                        </div>

                    </div>

                    {/* Right Side: Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src={BookAdImage} // Replace with your actual image path
                            alt="About Us"
                            className="rounded-lg shadow-lg"
                            width={500} // Adjust width as needed
                            height={300} // Adjust height as needed
                        />
                    </div>
                </div>

            </div>

            <div className="flex flex-col md:flex-row justify-center items-center p-8 pt-20 bg-gray-100 rounded-md shadow-md">
                {/* Right Side: Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src={BookAdImage} // Replace with your actual image path
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                        width={500} // Adjust width as needed
                        height={300} // Adjust height as needed
                    />
                </div>
                {/* Left Side: About Us Information */}
                <div className="md:w-1/2 p-4 flex flex-col gap-6">
                    <div className="flex gap-5">
                        <hr className="border-4 border-red-900 h-10 " />
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">High-Impact Visibility</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg mb-4 text-gray-600">
                            Make sure your brand stands out. With large, eye-catching billboards and dynamic taxi-top screens, your message will be hard to miss.
                        </p>
                        <p className="text-lg mb-4 text-gray-600">
                            Our advertising platforms give you high-visibility placements in areas with heavy foot traffic, ensuring that your brand captures attention and leaves a lasting impression. It's more than just reaching people – it's making a strong visual impact.
                        </p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center p-8 pt-20 bg-gray-100 rounded-md shadow-md">
                {/* Left Side: About Us Information */}
                <div className="md:w-1/2 p-4 flex flex-col gap-6">
                    <div className="flex gap-5">
                        <hr className="border-4 border-red-900 h-10 " />
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Real-Time Performance Tracking</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg mb-4 text-gray-600">
                            Stay informed with real-time data on how your ads are performing. Our platform provides detailed insights into ad impressions, audience reach, and engagement metrics, so you can see exactly how your campaigns are driving results.
                        </p>
                        <p className="text-lg mb-4 text-gray-600">
                            You’ll be able to monitor and optimize your campaigns in real-time, ensuring that your advertising dollars are working effectively and efficiently.</p>
                    </div>

                </div>

                {/* Right Side: Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src={BookAdImage} // Replace with your actual image path
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                        width={500} // Adjust width as needed
                        height={300} // Adjust height as needed
                    />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center p-8 pt-20 bg-gray-100 rounded-md shadow-md">
                {/* Right Side: Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src={BookAdImage} // Replace with your actual image path
                        alt="About Us"
                        className="rounded-lg shadow-lg"
                        width={500} // Adjust width as needed
                        height={300} // Adjust height as needed
                    />
                </div>
                {/* Left Side: About Us Information */}
                <div className="md:w-1/2 p-4 flex flex-col gap-6">
                    <div className="flex gap-5">
                        <hr className="border-4 border-red-900 h-10 " />
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Reach Your Audience with Precision</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg mb-4 text-gray-600">
                            No more guesswork—our platform ensures that your ads are seen by the right people. Whether you're looking to target commuters on the road or pedestrians in high-traffic areas, we help you engage customers where they spend the most time.
                        </p>
                        <p className="text-lg mb-4 text-gray-600">
                            This precision helps to maximize your return on investment by putting your ads directly in front of your target audience.
                        </p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-7 items-center text-center m-auto p-16">
                <p className="text-2xl  font-serif">Don’t settle for traditional ads that miss the mark. With Ad Ventures, you can reach your audience where they are, when it matters most. Our cutting-edge, location-based advertising ensures your message gets in front of the right people – whether it's on billboards, taxi-tops, or digital platforms. Boost your brand's visibility and engage customers like never before.</p>
                <h1 className="text-3xl font-semibold">Ready to boost your market<span className="text-red-800">diver network</span></h1>
                <Button className="bg-red-600 p-6 text-3xl font-bold text-white">Book Ad</Button>
            </div>
        </main>
    );
};

export default BookAdSection;
