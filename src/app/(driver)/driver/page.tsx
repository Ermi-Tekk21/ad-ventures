"use client"
import ActiveStatus from "@/components/drivers/activeStatus";
import PendingStatus from "@/components/drivers/PendingStatus";
import { userInfo } from "@/utils/data/driver/driverData";


const Taxi = () => {

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
