import React from "react";
import Image from "next/image";
import AboutUsImage from "@/public/asset/ad-6.jpg"; // Replace with your actual image path
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const AboutUsSection: React.FC = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center items-center p-8 pt-20 bg-gray-100">
            {/* Left Side: About Us Information */}
            <div className="md:w-1/2 p-4">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 max-md:pt-10">About Us</h1>
                <p className="text-lg mb-4 text-gray-600">
                    At Ad Ventures, we are dedicated to transforming the advertising landscape for drivers and businesses. Our platform empowers drivers to increase their earnings effortlessly while offering advertisers unmatched access to a diverse audience.
                </p>
                <p className="text-lg mb-4 text-gray-600">
                    We believe in creating win-win opportunities, fostering innovation, and building lasting partnerships. Join us on our journey to reshape the future of advertising and unlock the full potential of your driving experience!
                </p>
                <Dialog>
                    <DialogTrigger>
                        <Button className="bg-red-800 text-3xl font-extrabold p-8">Join us</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogDescription>
                                {/* driver or Ad cards */}
                                <div className="flex flex-col items-center p-4 m-auto gap-10 text-center">
                                    <div className="flex flex-col gap-5">
                                        <h2 className="text-4xl font-semibold text-slate-900">Wellcome to AdVentures</h2>
                                        <p className="text-lg font-serif text-slate-900">
                                            Whether you are a driver looking to earn passive income or a business looking for targeted ads, Ad Ventures has the solution for you!
                                        </p>
                                    </div>
                                    <div className="flex justify-between gap-10">

                                        <div className="flex flex-col gap-3">
                                            <DialogTrigger><Button><Link href={`/auth/drivers/signup`}>For Drivers</Link></Button></DialogTrigger>
                                            <Link href='/drivers' className="text-blue-600"><DialogTrigger>Learn more</DialogTrigger></Link>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <DialogTrigger><Button><Link href={`/auth/book-ad/signup`}>For Advertising</Link></Button></DialogTrigger>
                                            <Link href='/book-ad' className="text-blue-600"><DialogTrigger>Learn more</DialogTrigger></Link>
                                        </div>
                                    </div>
                                    <hr className="border-[0.5px] w-1/2 border-slate-300" />
                                </div>
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
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
