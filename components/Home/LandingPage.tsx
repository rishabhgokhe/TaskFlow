import React from "react";
import { SparkleTextComponent } from "./SparkleText/SparkleTextComponent";
import Link from "next/link";
import { Button } from "../ui/button";
import GradientBorderButton from "../ui/GradientBorderButton";
import { BentoGridComponent } from "./BentoGrid/BentoGridComponent";
import { ScrollPhotoComponent } from "./ScrollPhoto/ScrollPhotoComponent";
import { VortexComponent } from "./Vortex/VortexComponent";
import Footer from "./Footer";
import ThemeToggle from "../ui/themeToggle";

export default function LandingPage() {
  return (
    <main className="flex flex-col justify-center items-center min-h-screen p-4">
      <div className="flex w-full flex-col sm:flex-row justify-between items-center pb-1">
        <div className="sm:pb-3 hidden sm:block"><ThemeToggle /></div>
        <h1 className="font-bold text-xl sm:text-3xl sm:pl-10 sm:mb-4 text-center flex-1">
          Welcome to TaskFlow
        </h1>
        <div>
          <GradientBorderButton link="/login" name="Login" />
          <GradientBorderButton link="/signup" name="Register" />
        </div>
      </div>

      <SparkleTextComponent />

      <p className="mb-4 mt-3">
        Homepage is under development... visit our dashboard and login page
      </p>
      <div className="flex gap-4">
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

      <ScrollPhotoComponent />
      <BentoGridComponent />
      <VortexComponent />
      <Footer />
    </main>
  );
}
