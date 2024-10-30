"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import useNotificationsStore from '@/store/notificationsStore';
const Sidebar: React.FC = () => {
    const { notifications } = useNotificationsStore();
    const UnReadNotification = notifications.filter((singleNotification) => singleNotification.isRead === false).length
    const pathname = usePathname();
    return (
        <div className="w-[250px] max-md:hidden relative flex flex-col bg-slate-50 gap-10 h-screen dark:bg-sidebarBg items-center pt-6 z-50">
            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-2xl font-extrabold dark:text-white">Ad Ventures</h1>
                <hr className="border-white border-2 w-1/2" />
            </div>
            <div className="flex dark:text-white justify-center">
                <ul className="flex flex-col gap-6">
                    <li className={`flex gap-2 ${pathname === "/advertise" ? "font-bold" : "font-light"}`}>

                        {
                            pathname === "/advertise" && (
                                <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 border- h-6" />
                            )
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>
                        <Link href={`/advertise/`}>Dashboard</Link>
                    </li>


                    <li className={`flex gap-2 ${pathname === "/advertise/account" ? "font-bold" : "font-light"}`}>

                        {
                            pathname === "/advertise/account" && (
                                <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 border- h-6" />
                            )
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-user"><circle cx="12" cy="12" r="10" /><circle cx="12" cy="10" r="3" /><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662" /></svg>

                        <Link href={`/advertise/account`}>My Account</Link>
                    </li>


                    <li className={`flex gap-2 ${pathname === "/advertise/create-ad" ? "font-bold" : "font-light"}`}>

                        {
                            pathname === "/advertise/create-ad" && (
                                <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 border- h-6" />
                            )
                        }
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-circle-plus"><circle cx="12" cy="12" r="10" /><path d="M8 12h8" /><path d="M12 8v8" /></svg>


                        <Link href={`/advertise/create-ad`}>Create Ad</Link>
                    </li>


                    <li className={`flex gap-2 ${pathname === "/advertise/notification" ? "font-bold" : "font-light"}`}>

                        {
                            pathname === "/advertise/notification" && (
                                <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 border- h-6" />
                            )
                        }

                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-bell-ring"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /><path d="M4 2C2.8 3.7 2 5.7 2 8" /><path d="M22 8c0-2.3-.8-4.3-2-6" /></svg>

                        <Link href={`/advertise/notification`}>Notification</Link>
                        {
                            (UnReadNotification >= 1) && <p className="px-2 right-0 top-0 rounded-full bg-green-700 text-white">{UnReadNotification}</p>
                        }
                    </li>

                </ul>
            </div>
        </div>
    )
}
export default Sidebar;