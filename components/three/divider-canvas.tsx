"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function DividerForm() {
  const mesh = useRef<THREE.Mesh>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!mesh.current || reducedMotion) {
      return;
    }

    const t = state.clock.getElapsedTime();
    mesh.current.rotation.z = t * 0.08;
    mesh.current.rotation.x = Math.sin(t * 0.35) * 0.22;
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[1.25, 0.35, 12, 36]} />
      <meshStandardMaterial color="#d8d1c6" roughness={0.9} metalness={0.15} wireframe />
    </mesh>
  );
}

export function DividerCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 3.5], fov: 45 }} dpr={[1, 1.3]} gl={{ alpha: true }}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />
      <DividerForm />
    </Canvas>
  );
}
