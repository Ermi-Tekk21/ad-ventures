import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

type Notification = {
    id: number;
    type: string;
    message: string;
    createdAt: string;
    isRead: boolean;
};

export function DialogDemo({ notification, markAsRead }: { notification: Notification; markAsRead: () => void }) {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="bg-blue-600 text-white hover:text-blue-800"
                    onClick={markAsRead}
                >
                    View Details
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>{notification.type}</DialogTitle>
                    <DialogDescription>
                        <p>{notification.message}</p>
                        <p className="text-sm text-gray-500 mt-2">
                            Received on: {new Date(notification.createdAt).toLocaleString()}
                        </p>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
}
