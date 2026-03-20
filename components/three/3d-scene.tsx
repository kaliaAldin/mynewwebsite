import { HeroScene } from "@/components/three/hero-scene";
import { ProjectHeaderScene } from "@/components/three/project-header-scene";
import { SectionDivider3D } from "@/components/three/section-divider-3d";

type ThreeDSceneProps = {
  variant?: "hero" | "project" | "divider";
};

export function ThreeDScene({ variant = "hero" }: ThreeDSceneProps) {
  if (variant === "project") {
    return <ProjectHeaderScene />;
  }

  if (variant === "divider") {
    return <SectionDivider3D />;
  }

  return <HeroScene />;
}
