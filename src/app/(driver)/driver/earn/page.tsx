import AdventuresEarningPage from "@/components/drivers/earnSecWhenActive";
import InitSteps from "@/components/drivers/initSteps";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DriversData } from "@/utils/Data/DriversData";


const Page = () => {
    const userInfo = DriversData[0]
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
                        <ScrollArea className="h-screen w-full pt-16 rounded-md border">
                            <AdventuresEarningPage />
                        </ScrollArea>
                    </div>
                )
            }
        </main>
    )
}

export default Page;