"use client"
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

const Footer: React.FC = () => {
    const [isHome, setIsHome] = useState(false);
    const [isAbout, setIsAbout] = useState(false);
    const [isContact, setIsContact] = useState(false);
    const [isPricing, setIsPricing] = useState(false);
    const [isDrivers, setIsDrivers] = useState(false);
    const [isBookAd, setIsBookAd] = useState(false);
    const [isSupport, setIsSupport] = useState(false);
    const [isPrivacy, setIsPrivacy] = useState(false);

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

        if (pathname === "/support") {
            setIsSupport(true)
        } else {
            setIsSupport(false)
        }


        if (pathname === "/privacy-policy") {
            setIsPrivacy(true)
        } else {
            setIsPrivacy(false)
        }

    }, [pathname]);

    return (
        <footer className="bg-navBg text-white p-10">
            <div className="w-full flex max-md:flex-col max-md:gap-10 justify-between">
                <nav className="flex flex-col gap-8 ">
                    <nav><h1 className="text-2xl font-semibold">Ad Ventures</h1></nav>

                    <div className="flex flex-col gap-6">
                        <h1 className="font-semibold">Contact info:</h1>
                        <div className="px-8">
                            <ul className="flex flex-col gap-5">
                                <li>
                                    <span className="font-semibold">email:</span>
                                    <a href="mailto:Adventures@gmail.com" className="text-blue-500 underline"> Adventures@gmail.com</a>
                                </li>
                                <li>
                                    <span className="font-semibold">phone:</span>
                                    <a href="tel:+254232345646" className="text-blue-500 underline"> +254 23 2345 646</a>
                                </li>
                                <li><span className="font-semibold">location:</span> NYC ft street</li>
                            </ul>
                        </div>
                    </div>


                </nav>
                <div className="flex flex-col  max-md:gap-4 max-md:justify-center">
                    <h1 className="font-semibold md:py-10">Quick Links:</h1>
                    <div className="flex max-md:pb-8 max-md:flex-col max-md:justify-start max-md:gap-6 max-md:text-xs md:px-8 md:py-4 md:justify-end">
                        <ul className="flex max-md:gap max-md:px-5 gap-5 justify-end">
                            <li className={`flex flex-col gap-4  ${isHome ? 'font-semibold' : 'font-light'}`}>
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


                        </ul>
                        <ul className="flex gap-5 justify-end">
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
                            <li className={`flex flex-col gap-4 ${isPrivacy ? 'font-semibold' : 'font-light'}`}>
                                <Link href='/privacy-policy'>Privacy Policy</Link>
                                {
                                    isPrivacy && (
                                        <hr className="border-b-4 border-red-700" />
                                    )
                                }
                            </li>
                            <li className={`flex flex-col gap-4 ${isSupport ? 'font-semibold' : 'font-light'}`}>
                                <Link href='/support'>Support</Link>
                                {
                                    isSupport && (
                                        <hr className="border-b-4 border-red-700" />
                                    )
                                }
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            <div>
                <ul className="flex justify-end gap-20 m-5">
                    <li>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ebe5e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter">
                                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ebe5e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                                <rect width="4" height="12" x="2" y="9" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                    </li>
                    <li>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ebe5e5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook">
                                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <hr />
            <div><p className="text-center font-light">© 2024 Ad Ventures. All rights reserved.</p></div>
        </footer>


    )
}
export default Footer;