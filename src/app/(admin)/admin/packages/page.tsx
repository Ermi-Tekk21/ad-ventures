"use client";

import CreateAd from "@/app/(advert)/advertise/create-ad/page";
import { ScrollArea } from "@/components/ui/scroll-area";

const Page: React.FC = () => {

    return (
        <div className="flex flex-col items-center">
            <ScrollArea className="h-screen w-full  pt-16 rounded-lg shadow-xl  bg-gray-50 dark:bg-gray-900">
                <CreateAd/>
            </ScrollArea>
        </div>
    );
};

export default Page;
