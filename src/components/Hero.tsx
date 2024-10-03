import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import AboutUsImage from "@/public/asset/bookAd.jpg"

const Hero: React.FC = () => {
    return (
        <main className="flex flex-col max-md:px-2 gap-10 px-12">
            {/* hero section */}

            <div className="bg-slate-300 flex max-md:py-10 max-md:px-5 max-md:flex-col gap-10 md:p-10 items-center rounded-lg shadow-md ">
                <div className="px-10 w-full h-full">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <Image className="relative" width={800} height={800} src="https://www.bibiled.com/wp-content/uploads/2024/06/Taxi-LED-displays-help-progress-smart-cities-www.bibiled.com-1.jpg" alt="image" ></Image>
                            </CarouselItem>
                            <CarouselItem>
                                <Image width={800} height={800} src="https://www.ddw.net/uploads/image/65ea8d8d7c5fe.png" alt="image" ></Image>
                            </CarouselItem>
                            <CarouselItem>
                                <Image width={800} height={800} src="https://www.billups.com/hs-fs/hubfs/How%20Taxi%20and%20Rideshare%20Advertising%20Work%204%20(1).jpg?width=853&height=571&name=How%20Taxi%20and%20Rideshare%20Advertising%20Work%204%20(1).jpg" alt="image" ></Image>
                            </CarouselItem>
                        </CarouselContent>
                        <div className="absolute  pt-8">
                            <CarouselPrevious />
                            <CarouselNext />
                        </div>

                    </Carousel>

                </div>


                <div className="flex flex-col gap-4 justify-items-end">
                    <div className="flex gap-3">
                        <hr className="h-10 border-4 border-red-900" />
                        <p className="text-3xl font-semibold text-red-950">Ad Ventures</p>
                    </div>

                    <div className="tex">
                        <span className="text-xl">Revolutionize Your Advertising with Location-Based Targeting</span>
                        <p className="font-light">Welcome to Ad Ventures, where innovation meets precision in digital advertising. Our platform brings your brand closer to the right audience at the right time, leveraging high-resolution digital screens on taxis and billboards.</p>
                    </div>
                    <div className="">
                        <span className="text-xl">Drive Your Message to the Right Audience</span>
                        <p className="font-light">With Ad Ventures, you can take your advertising to the streets and beyond—connecting with your target market as they live, work, and play.</p>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger>
                                <Button className="bg-red-800">Get Started</Button>
                            </DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <DialogDescription>
                                        {/* driver or Ad cards */}
                                        <div className="flex flex-col items-center p-4 m-auto gap-10 text-center">
                                            <div className="flex flex-col gap-5">
                                                <h2 className="text-4xl font-semibold text-slate-900">Wellcome to AdVentures</h2>
                                                <p className="text-lg font-serif text-slate-900">
                                                    Whether you're a driver looking to earn passive income or a business looking for targeted ads, Ad Ventures has the solution for you!
                                                </p>
                                            </div>
                                            <div className="flex justify-between gap-10">

                                                <div className="flex flex-col gap-3">
                                                    <DialogTrigger><Button>For Drivers</Button></DialogTrigger>
                                                    <Link href='/drivers' className="text-blue-600"><DialogTrigger>Learn more</DialogTrigger></Link>
                                                </div>
                                                <div className="flex flex-col gap-3">
                                                    <DialogTrigger><Button>For Advertising</Button></DialogTrigger>
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
                </div>
            </div>

            {/* Trusted by section */}
            <div className="p-5">
                <div className="trustedBy w-full bg-navBg rounded-lg">
                    <p className="text-center text-3xl font-bold p-5 text-white">Trusted by</p>
                    <div className="flex max-md:flex-col max-md:items-center justify-center max-md:justify-center gap-5 p-6 ">
                        <Card >
                            <CardContent className="p-2">
                                <Image src={`https://images.ctfassets.net/4cd45et68cgf/4nBnsuPq03diC5eHXnQYx/d48a4664cdc48b6065b0be2d0c7bc388/Netflix-Logo.jpg`} alt="netflix" width={200} height={150} className="rounded-md"></Image>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>

            {/* driver or Ad cards */}
            <div className="bg-slate-100 py-10 rounded-md shadow-md">
                <div className="flex flex-col items-center w-1/2 m-auto text-balance gap-10 text-center">
                    <div className="flex flex-col gap-5">
                        <h2 className="text-4xl font-semibold">Wellcome to AdVentures</h2>
                        <p className="text-lg font-serif">
                            Whether you're a driver looking to earn passive income or a business looking for targeted ads, Ad Ventures has the solution for you!
                        </p>
                    </div>
                    <div className="flex justify-between gap-10">

                        <div className="flex flex-col gap-3">
                            <Button>For Drivers</Button>
                            <Link href='/drivers' className="text-blue-600">Learn more</Link>
                        </div>
                        <div className="flex flex-col gap-3">
                            <><Button>For Advertising</Button></>
                            <Link href='/book-ad' className="text-blue-600">Learn more</Link>
                        </div>
                    </div>
                    <hr className="border-[0.5px] w-1/2 border-slate-300" />
                </div>
            </div>


            {/* About us */}
            <div className="flex flex-col gap-5 bg-gray-100 py-10 rounded-md shadow-md p-10">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    {/* Left Side: About Us Information */}

                    <div className="md:w-1/2 p-4 flex flex-col gap-10">
                        <div className="flex gap-5">
                            <hr className="border-4 border-red-900 h-10 " />
                            <h1 className="text-4xl font-bold mb-4 text-gray-800">About Us</h1>
                        </div>

                        <div>
                            <p className="text-lg mb-4 text-gray-600">
                                At Ad Ventures, we are dedicated to transforming the advertising landscape for drivers and businesses. Our platform empowers drivers to increase their earnings effortlessly while offering advertisers unmatched access to a diverse audience.
                            </p>
                            <p className="text-lg mb-4 text-gray-600">
                                We believe in creating win-win opportunities, fostering innovation, and building lasting partnerships. Join us on our journey to reshape the future of advertising and unlock the full potential of your driving experience!
                            </p>
                        </div>

                    </div>

                    {/* Right Side: Image */}
                    <div className="md:w-1/2 flex justify-center">
                        <Image
                            src={AboutUsImage} // Replace with your actual image path
                            alt="About Us"
                            className="rounded-lg shadow-lg"
                            width={500} // Adjust width as needed
                            height={200} // Adjust height as needed
                        />
                    </div>
                </div></div>



            {/* testimonial */}
            <div className="p-5">
                <div className="trustedBy w-full bg-navBg rounded-lg p-">
                    <p className="text-center text-3xl font-bold p-5 text-white">Testimonial</p>
                    <div className="flex max-md:flex-col max-md:items-center max-md:justify-center gap-5 p-6 justify-between">

                        {/* card */}
                        <div className="font-[sans-serif] max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12 flex flex-col items-center">
                            <Image width={100} height={100} src="https://readymadeui.com/profile_2.webp" className="rounded-full" alt="badge"></Image>
                            <div className="mt-6 text-center">
                                <div>
                                    <h4 className="text-sm font-extrabold text-gray-800">Mark Adair</h4>
                                    <p className="text-xs text-gray-500 mt-0.5">Web Designer | Software hub PVT. LTD.</p>
                                </div>

                                <div className="mt-4">
                                    <h2 className="text-lg font-extrabold text-gray-800 mb-2">Amazing Design Inspiration</h2>
                                    <p className="text-sm text-gray-800 leading-relaxed">The service was amazing. I never had to wait that long for my food. The staff was friendly and attentive, and the delivery was impressively prompt.</p>
                                </div>

                                <div className="flex justify-center space-x-1 mt-4">
                                    <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 fill-[#facc15]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg className="w-5 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Hero;
