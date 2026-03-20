"use client";

import dynamic from "next/dynamic";
import { WebGLFallback } from "@/components/three/webgl-fallback";

const DynamicProjectHeaderCanvas = dynamic(
  () => import("@/components/three/project-header-canvas").then((mod) => mod.ProjectHeaderCanvas),
  {
    ssr: false,
    loading: () => <WebGLFallback label="Project header spatial accent" />
  }
);

export function ProjectHeaderScene() {
  return (
    <div className="border border-line bg-fog/35">
      <div className="h-[260px] md:h-[320px]">
        <DynamicProjectHeaderCanvas />
      </div>
    </div>
  );
}
