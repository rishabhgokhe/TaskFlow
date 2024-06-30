import LandingPage from "@/components/Home/LandingPage";
import { SparkleTextComponent } from "@/components/Home/SparkleText/SparkleTextComponent";
import { BackgorundGrid } from "@/components/ui/BackgorundGrid";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="flex w-full justify-between items-center">
        <h1 className="font-bold text-xl sm:text-3xl mb-4 text-center flex-1">Welcome to TaskFlow</h1>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-auto">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl tracking-wide">
            <span className="/login">Login</span>
          </span>
        </button>
        <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 ml-auto">
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-medium text-white backdrop-blur-3xl tracking-wide">
            <a href="/signup">Register</a>
          </span>
        </button>
      </div>

      {/* <LandingPage /> */}
      <SparkleTextComponent />
      {/* <BackgorundGrid /> */}
      <p className="mb-4 mt-3">
        Homepage is under development... visit our dashboard and login page
      </p>
      <div className="grid gap-4 grid-cols-2">
        <Link href="/dashboard">
          <Button>Dashboard</Button>
        </Link>
        <Link href="/login">
          <Button variant="outline">Login</Button>
        </Link>
        <Link href="/signup">
          <Button variant="outline">Sign Up</Button>
        </Link>
      </div>
    </main>
  );
}
