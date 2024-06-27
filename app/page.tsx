import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4">
      <h1 className="font-bold text-2xl mb-4">Welcome to TaskFlow</h1>
      <p className="mb-4">Homepage is under development... visit our dashboard and login page</p>
      <div className="grid gap-4 grid-cols-2">
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
      </div>
    </main>
  );
}