
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

const Hero: React.FC = () => {
    return (
        <main className="md:px-8 flex flex-col max-md:px-2 gap-10">
            <div className="bg-slate-300 flex max-md:py-10 max-md:px-5 max-md:flex-col gap-10 md:p-10  items-center rounded-lg shadow-md">
                <div className="px-10 w-full h-full">
                    <Carousel>
                        <CarouselContent>
                            <CarouselItem>
                                <Image width={800} height={800} src="https://www.bibiled.com/wp-content/uploads/2024/06/Taxi-LED-displays-help-progress-smart-cities-www.bibiled.com-1.jpg" alt="image" ></Image>
                            </CarouselItem>
                            <CarouselItem>
                                <Image width={800} height={800} src="https://www.ddw.net/uploads/image/65ea8d8d7c5fe.png" alt="image" ></Image>
                            </CarouselItem>
                            <CarouselItem>
                                <Image width={800} height={800} src="https://www.billups.com/hs-fs/hubfs/How%20Taxi%20and%20Rideshare%20Advertising%20Work%204%20(1).jpg?width=853&height=571&name=How%20Taxi%20and%20Rideshare%20Advertising%20Work%204%20(1).jpg" alt="image" ></Image>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
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
                                    <DialogTitle className='mb-5'>Describe Your Role.</DialogTitle>
                                    <DialogDescription className='flex gap-8 justify-around'>
                                        <div><Card>
                                            <CardHeader>

                                                <CardDescription>do u want to advertise? click below</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Button>Book Ad</Button>
                                            </CardContent>
                                        </Card>
                                        </div>
                                        <div><Card>
                                            <CardHeader>

                                                <CardDescription>join us and make more money</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <Button>Driver</Button>
                                            </CardContent>

                                        </Card>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
            <div className="md:p-5">
                <div className="trustedBy w-full bg-navBg rounded-lg">
                    <p className="text-center text-3xl font-bold p-5 text-white">Trusted by</p>
                    <div className="flex max-md:flex-col max-md:items-center max-md:justify-center gap-5 p-6 justify-between">
                        <Card>
                            <CardHeader>

                                <CardDescription>do u want to advertise? click below</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button>Book Ad</Button>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>

                                <CardDescription>do u want to advertise? click below</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button>Book Ad</Button>
                            </CardContent>
                        </Card><Card>
                            <CardHeader>

                                <CardDescription>do u want to advertise? click below</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button>Book Ad</Button>
                            </CardContent>
                        </Card><Card>
                            <CardHeader>

                                <CardDescription>do u want to advertise? click below</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <Button>Book Ad</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>

            <div className="md:p-5">
                <div className="trustedBy w-full bg-navBg rounded-lg p-">
                    <p className="text-center text-3xl font-bold p-5 text-white">Testimonial</p>
                    <div className="flex max-md:flex-col max-md:items-center max-md:justify-center gap-5 p-6 justify-between">

                        <Card>
                            <CardHeader>


                            </CardHeader>
                            <CardContent>
                                <div className="font-[sans-serif] max-w-[410px] h-auto p-6 rounded-lg mx-auto shadow-[0_6px_18px_-6px_rgba(193,195,248)] bg-white relative mt-12">
                                    <Image width={16} src="https://readymadeui.com/profile_2.webp" alt="badge"></Image>
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
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Hero;
