"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { AnimationData } from "../types"

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Loading() {
  const [loadingSvg, setLoadingSvg] = useState<AnimationData | null>(null);

  useEffect(() => {
    import("../public/svg/animated/loading.json").then((data) => {
      setLoadingSvg(data.default as AnimationData);
    });
  }, []);

  if (!loadingSvg) {
    return null;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="flex flex-col items-center space-y-3">
        <div className="mt-4 w-48 h-48">
          <Lottie animationData={loadingSvg} />
        </div>
        <p className="mt-4 text-gray-500">Loading...</p>
      </div>
    </div>
  );
}