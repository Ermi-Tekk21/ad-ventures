"use client"
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTrigger,
} from "@/components/ui/dialog"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const NavBar: React.FC = () => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [socialVisible, setSocialVisible] = useState(true);
    const [isHome, setIsHome] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [isPricing, setIsPricing] = useState(false);
    const [isDrivers, setIsDrivers] = useState(false);
    const [isBookAd, setIsBookAd] = useState(false);

    const pathname = usePathname();

    useEffect(() => {

        if (pathname === "/") {
            setIsHome(true)
        } else {
            setIsHome(false)
        }

        if (pathname === "/about-us") {
            setIsAbout(true)
        } else {
            setIsAbout(false)
        }


        if (pathname === "/contact-us") {
            setIsContact(true)
        } else {
            setIsContact(false)
        }


        if (pathname === "/drivers") {
            setIsDrivers(true)
        } else {
            setIsDrivers(false)
        }


        if (pathname === "/pricing") {
            setIsPricing(true)
        } else {
            setIsPricing(false)
        }


        if (pathname === "/book-ad") {
            setIsBookAd(true)
        } else {
            setIsBookAd(false)
        }

    }, [pathname]);







    useEffect(() => {
        const handleScroll = () => {

            const currentScrollY = window.scrollY;

            if (currentScrollY < 100) {
                // Hide navbar when scrolling down
                setShowNavbar(true);
            } else if (currentScrollY > lastScrollY) {
                setShowNavbar(false);
            }
            else {
                // Show navbar when scrolling up
                setShowNavbar(true);
            }
            if (currentScrollY > 0) {
                setSocialVisible(false);
            } else {
                setSocialVisible(true);
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <header className={`navbar shadow-md z-40 w-full ${showNavbar ? 'visible fixed' : 'hidden fixed'}`}>
            {socialVisible && (
                <div className="flex max-sm:flex-col justify-between max-lg:px-3 lg:px-6 bg-slate-100">
                    <div>
                        <ul className="flex justify-between gap-5">
                            {/* Social Media Icons */}
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook">
                                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                        <rect width="4" height="12" x="2" y="9" />
                                        <circle cx="4" cy="4" r="2" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <ul className="flex gap-2 max-sm:justify-between font-light max-md:text-xs text-sm">
                            {/* Phone Number */}
                            <li className="flex gap-3 items-center">
                                <a href="tel:+251493097000" className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                                    </svg>
                                    +251-493097000
                                </a>
                            </li>

                            {/* Mobile */}
                            <li className="flex gap-3 items-center">
                                <a href="tel:+2519493097000" className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-smartphone">
                                        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
                                        <path d="M12 18h.01" />
                                    </svg>
                                    09493097000
                                </a>
                            </li>

                            {/* Email */}
                            <li className="flex items-center gap-3">
                                <a href="mailto:adventures@gmail.com" className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                                        <rect width="20" height="16" x="2" y="4" rx="2" />
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                    </svg>
                                    adventures@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

            )}

            <nav className="bg-navBg sticky top-0 items-center text-white flex justify-between max-md:px-5 max-md:py-4 md:px-8 md:py-7 lg:py-5 lg:px-12 w-full">
                <div className="max-md:hidden">
                    <Link href='/' className="md:text-2xl text-white font-heading font-bold">Ad Ventures</Link>

                </div>
                <div>
                    <div className="md:hidden">
                        <Sheet>
                            <SheetTrigger className='mt-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6" /><line x1="3" x2="21" y1="12" y2="12" /><line x1="3" x2="21" y1="18" y2="18" /></svg>
                            </SheetTrigger>
                            <SheetContent>
                                <SheetHeader>
                                    <SheetDescription>
                                        <div className="-mt-2 -ml-16 items-start">
                                            <h1 className="md:text-2xl text-black font-heading font-bold">Ad Ventures</h1>
                                        </div>
                                        <ul className="flex flex-col gap-4 mt-8 px-4 items-start">
                                            <li className={`flex items-center gap-4 ${isHome ? 'font-semibold' : 'font-light'}`}>
                                                {
                                                    isHome && (
                                                        <hr className="border-b-4 -ml-9 rotate-90 w-5 border-red-700" />
                                                    )
                                                }
                                                <Link href='/'>Home</Link>

                                            </li>
                                            <li className={`flex items-center gap-4 ${isAbout ? 'font-semibold' : 'font-light'}`}>
                                                {
                                                    isAbout && (
                                                        <hr className="border-b-4 -ml-9 rotate-90 w-5 border-red-700" />
                                                    )
                                                }
                                                <Link href='/about-us'>About Us</Link>

                                            </li>
                                            <li className={`flex items-center gap-4 ${isDrivers ? 'font-semibold' : 'font-light'}`}>
                                                {
                                                    isDrivers && (
                                                        <hr className="border-b-4 -ml-9 rotate-90 w-5 border-red-700" />
                                                    )
                                                }
                                                <Link href='/drivers'>Drivers</Link>

                                            </li>
                                            <li className={`flex items-center gap-4 ${isBookAd ? 'font-semibold' : 'font-light'}`}>
                                                {
                                                    isBookAd && (
                                                        <hr className="border-b-4 -ml-9 rotate-90 w-5 border-red-700" />
                                                    )
                                                }
                                                <Link href='/book-ad'>Book Ad</Link>

                                            </li>
                                            <li className={`flex items-center gap-4 ${isPricing ? 'font-semibold' : 'font-light'}`}>
                                                {
                                                    isPricing && (
                                                        <hr className="border-b-4 -ml-9 rotate-90 w-5 border-red-700" />
                                                    )
                                                }
                                                <Link href='/pricing'>Pricing</Link>

                                            </li>
                                            <li className={`flex items-center gap-4 ${isContact ? 'font-semibold' : 'font-light'}`}>
                                                {
                                                    isContact && (
                                                        <hr className="border-b-4 -ml-9 rotate-90 w-5 border-red-700" />
                                                    )
                                                }
                                                <Link href='/contact-us'>Contact US</Link>
                                            </li>
                                        </ul>
                                    </SheetDescription>
                                </SheetHeader>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
                <nav>
                    <ul className="flex font-light gap-10 max-md:hidden">
                        <li className={`flex flex-col gap-4 ${isHome ? 'font-semibold' : 'font-light'}`}>
                            <Link href='/'>Home</Link>
                            {
                                isHome && (
                                    <hr className="border-b-4 border-red-700" />
                                )
                            }

                        </li>
                        <li className={`flex flex-col gap-4 ${isAbout ? 'font-semibold' : 'font-light'}`}>
                            <Link href='/about-us'>About US</Link>
                            {
                                isAbout && (
                                    <hr className="border-b-4 border-red-700" />
                                )
                            }
                        </li>
                        <li className={`flex flex-col gap-4 ${isDrivers ? 'font-semibold' : 'font-light'}`}>
                            <Link href='/drivers'>Drivers</Link>
                            {
                                isDrivers && (
                                    <hr className="border-b-4 border-red-700" />
                                )
                            }
                        </li>
                        <li className={`flex flex-col gap-4 ${isBookAd ? 'font-semibold' : 'font-light'}`}>
                            <Link href='/book-ad'>Book Ad</Link>
                            {
                                isBookAd && (
                                    <hr className="border-b-4 border-red-700" />
                                )
                            }
                        </li>
                        <li className={`flex flex-col gap-4 ${isPricing ? 'font-semibold' : 'font-light'}`}>
                            <Link href='/pricing'>Pricing</Link>
                            {
                                isPricing && (
                                    <hr className="border-b-4 border-red-700" />
                                )
                            }
                        </li>
                        <li className={`flex flex-col gap-4 ${isContact ? 'font-semibold' : 'font-light'}`}>
                            <Link href='/contact-us'>Contact US</Link>
                            {
                                isContact && (
                                    <hr className="border-b-4 border-red-700" />
                                )
                            }
                        </li>
                        <li>

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
                        </li>
                    </ul>
                </nav>
                <div className="md:hidden">
                    <Link href='/' className="md:text-2xl text-white font-heading font-bold">Ad Ventures</Link>
                </div>
            </nav>
            <nav>
            </nav>
        </header>
    )
}

export default NavBar;