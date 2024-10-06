import React from "react";
import Image from "next/image";
import DriverImage from "@/public/asset/bookAd.jpg";
import DriverImage1 from "@/public/asset/ad-2.jpg";
import DriverImage2 from "@/public/asset/ad-3.jpg";
import DriverImage3 from "@/public/asset/ad-4.jpg";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const DriverPage: React.FC = () => {
    return (
        <main className="md:px-24 flex flex-col gap-4 py-16">
            <div className="flex flex-col items-center gap-4 pt-20 max-md:px-8">
                <h1 className="text-4xl font-semibold">for taxi drivers and owners</h1>
                <p className="text-lg font-light">
                    Maximize Your earn, The more you drive the more you earn
                </p>
                <div className="w-1/3 flex gap-2 items-center">
                    <hr className="border-[0.5px] w-1/2 border-red-600" />
                    <p className="text-3xl">,,</p>
                    <hr className="border-[0.5px] w-1/2 border-red-600" />
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center p-8 bg-gray-50 rounded-md shadow-md">
                {/* Left Side: About Us Information */}
                <div className="md:w-1/2 p-4 flex flex-col gap-6">
                    <div className="flex gap-5">
                        <hr className="border-4 border-red-900 h-10 " />
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Monetize Your Commute</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg mb-4 text-gray-600">
                            Turn your daily commute into a source of income. By displaying ads on your vehicle, you can earn passive income without any extra effort.
                        </p>
                        <p className="text-lg mb-4 text-gray-600">
                            Whether you are driving around the city for work or errands, your vehicle becomes a mobile billboard, helping you earn while you’re on the go. It’s a simple and flexible way to boost your income with no added hassle.
                        </p>
                        <Button className="w-1/4 bg-red-700 font-extrabold md:text-lg"><Link href={`/auth/drivers/signup`}>Register</Link></Button>
                    </div>
                </div>

                {/* Right Side: Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src={DriverImage1} // Replace with your actual image path
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
                        src={DriverImage3} // Replace with your actual image path
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
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Earn While You Drive</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg mb-4 text-gray-600">
                            With Ad Ventures, every mile you drive is an opportunity to make money. We connect drivers with brands looking for innovative advertising solutions, allowing you to get paid just for being on the road.
                        </p>
                        <p className="text-lg mb-4 text-gray-600">
                            It is an easy and profitable way to use your car, with no upfront costs or special requirements – just drive as you normally would!
                        </p>
                    </div>

                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center p-8 pt-20 bg-gray-100 rounded-md shadow-md">
                {/* Left Side: About Us Information */}
                <div className="md:w-1/2 p-4 flex flex-col gap-6">
                    <div className="flex gap-5">
                        <hr className="border-4 border-red-900 h-10 " />
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Drive with Purpose, Earn with Ease.</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg mb-4 text-gray-600">
                            Your vehicle is more than just a way to get from point A to point B. By partnering with Ad Ventures, you are joining a network of drivers making a real impact. With every trip, you’re helping brands reach their target audience, and in return, you get to enjoy the rewards.
                        </p>
                        <p className="text-lg mb-4 text-gray-600">
                            It is a win-win situation that transforms your everyday driving into something with real purpose. </p>
                    </div>

                </div>

                {/* Right Side: Image */}
                <div className="md:w-1/2 flex justify-center">
                    <Image
                        src={DriverImage} // Replace with your actual image path
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
                        src={DriverImage2} // Replace with your actual image path
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
                        <h1 className="text-4xl font-bold mb-4 text-gray-800">Flexible and Hassle-Free</h1>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-lg mb-4 text-gray-600">
                            We know your schedule is important, which is why driving with Ad Ventures is completely flexible. Whether you drive full-time or part-time, you can choose when and how much you want to participate.
                        </p>
                        <p className="text-lg mb-4 text-gray-600">
                            We handle the setup, and you simply get paid for the time you’re on the road – no complicated commitments, just easy earnings on your terms.
                        </p>
                    </div>

                </div>
            </div>
            <div className="flex flex-col gap-7 items-center text-center m-auto md:p-16 max-md:p-5">
                <p className="text-2xl  font-serif">Don’t let your daily drive go to waste. Turn your vehicle into a moving billboard and earn passive income.  With no upfront costs, no hassle, and total flexibility, there is no reason to miss out on this opportunity. Whether you are driving full-time or part-time, every trip can bring in extra income with ease.</p>
                <h1 className="text-3xl font-semibold">Join our <span className="text-red-800">diver network</span></h1>
                <Button className="w-1/4 bg-red-700 font-extrabold text-xl"><Link href={`/auth/drivers/signup`} className="py-3">Join Now</Link></Button>

            </div>
        </main>
    );
};

export default DriverPage;
