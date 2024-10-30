import SupportPage from "@/components/admin/support";
import { ScrollArea } from "@/components/ui/scroll-area"

const Page: React.FC = () => {
    return (
        <div>
            <ScrollArea className="h-screen w-full pt-16 rounded-md border">
                <SupportPage />
            </ScrollArea>
        </div>
    )
}

export default Page;