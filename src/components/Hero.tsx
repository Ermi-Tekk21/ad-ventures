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
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"
import AboutUsImage from "@/public/asset/ad-4.jpg"
import { Testimonials, Trusted } from "@/utils/data"


const Hero: React.FC = () => {
    return (
        <main className="flex flex-col max-md:px-2 gap-10">
            {/* hero section */}
            <div className="flex w-full h-screen relative bg-slate-800">
                <Image
                    src={AboutUsImage}
                    alt="Advertising Background"
                    layout="fill"
                    className="opacity-50"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center flex-col gap-10">
                    <div className="flex justify-center items-center mt-10">
                        <div className="relative flex flex-col md:flex-row p-8 md:p-16 gap-10 items-center rounded-lg shadow-md mx-4 md:mx-16">

                            {/* Carousel Section */}
                            <div className="w-full md:w-1/2 h-full max-md:mt-20">
                                <Carousel>
                                    <CarouselContent className="opacity-80">
                                        <CarouselItem>
                                            <Image
                                                width={800}
                                                height={800}
                                                src="https://www.bibiled.com/wp-content/uploads/2024/06/Taxi-LED-displays-help-progress-smart-cities-www.bibiled.com-1.jpg"
                                                alt="image"
                                            />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <Image
                                                width={800}
                                                height={800}
                                                src="https://www.ddw.net/uploads/image/65ea8d8d7c5fe.png"
                                                alt="image"
                                            />
                                        </CarouselItem>
                                        <CarouselItem>
                                            <Image
                                                width={800}
                                                height={800}
                                                src="https://www.billups.com/hs-fs/hubfs/How%20Taxi%20and%20Rideshare%20Advertising%20Work%204%20(1).jpg"
                                                alt="image"
                                            />
                                        </CarouselItem>
                                    </CarouselContent>
                                    <div className="absolute bottom-7 right-14">
                                        <CarouselPrevious />
                                        <CarouselNext />
                                    </div>
                                </Carousel>
                            </div>

                            {/* Text Section */}
                            <div className="flex flex-col gap-5 text-white md:w-1/2">
                                <div className="flex gap-3">
                                    <hr className="h-10 border-4 border-red-900" />
                                    <p className="text-4xl max-md:text-2xl font-bold text-yellow-300">Ad Ventures</p>
                                </div>

                                <div className="text">
                                    <span className="text-xl max-md:text-lg font-semibold">Revolutionize Your Advertising with Location-Based Targeting</span>
                                    <p className="font-light max-md:hidden">
                                        Welcome to Ad Ventures, where innovation meets precision in digital advertising. Our platform brings your brand closer to the right audience at the right time, leveraging high-resolution digital screens on taxis and billboards.
                                    </p>
                                </div>

                                <div>
                                    <span className="text-xl max-md:text-lg font-semibold">Drive Your Message to the Right Audience</span>
                                    <p className="font-light max-md:hidden">
                                        With Ad Ventures, you can take your advertising to the streets and beyond—connecting with your target market as they live, work, and play.
                                    </p>
                                </div>

                                <div>
                                    <Dialog>
                                        <DialogTrigger>
                                            <Button className="bg-red-800 p-4 text-lg font-semibold">Get Started</Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogDescription>
                                                    <div className="flex flex-col items-center p-4 m-auto gap-10 text-center">
                                                        <div className="flex flex-col gap-5">
                                                            <h2 className="text-4xl font-semibold text-slate-900">Welcome to AdVentures</h2>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* driver or Ad cards */}
            <div className="flex flex-col md:w-1/2 items-center md:p-4 m-auto gap-10 text-center">
                <div className="flex flex-col gap-5">
                    <h2 className="text-4xl font-semibold text-slate-900">Wellcome to AdVentures</h2>
                    <p className="text-lg font-serif text-slate-900">
                        Whether you are a driver looking to earn passive income or a business looking for targeted ads, Ad Ventures has the solution for you!
                    </p>
                </div>
                <div className="flex justify-between gap-10">

                    <div className="flex flex-col gap-3">
                        <Button><Link href={`/auth/drivers/signup`}>For Drivers</Link></Button>
                        <Link href='/drivers' className="text-blue-600">Learn more</Link>
                    </div>
                    <div className="flex flex-col gap-3">
                        <Button><Link href={`/auth/book-ad/signup`}>For Advertising</Link></Button>
                        <Link href='/book-ad' className="text-blue-600">Learn more</Link>
                    </div>
                </div>
                <hr className="border-[0.5px] w-1/2 border-slate-300" />
            </div>

            {/* Trusted by section */}
            <div className="md:px-16 max-md:p-4">
                <div className="trustedBy w-full bg-navBg rounded-lg opacity-90">
                    <p className="text-center text-3xl font-bold p-5 text-white">Trusted by</p>
                    {/* testimonial */}
                    <div className="flex justify-center">
                        
                        <Carousel className="w-4/5">  {/* Full width and height */}
                        <CarouselContent className="flex">  {/* Use flex to align the items horizontally */}
                            {Trusted.map((item) => (
                                <CarouselItem key={item.id} className="flex-none w-1/ 3"> {/* Ensure each item takes 1/3 of the screen */}
                                    <div className="h-full py-8 px-6 max-sm:py-2">  {/* Padding adjusted for spacing */}
                                        <div className="py-6">
                                            <Image
                                                width={150}
                                                height={100}
                                                className="rounded-full max-md:w-36 right-0 left-0 mx-auto -top-7"
                                                src={item.image}
                                                alt="image"
                                            />
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>

                    </div>
                </div>
            </div>

            {/* About us */}
            <div className="flex flex-col gap-5 bg-gray-100 py-10 rounded-md shadow-md md:p-10 md:mx-16 max-md:mx-6">
                <div className="flex flex-col md:flex-row justify-center items-center">
                    {/* Left Side: About Us Information */}

                    <div className="md:w-1/2 p-4 flex flex-col gap-10">
                        <div className="flex gap-5">
                            <hr className="border-4 border-red-900 h-10 " />
                            <h1 className="text-4xl font-bold mb-4 text-gray-800">Who we are.</h1>
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
            <div className="flex flex-col gap-6">
                <div className="text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl font-extrabold text-gray-800">Testimonials</h2>
                    <p className="text-gray-800 mt-4 leading-relaxed">Hear from our satisfied clients and drivers who have experienced the power of Ad Ventures. From innovative advertising solutions to seamless driver partnerships, we’re committed to delivering value and success to everyone involved. Discover how our platform has transformed businesses and empowered drivers to earn more, effortlessly.</p>
                </div>
                <div className="flex justify-center"><Carousel className="md:w-4/5 max-md:w-3/4">  {/* Full width and height */}
                    <CarouselContent className="flex">  {/* Use flex to align the items horizontally */}
                        {Testimonials.map((person) => (
                            <CarouselItem key={person.id} className="flex-none md:w-1/3 max-md:w-full"> {/* Ensure each item takes 1/3 of the screen */}
                                <div className="h-full p-8">  {/* Padding adjusted for spacing */}
                                    <div className="w-full p-6 rounded-lg mx-auto shadow-[0_4px_14px_-6px_rgba(93,96,127,0.4)] bg-white relative">
                                        <Image
                            src={person.image} // Replace with your actual image path
                            alt="About Us"
                            className="w-14 h-14 rounded-full absolute right-0 left-0 mx-auto -top-7 shadow-lg"
                            width={500} // Adjust width as needed
                            height={200} // Adjust height as needed
                        />
                                        <div className="mt-6 text-center">
                                            <p className="text-sm text-gray-800 leading-relaxed">{person.description}</p>
                                        </div>
                                        <div className="mt-6 text-center">
                                            <h4 className="text-sm whitespace-nowrap font-bold">{person.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
                </div>
            </div>
        </main>
    )
}
export default Hero;
