import { ModeToggle } from "@/app/(advert)/advertise/component/lightModeTog";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import Link from "next/link";
import { ResSidebar } from "./RisSidebar";

const Header: React.FC = () => {
    return (
        <div className="z-40 fixed w-full">
            <div className="dark:bg-sidebarBg bg-white w-full h-16 md:-ml-[211px] shadow flex items-center justify-end pr-10">
                <div className="flex gap-10 items-center">
                    <ResSidebar/>
                    <ModeToggle />
                    <div className="z-40 items-center max-md:hidden rounded-full">
                        <DropdownMenu >
                            <DropdownMenuTrigger className="border-indigo-950 p-2 bg-slate-700 rounded-md "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ede9e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></DropdownMenuTrigger>
                            <DropdownMenuContent className="dark:bg-slate-700">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex flex-col gap-3">
                                    <div className="flex gap-2 bg-slate-200 dark:bg-slate-500 hover:font-semibold px-3 rounded py-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#ede9e9"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide bg-slate-500 rounded-full p-1 lucide-user"
                                        >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                                            <circle cx="12" cy="7" r="4" />
                                        </svg>
                                        <Link href={`/driver/account`}>Profile</Link>
                                    </div>
                                    <div className="flex gap-1 dark:bg-slate-500 bg-slate-200 hover:font-semibold px-3 rounded py-1">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="22"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="#af0e0e"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            className="lucide lucide-log-out"
                                        >
                                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                            <polyline points="16 17 21 12 16 7" />
                                            <line x1="21" x2="9" y1="12" y2="12" />
                                        </svg>
                                        <Link href={`/auth/drivers/login`}>Logout</Link>
                                    </div>
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Header;