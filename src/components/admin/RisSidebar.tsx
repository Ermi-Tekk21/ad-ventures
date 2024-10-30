"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useNotificationStore } from '@/store/admin/notificationStore';
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export function ResSidebar() {
    const { notifications } = useNotificationStore();
    const UnReadNotification = notifications.filter((singleNotification) => !singleNotification.isRead).length;
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="md:hidden" asChild>
                <Button variant="outline">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="lucide lucide-logs text-gray-800 dark:text-gray-200"
                    >
                        <path d="M13 12h8" />
                        <path d="M13 18h8" />
                        <path d="M13 6h8" />
                        <path d="M3 12h1" />
                        <path d="M3 18h1" />
                        <path d="M3 6h1" />
                        <path d="M8 12h1" />
                        <path d="M8 18h1" />
                        <path d="M8 6h1" />
                    </svg>

                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="w-[300px] max-md:[200px] relative flex flex-col gap-10 h-screen items-center pt-6 z-50">
                    <div className="flex flex-col gap-4 items-center">
                        <h1 className="text-2xl font-extrabold dark:text-white">Ad Ventures</h1>
                        <hr className="border-white border-2 w-1/2" />
                    </div>
                    <div className="flex dark:text-white justify-center">
                        <ul className="flex flex-col gap-6">
                            {/* Dashboard */}
                            <li className={`flex gap-2 ${pathname === "/admin" ? "font-bold" : "font-light"}`}>
                                {pathname === "/admin" && (
                                    <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-home" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /></svg>
                                <Link href={`/admin/`}>Dashboard</Link>
                            </li>

                            {/* Notifications */}
                            <li className={`flex gap-2 ${pathname === "/admin/notifications" ? "font-bold" : "font-light"}`}>
                                {pathname === "/admin/notifications" && (
                                    <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-bell" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                                <Link href={`/admin/notifications`}>Notifications</Link>
                                {UnReadNotification > 0 && (
                                    <span className="rounded-full bg-green-600 text-white px-2">
                                        {UnReadNotification}
                                    </span>
                                )}
                            </li>

                            {/* Taxi Management */}
                            <li className={`flex gap-2 ${pathname === "/admin/taxi-management" ? "font-bold" : "font-light"}`}>
                                {pathname === "/admin/taxi-management" && (
                                    <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-car" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 11h18l-1 6H4z" /><path d="M4 4h16l-2 2H6z" /></svg>
                                <Link href={`/admin/taxi-management`}>Taxi Management</Link>
                            </li>

                            {/* Billboard Management */}
                            <li className={`flex gap-2 ${pathname === "/admin/billboard-management" ? "font-bold" : "font-light"}`}>
                                {pathname === "/admin/billboard-management" && (
                                    <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-billboard" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="3" width="16" height="12" rx="1" /><path d="M4 18h16l-1 2H5z" /></svg>
                                <Link href={`/admin/billboard-management`}>Billboard Management</Link>
                            </li>

                            {/* Settings */}
                            <li className={`flex gap-2 ${pathname === "/admin/settings" ? "font-bold" : "font-light"}`}>
                                {pathname === "/admin/settings" && (
                                    <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-settings" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.8 1.8 0 0 0 .2 2l.8.8a2 2 0 1 1-2.8 2.8l-.8-.8a1.8 1.8 0 0 0-2 0h-1.6a1.8 1.8 0 0 0-2 0l-.8.8a2 2 0 1 1-2.8-2.8l.8-.8a1.8 1.8 0 0 0 0-2v-1.6a1.8 1.8 0 0 0 0-2l-.8-.8a2 2 0 1 1 2.8-2.8l.8.8a1.8 1.8 0 0 0 2 0h1.6a1.8 1.8 0 0 0 2 0l.8-.8a2 2 0 1 1 2.8 2.8l-.8.8a1.8 1.8 0 0 0-.2 2v1.6z" /></svg>
                                <Link href={`/admin/settings`}>Settings</Link>
                            </li>

                            {/* Packages */}
                            <li className={`flex gap-2 ${pathname === "/admin/packages" ? "font-bold" : "font-light"}`}>
                                {pathname === "/admin/packages" && (
                                    <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-package" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 2l8 4v12l-8 4-8-4V6z" />
                                    <path d="M2 6l10 5 10-5" />
                                    <path d="M12 22v-8" />
                                </svg>
                                <Link href={`/admin/packages`}>Packages</Link>
                            </li>

                            {/* Users */}
                            <li className={`flex gap-2 ${pathname === "/admin/users" ? "font-bold" : "font-light"}`}>
                                {pathname === "/admin/users" && (
                                    <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                                )}
                                <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-users" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                    <circle cx="9" cy="7" r="4" />
                                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                                    <circle cx="16" cy="3" r="4" />
                                </svg>
                                <Link href={`/admin/users`}>Users</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )
}
