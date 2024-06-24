import { SignInAction } from "@/actions/sign-in-action";
import { SideBar } from "@/components/SideBar/SideBar";
import Tasks from "@/components/elements/tasks";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ui/themeToggle";

export default function Home() {
  return (
    <main className="">
      <SideBar />
    </main>
  );
}
