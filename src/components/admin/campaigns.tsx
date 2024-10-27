"use client";

// pages/admin/campaigns.tsx
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Campaign {
    id: string;
    name: string;
    status: string;
    startDate: string;
    endDate: string;
}

const mockCampaigns: Campaign[] = [
    { id: '1', name: 'Campaign A', status: 'Active', startDate: '2024-01-01', endDate: '2024-02-01' },
    { id: '2', name: 'Campaign B', status: 'Inactive', startDate: '2024-02-01', endDate: '2024-03-01' },
    { id: '3', name: 'Campaign C', status: 'Active', startDate: '2024-03-01', endDate: '2024-04-01' },
    { id: '4', name: 'Campaign D', status: 'Completed', startDate: '2024-01-15', endDate: '2024-02-15' },
];

const CampaignsPage: React.FC = () => {
    const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns); // Use mock data directly

    const handleEditCampaign = (campaignId: string) => {
        // Implement edit functionality here
        console.log('Edit campaign:', campaignId);
    };

    const handleDeleteCampaign = async (campaignId: string) => {
        try {
            // Simulating a delete action
            setCampaigns(campaigns.filter(campaign => campaign.id !== campaignId));
            console.log('Campaign deleted successfully');
        } catch (error) {
            console.error('Error deleting campaign:', error);
        }
    };

    return (
        <div className="p-8 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-8">Campaign Management</h1>

            <table className="min-w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b text-left">Name</th>
                        <th className="py-2 px-4 border-b text-left">Status</th>
                        <th className="py-2 px-4 border-b text-left">Start Date</th>
                        <th className="py-2 px-4 border-b text-left">End Date</th>
                        <th className="py-2 px-4 border-b text-center">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {campaigns.map(campaign => (
                        <tr key={campaign.id} className="hover:bg-gray-200 dark:hover:bg-gray-700">
                            <td className="py-2 px-4 border-b">{campaign.name}</td>
                            <td className="py-2 px-4 border-b">{campaign.status}</td>
                            <td className="py-2 px-4 border-b">{campaign.startDate}</td>
                            <td className="py-2 px-4 border-b">{campaign.endDate}</td>
                            <td className="py-2 px-4 border-b flex justify-center gap-2">
                                <button
                                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                    onClick={() => handleEditCampaign(campaign.id)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                    onClick={() => handleDeleteCampaign(campaign.id)}
                                >
                                    Delete
                                </button>
                                <Link href={`/admin/campaigns/${campaign.id}`}>
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

export default CampaignsPage;
