import { ToolTipIcon } from "@/components/elements/TootTipIcon";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function TagsAccordian() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="tags">
        <ToolTipIcon
          name=" Click to view all Tags"
          triggerJsxElement={
            <AccordionTrigger className="hover:no-underline p-2">
              <h2 className="text-2xl">Tags</h2>
            </AccordionTrigger>
          }
        />
        <AccordionContent>
          <div className="grid grid-cols-3 gap-2 p-2">
            <div className="col-span-1">
              <button>
                <span className="inline-block bg-blue-500 text-white text-xs px-2 py-1 rounded-full font-semibold tracking-wide">
                  flipkart
                </span>
              </button>
            </div>
            <div className="col-span-1">
              <button>
                <span className="inline-block bg-amber-600 text-white text-xs px-2 py-1 rounded-full font-semibold tracking-wide">
                  amazon
                </span>
              </button>
            </div>
            <div className="col-span-1">
              <button>
                <span className="inline-block bg-rose-600	 text-white text-xs px-2 py-1 rounded-full font-semibold tracking-wide">
                  bills
                </span>
              </button>
            </div>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
