"use client";

import dynamic from "next/dynamic";
import { WebGLFallback } from "@/components/three/webgl-fallback";

const DynamicHeaderCanvas = dynamic(
  () => import("@/components/three/play-with-three-canvas").then((mod) => mod.PlayWithThreeHeaderCanvas),
  {
    ssr: false,
    loading: () => <WebGLFallback label="Play with Three.js header" />
  }
);

export function PlayWithThreeHeaderScene() {
  return (
    <div className="border border-line bg-fog/35">
      <div className="h-[260px] md:h-[320px]">
        <DynamicHeaderCanvas />
      </div>
    </div>
  );
}
