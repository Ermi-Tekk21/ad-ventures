import ReportPage from "@/components/admin/reports";
import { ScrollArea } from "@/components/ui/scroll-area"

const Page: React.FC = () => {
    return (
        <div>
            <ScrollArea className="h-screen w-full pt-16 rounded-md border">
                <ReportPage />
            </ScrollArea>
        </div>
    )
}

export default Page;