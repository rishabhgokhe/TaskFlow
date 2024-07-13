import React from "react";
import { SparkleTextComponent } from "./SparkleText/SparkleTextComponent";
import GradientBorderButton from "../elements/GradientBorderButton";
import { BentoGridComponent } from "./BentoGrid/BentoGridComponent";
import { ScrollPhotoComponent } from "./ScrollPhoto/ScrollPhotoComponent";
import { VortexComponent } from "./Vortex/VortexComponent";
import Footer from "./Footer";
import ThemeToggle from "../elements/themeToggle";
import Banner from "../elements/Banner";

import ArrowUpRight01Icon from "@/public/svg/icons/ArrowUpRight01Icon";
import RenewableEnergyIcon from "@/public/svg/icons/RenewableEnergyIcon";
import BackToTopButton from "../elements/BackToTopButton";

export default function LandingPage() {
  return (
    <div>
      <Banner />
      <main className="flex flex-col justify-center items-center min-h-screen p-4">
        <div className="flex w-full flex-row justify-between items-center pb-1">
          <div className="sm:pb-3 sm:top-5 sm:left-5 sm:z-10">
            <ThemeToggle />
          </div>
          <h1 className="font-bold text-xl mr-5 sm:m-0 sm:text-3xl sm:pl-10 sm:mb-4 text-center flex-1">
            Welcome to TaskFlow
          </h1>
          <div className="hidden sm:block">
            <GradientBorderButton link="/login" name="Login" icon={<ArrowUpRight01Icon />} />
            <GradientBorderButton link="/signup" name="Register" icon={<RenewableEnergyIcon />} />
          </div>
        </div>

        <SparkleTextComponent />
        <div className="sm:hidden flex w-full flex-row justify-center items-center pt-3 gap-5">
          <GradientBorderButton link="/login" name="Login" icon={<ArrowUpRight01Icon />} />
          <GradientBorderButton link="/signup" name="Register" icon={<RenewableEnergyIcon />} />
        </div>

        <ScrollPhotoComponent />
        <BentoGridComponent />
        <VortexComponent />
        <BackToTopButton />
        <Footer />
      </main>
    </div>
  );
}
