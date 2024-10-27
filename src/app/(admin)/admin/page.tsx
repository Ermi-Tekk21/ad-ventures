// pages/admin/index.tsx
import React from 'react';
import Link from 'next/link';

const AdminDashboard: React.FC = () => {
    return (
        <div className="flex flex-col p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Users Card */}
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl font-semibold">Users</h2>
                    <p className="text-4xl font-bold my-4">123</p>
                    <Link href="/admin/users" className="text-blue-500 dark:text-blue-300">
                        View All Users
                    </Link>
                </div>

                {/* Campaigns Card */}
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl font-semibold">Campaigns</h2>
                    <p className="text-4xl font-bold my-4">45</p>
                    <Link href="/admin/campaigns" className="text-blue-500 dark:text-blue-300">
                        Manage Campaigns
                    </Link>
                </div>

                {/* Notifications Card */}
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl font-semibold">Notifications</h2>
                    <p className="text-4xl font-bold my-4">8</p>
                    <Link href="/admin/notifications" className="text-blue-500 dark:text-blue-300">
                        View Notifications
                    </Link>
                </div>

                {/* Reports Card */}
                <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center">
                    <h2 className="text-xl font-semibold">Reports</h2>
                    <p className="text-4xl font-bold my-4">5</p>
                    <Link href="/admin/reports" className="text-blue-500 dark:text-blue-300">
                        Generate Reports
                    </Link>
                </div>
            </div>

            <div className="mt-10 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4">Overview</h2>
                <p>
                    Welcome to the Admin Dashboard. Here you can manage users, monitor active campaigns, handle notifications, and generate reports to get insights.
                </p>
            </div>
        </div>
    );
};

export default AdminDashboard;
