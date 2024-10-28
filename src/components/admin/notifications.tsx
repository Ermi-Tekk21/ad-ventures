// pages/admin/notifications.tsx
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';
import { useNotificationStore } from '@/store/admin/notificationStore';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

// Define the Notification type
interface Notification {
    id: number;
    type: string;
    message: string;
    createdAt: string;
    isRead: boolean;
}

const NotificationsPage: React.FC = () => {
    // Using Zustand store
    const { notifications, markAsRead } = useNotificationStore();
    const [selectedNotification, setSelectedNotification] = React.useState<Notification | null>(null);

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Notifications</h1>

            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Message</th>
                        <th className="py-2 px-4 border-b text-left">Date</th>
                        <th className="py-2 px-4 border-b text-left">Status</th>
                        <th className="py-2 px-4 border-b text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map(notification => (
                        <tr key={notification.id} className="hover:bg-gray-200 dark:hover:bg-gray-700">
                            <td className="py-2 px-4 border-b">{notification.message}</td>
                            <td className="py-2 px-4 border-b">
                                {new Date(notification.createdAt).toLocaleString()}
                            </td>
                            <td className="py-2 px-4 border-b">
                                <span className={`px-2 py-1 rounded ${notification.isRead ? 'bg-gray-300 text-gray-800' : 'bg-blue-500 text-white'}`}>
                                    {notification.isRead ? 'Read' : 'Unread'}
                                </span>
                            </td>
                            <td className="py-2 px-4 border-b flex justify-center gap-2">
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button
                                            variant="outline"
                                            className="bg-blue-600 text-white hover:text-blue-800"
                                            onClick={() => setSelectedNotification(notification)} // Ensure this is the right type
                                            aria-label={`View details for ${notification.type}`}
                                        >
                                            View Details
                                        </Button>
                                    </DialogTrigger>
                                    {selectedNotification && (
                                        <DialogContent className="sm:max-w-[425px]">
                                            <DialogHeader>
                                                <DialogTitle>{selectedNotification.type}</DialogTitle>
                                                <DialogDescription>
                                                    <p>{selectedNotification.message}</p>
                                                    <p className="text-sm text-gray-500 mt-2">
                                                        Received on: {new Date(selectedNotification.createdAt).toLocaleString()}
                                                    </p>
                                                </DialogDescription>
                                            </DialogHeader>
                                            <DialogFooter>
                                                <Button variant="outline" onClick={() => {
                                                    if (selectedNotification) {
                                                        markAsRead(selectedNotification.id);
                                                        setSelectedNotification(null);
                                                    }
                                                }}>
                                                    Mark as Read
                                                </Button>
                                                <Button variant="default" onClick={() => setSelectedNotification(null)}>
                                                    Close
                                                </Button>
                                            </DialogFooter>
                                        </DialogContent>
                                    )}
                                </Dialog>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default NotificationsPage;
