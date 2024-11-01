import { create } from 'zustand';
import { AdminMockNotifications } from '@/utils/Data/AdminData';

interface Notification {
    type: any;
    id: number;
    message: string; // Removed the type property
    createdAt: string;
    isRead: boolean;
}


interface NotificationState {
    notifications: Notification[];
    markAsRead: (id: number) => void;
    setNotifications: (notifications: Notification[]) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
    notifications: AdminMockNotifications, // Initialize with mock notifications

    markAsRead: (id) =>
        set((state) => ({
            notifications: state.notifications.map(notification =>
                notification.id === id ? { ...notification, isRead: true } : notification
            ),
        })),
    setNotifications: (notifications) => set({ notifications }),
}));
