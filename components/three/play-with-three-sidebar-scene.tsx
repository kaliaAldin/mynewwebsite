"use client";

import dynamic from "next/dynamic";
import { WebGLFallback } from "@/components/three/webgl-fallback";

const DynamicSidebarCanvas = dynamic(
  () => import("@/components/three/play-with-three-canvas").then((mod) => mod.PlayWithThreeSidebarCanvas),
  {
    ssr: false,
    loading: () => <WebGLFallback label="Play with Three.js object" />
  }
);

export function PlayWithThreeSidebarScene() {
  return (
    <div className="border border-line bg-paper p-2">
      <div className="h-[360px] overflow-hidden border border-line bg-fog/35 md:h-[460px]">
        <DynamicSidebarCanvas />
      </div>
    </div>
  );
}
