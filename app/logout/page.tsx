import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import { Toaster } from "react-hot-toast";

export default function Logout() {
  return (
    <div className="flex flex-col justify-center items-center min-w-full">
      <h1>Development under proceess...</h1>
      <TooltipProvider>
      <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Demo Testing</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Trial</TooltipContent>
          </Tooltip>
      </TooltipProvider>
    </div>
  );
}
