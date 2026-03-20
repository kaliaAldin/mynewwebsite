"use client";

import dynamic from "next/dynamic";
import { WebGLFallback } from "@/components/three/webgl-fallback";

const DynamicPlayWithThreeCanvas = dynamic(
  () => import("@/components/three/play-with-three-canvas").then((mod) => mod.PlayWithThreeCanvas),
  {
    ssr: false,
    loading: () => <WebGLFallback label="Play with Three.js preview" />
  }
);

export function PlayWithThreeScene() {
  return (
    <section className="border border-line bg-paper">
      <div className="grid gap-5 p-4 md:p-6 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="grid content-start gap-4">
          <p className="eyebrow text-ink/58">Live component</p>
          <h2 className="text-3xl font-black uppercase leading-[0.94] tracking-brutal md:text-5xl">
            A coded object built from ring structures, tension, and controlled motion.
          </h2>
          <p className="max-w-xl text-sm leading-7 text-ink/76 md:text-base">
            This study borrows from the wheel-like divider language used across the site and turns it into a denser
            browser object. Interlocked torus forms, a routed spine, and a wire shell create a small spatial system
            that demonstrates composition, realtime rendering, and frontend control without slipping into generic demo aesthetics.
          </p>
          <div className="flex flex-wrap gap-2">
            {["React Three Fiber", "Three.js", "TypeScript", "Spatial UI"].map((item) => (
              <span key={item} className="border border-line px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-ink/64">
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className="border border-line bg-fog/25 p-2">
          <div className="relative h-[320px] overflow-hidden border border-line md:h-[420px]">
            <DynamicPlayWithThreeCanvas />
          </div>
        </div>
      </div>
    </section>
  );
}
