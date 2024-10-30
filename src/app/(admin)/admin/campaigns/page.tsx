import CampaignsPage from "@/components/admin/campaigns";
import { ScrollArea } from "@/components/ui/scroll-area"

const Page: React.FC = () => {
    return (
        <div>
            <ScrollArea className="h-screen w-full pt-16 rounded-md border">
                <CampaignsPage />
            </ScrollArea>
        </div>
    )
}

export default Page;