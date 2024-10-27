import NotificationsPage from "@/components/admin/notifications";
import { ScrollArea } from "@/components/ui/scroll-area"

const Page: React.FC = () => {
    return (
        <div>
            <ScrollArea className="h-screen w-full pt-16 rounded-md border">
                <NotificationsPage />
            </ScrollArea>
        </div>
    )
}

export default Page;