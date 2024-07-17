"use client";
import React, { useEffect, useState } from "react";
import { MobileNav } from "./SideBar/MobileSideBar";
import { CircleUser, Search } from "lucide-react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useUserContext } from "@/context/User/UserContext";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import UserCircleIcon from "@/public/svg/icons/UserCircleIcon";
import CustomButton from "../elements/CustomButton";
import GetQuotes from "@/middleware/getQuotes";

export default function SearchAreaWithAvatarDropdown() {
  const { user } = useUserContext();
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      const fetchedQuote = await GetQuotes();
      setQuote(fetchedQuote);
    };

    fetchQuote();
  }, []);

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <MobileNav />
      <div className="w-full flex-1">
        <form>
          <div className="relative flex flex-col md:flex-row items-center">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search tasks..."
              className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3 ring-inset"
            />
            <h3 className="hidden md:block mx-auto font-semibold">{`Welcome back ${user?.name}`}</h3>
            <p className="hidden md:block mx-auto font-semibold">{quote}</p>
          </div>
        </form>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="secondary" size="icon" className="rounded-full">
            <Avatar>
              <AvatarImage src="https://avatars.githubusercontent.com/u/120303705?v=4" />
              <AvatarFallback>
                <UserCircleIcon />
              </AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Settings</DropdownMenuItem>
          <DropdownMenuItem>
            <a href={"/help"}>Support</a>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <CustomButton className="w-full">Logout</CustomButton>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
}
