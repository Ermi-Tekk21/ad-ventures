// store/notificationStore.ts
import create from 'zustand';
import { mockNotifications } from '@/utils/data/admin/notificationData'; // Import the mock notifications data

interface Notification {
    id: number;
    type: string;
    message: string;
    createdAt: string;
    isRead: boolean;
}

interface NotificationState {
    notifications: Notification[];
    markAsRead: (id: number) => void;
    setNotifications: (notifications: Notification[]) => void;
}

export const useNotificationStore = create<NotificationState>((set) => ({
    notifications: mockNotifications, // Initialize with mock notifications
    markAsRead: (id) => 
        set((state) => ({
            notifications: state.notifications.map(notification => 
                notification.id === id ? { ...notification, isRead: true } : notification
            ),
        })),
    setNotifications: (notifications) => set({ notifications }),
}));
