"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function HeaderStructure() {
  const group = useRef<THREE.Group>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (!group.current || reducedMotion) {
      return;
    }

    const t = state.clock.getElapsedTime();
    group.current.rotation.y = t * 0.15;
    group.current.rotation.z = Math.sin(t * 0.25) * 0.08;
  });

  return (
    <group ref={group}>
      <mesh>
        <octahedronGeometry args={[1.35, 0]} />
        <meshStandardMaterial color="#8d5f3c" roughness={0.75} metalness={0.22} />
      </mesh>
      <lineSegments scale={1.4}>
        <edgesGeometry args={[new THREE.BoxGeometry(1.8, 1.8, 1.8)]} />
        <lineBasicMaterial color="#0b0b09" />
      </lineSegments>
    </group>
  );
}

export function ProjectHeaderCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 42 }} dpr={[1, 1.4]} gl={{ alpha: true }}>
      <ambientLight intensity={1} />
      <directionalLight position={[3, 4, 2]} intensity={1.3} />
      <HeaderStructure />
    </Canvas>
  );
}
