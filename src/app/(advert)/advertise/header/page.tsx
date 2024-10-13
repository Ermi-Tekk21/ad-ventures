import { Button } from "@/components/ui/button";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "../component/lightModeTog";

const Header: React.FC = () => {
    return (
        <div className="z-40 fixed w-full">
            <div className="dark:bg-sidebarBg bg-white w-full h-16 md:-ml-[211px] shadow flex items-center justify-end">
                <div className="flex gap-10 items-center px-10">
                    <div className="z-30 text-black  border-slate-800 rounded">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="font-light border-[.5px] dark:text-white dark:bg-slate-800">Book Ad catagories</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="flex flex-col p-8">
                                            <NavigationMenuLink>Link</NavigationMenuLink>
                                            <NavigationMenuLink>Link</NavigationMenuLink>
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                    <ModeToggle />
                    <div className="z-40 items-center max-md:hidden rounded-full bg-slate-700">
                        <DropdownMenu >
                            <DropdownMenuTrigger className="border-indigo-950 p-1  "><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ede9e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg></DropdownMenuTrigger>
                            <DropdownMenuContent className="dark:bg-slate-700">
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <Button className="dark:bg-indigo-950 dark:text-slate-300 shadow-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="none" stroke="#ede9e9" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg> Profile
                                    </Button>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Button className="dark:bg-indigo-950 dark:text-slate-300 shadow-md"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="22" viewBox="0 0 24 24" fill="none" stroke="#af0e0e" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" x2="9" y1="12" y2="12" /></svg>Logout
                                    </Button>
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