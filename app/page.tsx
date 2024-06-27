// import { SignInAction } from "@/actions/sign-in-action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-2xl">Welcome to TaskFlow</h1>
      <p className="mb-2">Homepage is under development... visit our dashboard and login page</p>
      <div className="grid gap-4 grid-cols-2">
      <Button><Link href={"/dashboard"} />Dashboard</Button>
      <Button variant={"outline"}><Link href={"/login"} />Login</Button>
      </div>
    </main>
  );
}
