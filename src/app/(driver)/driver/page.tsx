"use client"
import ActiveStatus from "@/components/drivers/activeStatus";
import PendingStatus from "@/components/drivers/PendingStatus";
import { DriversData } from "@/utils/Data/DriversData";

const Taxi = () => {
    const userInfo = DriversData[0]
    return (
        <main >
            {
                userInfo.status === "active" &&
                (<>
                    <ActiveStatus />
                </>)
            }
            {
                userInfo.status === "pending" &&
                (<>
                    <PendingStatus />
                </>)
            }
        </main>
    );
}

export default Taxi;
