import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqData } from "@/utils/data";


const FAQ: React.FC = () => {
    return (
        <div className="max-md:mx-4 md:w-3/4 md:p-10 max-md:p-2 bg-slate-200 rounded-md shadow-md flex flex-col m-auto mb-10">
            <div className="">
                <h2 className="text-3xl font-bold text-gray-800 text-center">Frequently asked questions</h2>
            </div>
            <Accordion type="single" collapsible>
                {
                    faqData.map((faq, index) => (
                        <AccordionItem className="" key={index} value={`item-${index}`}>
                            <AccordionTrigger className="text-lg text-slate-700 font-normal00">{faq.question}</AccordionTrigger>
                            <AccordionContent className="pl-4 text-lg text-slate-600 font-light">{faq.answer}</AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>

    )
}
export default FAQ;