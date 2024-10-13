import React from "react";

const notifications = [
    {
        id: 1,
        title: "New Message from Admin",
        message: "You have an important message from the admin.",
        status: "unread",
        time: "2 hours ago"
    },
    {
        id: 2,
        title: "New Comment on your post",
        message: "Someone commented on your latest post.",
        status: "read",
        time: "1 day ago"
    },
    {
        id: 3,
        title: "Urgent: Account Verification",
        message: "Please verify your account to continue using all features.",
        status: "urgent",
        time: "3 days ago"
    }
];

const NotificationCard = ({ title, message, status, time }: { title: string, message: string, status: string, time: string }) => {
    return (
        <div
            className={`border-l-4 p-4 mb-4 shadow-sm rounded-md ${status === "unread"
                    ? "border-blue-500 bg-blue-50"
                    : status === "urgent"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300 bg-white"
                }`}
        >
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <span className="text-sm text-gray-500">{time}</span>
            </div>
            <p className="text-gray-600 mt-2">{message}</p>
            <div className="mt-4 flex space-x-4">
                <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">
                    Mark as Read
                </button>
                <button className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600">
                    Delete
                </button>
            </div>
        </div>
    );
};

const NotificationPage = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Notifications</h2>
                {notifications.map((notification) => (
                    <NotificationCard key={notification.id} {...notification} />
                ))}
            </div>
        </div>
    );
};

export default NotificationPage;
