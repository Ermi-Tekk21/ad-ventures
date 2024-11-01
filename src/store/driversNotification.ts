import { create } from 'zustand';
import { DriverNotifications } from '@/utils/Data/DriversData';

// Define Zustand store
interface Notification {
    id: number;
    type: string;
    message: string;
    createdAt: string;
    isRead: boolean;
}

interface NotificationsState {
    notifications: Notification[];
    markAsRead: (id: number) => void;
}

const useNotificationsStoreForDriver = create<NotificationsState>((set) => ({
    notifications: DriverNotifications, // Initial notifications

    // Function to mark a notification as read
    markAsRead: (id: number) =>
        set((state) => ({
            notifications: state.notifications.map((notification) =>
                notification.id === id
                    ? { ...notification, isRead: true }
                    : notification
            ),
        })),
}));

export default useNotificationsStoreForDriver;
