"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { useReducedMotion } from "framer-motion";
import { useRef } from "react";
import * as THREE from "three";

function SculpturalObject() {
  const group = useRef<THREE.Group>(null);
  const shell = useRef<THREE.Mesh>(null);
  const frame = useRef<THREE.LineSegments>(null);
  const reducedMotion = useReducedMotion();

  useFrame((state) => {
    if (reducedMotion) {
      return;
    }

    const t = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = t * 0.16;
      group.current.rotation.x = Math.sin(t * 0.25) * 0.12;
    }

    if (shell.current) {
      shell.current.position.y = Math.sin(t * 0.7) * 0.06;
    }

    if (frame.current) {
      frame.current.rotation.z = t * 0.08;
    }
  });

  return (
    <group ref={group} position={[0, 0, 0]}>
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.4}>
        <mesh ref={shell} castShadow receiveShadow>
          <torusKnotGeometry args={[1.18, 0.28, 180, 18, 2, 5]} />
          <meshStandardMaterial color="#8d5f3c" metalness={0.2} roughness={0.88} />
        </mesh>
      </Float>
      <lineSegments ref={frame} scale={1.6}>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.05, 1)]} />
        <lineBasicMaterial color="#0b0b09" />
      </lineSegments>
      <mesh rotation={[-0.95, 0, 0]} position={[0, -1.4, 0]} receiveShadow>
        <circleGeometry args={[2.6, 64]} />
        <meshStandardMaterial color="#d7d0c4" roughness={1} metalness={0} />
      </mesh>
    </group>
  );
}

export function HeroCanvas() {
  return (
    <Canvas
      shadows
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.45, 4.7], fov: 38 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
    >
      <color attach="background" args={["#e5dfd4"]} />
      <fog attach="fog" args={["#e5dfd4", 4, 8]} />
      <ambientLight intensity={1.1} />
      <directionalLight position={[4, 5, 3]} intensity={1.4} castShadow />
      <directionalLight position={[-3, 2, -4]} intensity={0.5} color="#ffffff" />
      <SculpturalObject />
      <Environment preset="city" />
    </Canvas>
  );
}
