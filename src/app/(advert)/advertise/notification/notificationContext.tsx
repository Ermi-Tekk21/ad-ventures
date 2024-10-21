import React, { createContext, useContext, useState, ReactNode } from 'react';
import NotificationsData from '@/utils/data/BookAdAccountData';

// Create the context
const NotificationsContext = createContext<any>(null);

// Custom hook to use the NotificationsContext
export const useNotifications = () => useContext(NotificationsContext);

// Provider component to wrap your app and provide the notifications state
export const NotificationsProvider = ({ children }: { children: ReactNode }) => {
    const [notifications, setNotifications] = useState(NotificationsData);

    const markAsRead = (id: number) => {
        setNotifications((prev) =>
            prev.map((notification) =>
                notification.id === id
                    ? { ...notification, isRead: true }
                    : notification
            )
        );
    };

    return (
        <NotificationsContext.Provider value={{ notifications, markAsRead }}>
            {children}
        </NotificationsContext.Provider>
    );
};
