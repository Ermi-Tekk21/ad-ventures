"use client"
// pages/report.tsx
import React from 'react';
import { useNotificationStore } from '@/store/admin/notificationStore';

const ReportPage: React.FC = () => {
    const { notifications } = useNotificationStore(); // Get notifications from the Zustand store

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Notifications Report</h1>
            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Type</th>
                        <th className="py-2 px-4 border-b text-left">Message</th>
                        <th className="py-2 px-4 border-b text-left">Date</th>
                        <th className="py-2 px-4 border-b text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {notifications.map(notification => (
                        <tr key={notification.id} className="hover:bg-gray-200 dark:hover:bg-gray-700">
                            <td className="py-2 px-4 border-b">{notification.type}</td>
                            <td className="py-2 px-4 border-b">{notification.message}</td>
                            <td className="py-2 px-4 border-b">
                                {new Date(notification.createdAt).toLocaleString()}
                            </td>
                            <td className="py-2 px-4 border-b">
                                <span className={`px-2 py-1 rounded ${notification.isRead ? 'bg-gray-300 text-gray-800' : 'bg-blue-500 text-white'}`}>
                                    {notification.isRead ? 'Read' : 'Unread'}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportPage;
