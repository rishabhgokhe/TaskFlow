import UserProfile from "@/components/elements/UserProfile";
import Tasks from "@/components/elements/tasks";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Button variant={"secondary"}>Rishabh</Button>
      <UserProfile />
      <Tasks />
    </main>
  );
}
