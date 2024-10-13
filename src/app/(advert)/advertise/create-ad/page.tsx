import { ScrollArea } from "@radix-ui/react-scroll-area";
import { CarouselSpacing } from "../component/bookAdCards";

const CreateAd: React.FC = () => {
    return (
        <main className="z-10">
            <ScrollArea className="h-screen flex flex-col justify-center items-center text-black dark: w-full pt-16 rounded-md border">
                <div>
                    <h1 className="text-4xl font-extrabold text-slate-800 from-accent-foreground dark:text-white">Choose your package and save your slot</h1>
                </div>
                <div className="p-10 w-full">
                <CarouselSpacing/>
                </div>
            </ScrollArea>
        </main>
    )
}

export default CreateAd;