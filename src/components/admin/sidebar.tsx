"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
    import { useNotificationStore } from '@/store/admin/notificationStore'; // Import Zustand store for notificationsimport useNotificationsStoreForDriver from "@/store/driversNotification";

const Sidebar: React.FC = () => {
    const { notifications } = useNotificationStore();
    const UnReadNotification = notifications.filter((singleNotification) => !singleNotification.isRead).length;
    const pathname = usePathname();

    return (
        <div className="w-[300px] max-md:hidden relative flex flex-col bg-slate-50 gap-10 h-screen dark:bg-sidebarBg items-center pt-6 z-50">
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

                    {/* User Management */}
                    <li className={`flex gap-2 ${pathname === "/admin/users" ? "font-bold" : "font-light"}`}>
                        {pathname === "/admin/users" && (
                            <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                        )}
                        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-users" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
                        <Link href={`/admin/users`}>User Management</Link>
                    </li>

                    {/* Campaign Management */}
                    <li className={`flex gap-2 ${pathname === "/admin/campaigns" ? "font-bold" : "font-light"}`}>
                        {pathname === "/admin/campaigns" && (
                            <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                        )}
                        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-ad" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3h18v18H3V3zm3 3l3.5 3.5L6 13l3.5 3.5L6 20h12M15 5l4.5 4.5L15 14m-2-5h-2v4h2v-4z" /></svg>
                        <Link href={`/admin/campaigns`}>Campaign Management</Link>
                    </li>

                    {/* Reports */}
                    <li className={`flex gap-2 ${pathname === "/admin/reports" ? "font-bold" : "font-light"}`}>
                        {pathname === "/admin/reports" && (
                            <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                        )}
                        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-pie-chart" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 1 1-9-9" /><path d="M12 2v10h10" /></svg>
                        <Link href={`/admin/reports`}>Reports</Link>
                    </li>

                    {/* Notifications */}
                    <li className={`flex gap-2 ${pathname === "/admin/notifications" ? "font-bold" : "font-light"}`}>
                        {pathname === "/admin/notifications" && (
                            <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                        )}
                        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-bell" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                        
                        <Link href={`/admin/notifications`}>Notifications</Link>{UnReadNotification > 0 && (
                            <span className="rounded-full bg-green-600 text-white px-2">
                                {UnReadNotification}
                            </span>
                        )}
                    </li>

                    {/* Settings */}
                    <li className={`flex gap-2 ${pathname === "/admin/settings" ? "font-bold" : "font-light"}`}>
                        {pathname === "/admin/settings" && (
                            <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                        )}
                        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-settings" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.8 1.8 0 0 0 .2 2l.8.8a2 2 0 1 1-2.8 2.8l-.8-.8a1.8 1.8 0 0 0-2 0h-1.6a1.8 1.8 0 0 0-2 0l-.8.8a2 2 0 1 1-2.8-2.8l.8-.8a1.8 1.8 0 0 0 0-2v-1.6a1.8 1.8 0 0 0 0-2l-.8-.8a2 2 0 1 1 2.8-2.8l.8.8a1.8 1.8 0 0 0 2 0h1.6a1.8 1.8 0 0 0 2 0l.8-.8a2 2 0 1 1 2.8 2.8l-.8.8a1.8 1.8 0 0 0-.2 2v1.6z" /></svg>
                        <Link href={`/admin/settings`}>Settings</Link>
                    </li>

                    {/* Support */}
                    <li className={`flex gap-2 ${pathname === "/admin/support" ? "font-bold" : "font-light"}`}>
                        {pathname === "/admin/support" && (
                            <hr className="-ml-4 dark:border-slate-400 border-slate-800 border-4 h-6" />
                        )}
                        <svg xmlns="http://www.w3.org/2000/svg" className="lucide lucide-help-circle" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 17h.01" /><path d="M9.09 9a3 3 0 1 1 5.82 1A3.5 3.5 0 0 0 12 15.5" /></svg>
                        <Link href={`/admin/support`}>Support</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
