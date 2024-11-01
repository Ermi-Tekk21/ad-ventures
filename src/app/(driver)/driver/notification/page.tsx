"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogDemo } from "./dialog";
import useNotificationsStoreForDriver from "@/store/driversNotification";

const NotificationsPage = () => {
    // Access notifications and the markAsRead function from the Zustand store
    const { notifications, markAsRead } = useNotificationsStoreForDriver();

    return (
        <main className="mx-auto w-full md:w-3/4 lg:w-2/3 px-4 sm:px-8">
            <ScrollArea className="h-screen">
                <ul className="space-y-4 mt-16 pr-2 sm:pr-5">
                    {notifications.map((notification) => (
                        <li
                            key={notification.id}
                            className={`p-4 border rounded-md ${notification.isRead ? 'bg-gray-200 dark:bg-transparent' : 'bg-white dark:bg-opacity-15'}`}
                        >
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
                                <div className="flex-1 mb-4 sm:mb-0">
                                    <p className="text-lg text-slate-700 dark:text-slate-50 font-semibold">{notification.type}</p>
                                    <p className="text-black dark:text-slate-100 font-serif">{notification.message}</p>
                                    <p className="text-sm dark:text-slate-200 text-slate-500">
                                        {new Date(notification.createdAt).toLocaleString()}
                                    </p>
                                    <p
                                        className="dark:text-slate-100 text-slate-700 hover:text-slate-900 font-thin cursor-pointer border-[0.5px] w-fit hover:font-normal align-middle items-center dark:border-white rounded-md text-sm mt-2 px-2 dark:hover:text-white"
                                        onClick={() => markAsRead(notification.id)}
                                    >
                                        mark as read
                                    </p>
                                </div>
                                <div className="flex justify-center sm:justify-end p-2 sm:p-0">
                                    {/* Pass the notification data and markAsRead function */}
                                    <DialogDemo notification={notification} markAsRead={() => markAsRead(notification.id)} />
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </ScrollArea>
        </main>
    );
};

export default NotificationsPage;
