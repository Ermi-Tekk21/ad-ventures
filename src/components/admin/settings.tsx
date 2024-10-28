"use client"
import { ModeToggle } from '@/app/(advert)/advertise/component/lightModeTog';
// pages/settings.tsx
import React, { useState } from 'react';

// Mock settings data
const mockSettings = {
    username: 'john_doe',
    email: 'john_doe@example.com',
    notificationsEnabled: true,
    darkMode: false,
};

const SettingsPage: React.FC = () => {
    const [settings, setSettings] = useState(mockSettings);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, type, checked, value } = e.target;
        setSettings((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSave = () => {
        // Here, you would typically send the updated settings to your backend.
        console.log('Updated settings:', settings);
        alert('Settings saved successfully!');
    };

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Settings</h1>

            <div className="space-y-6">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Profile</h2>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={settings.username}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={settings.email}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                    <h2 className="text-xl font-semibold mb-4">Preferences</h2>
                    <div className="mb-4">
                        <label className="flex items-center">
                            <input
                                type="checkbox"
                                name="notificationsEnabled"
                                checked={settings.notificationsEnabled}
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Enable Notifications
                        </label>
                    </div>
                    <div className="mb-4">
                    <ModeToggle/>
                    </div>
                </div>

                <button
                    onClick={handleSave}
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </div>
        </div>
    );
};

export default SettingsPage;
