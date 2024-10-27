"use client";
// pages/admin/users.tsx
import React, { useState } from 'react';
import Link from 'next/link';

interface User {
    id: string;
    name: string;
    email: string;
    role: string;
}

const mockUsers: User[] = [
    { id: '1', name: 'Alice Johnson', email: 'alice@example.com', role: 'Admin' },
    { id: '2', name: 'Bob Smith', email: 'bob@example.com', role: 'User' },
    { id: '3', name: 'Charlie Brown', email: 'charlie@example.com', role: 'User' },
    { id: '4', name: 'Diana Prince', email: 'diana@example.com', role: 'Editor' },
];

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>(mockUsers);

    const handleEditUser = (userId: string) => {
        // Implement edit functionality here
        console.log('Edit user:', userId);
    };

    const handleDeleteUser = (userId: string) => {
        setUsers(users.filter(user => user.id !== userId));
        console.log('User deleted successfully');
    };

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">User Management</h1>

            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Name</th>
                        <th className="py-2 px-4 border-b text-left">Email</th>
                        <th className="py-2 px-4 border-b text-left">Role</th>
                        <th className="py-2 px-4 border-b text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="hover:bg-gray-200 dark:hover:bg-gray-700">
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">{user.role}</td>
                            <td className="py-2 px-4 border-b flex justify-center gap-2">
                                <button
                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={() => handleEditUser(user.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => handleDeleteUser(user.id)}
                                >
                                    Delete
                                </button>
                                <Link href={`/admin/users/${user.id}`}>
                                    <span className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 cursor-pointer">
                                        View
                                    </span>
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPage;
