import InitSteps from "@/components/drivers/initSteps";
import { ScrollArea } from "@/components/ui/scroll-area";
import { userInfo } from "@/utils/data/driver/driverData";

const Page = () => {
    return (
        <main>
            {userInfo.status === 'pending' && (
                <ScrollArea className="h-screen w-full pt-16 rounded-md border">
                    <InitSteps />
                </ScrollArea>
            )}
            {
                userInfo.status === "active" && (
                    <div>
                        active...
                    </div>
                )
            }
        </main>
    )
}

export default Page;