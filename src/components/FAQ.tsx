import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/utils/data";


const FAQ: React.FC = () => {
    return (
        <div className="w-1/2 flex flex-col m-auto">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Frequently asked questions</h2>
            </div>
            <Accordion type="single" collapsible className="w-full pb-9">
                {
                    faqData.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`}>
                            <AccordionTrigger>{faq.question}</AccordionTrigger>
                            <AccordionContent className="pl-4">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>

    )
}
export default FAQ;