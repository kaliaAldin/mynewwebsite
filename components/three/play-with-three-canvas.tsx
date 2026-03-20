"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, Float, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

type TemplateId = "orbital-core" | "scarred-monoliths" | "rhizome-column" | "regrowth-tunnel";

type GroupRef = React.RefObject<THREE.Group | null>;

const templates: Array<{
  id: TemplateId;
  title: string;
  note: string;
  description: string;
}> = [
  {
    id: "orbital-core",
    title: "Orbital Core",
    note: "Hero section / landing header",
    description: "A floating mineral body with a fungal halo, designed for intros and project openers."
  },
  {
    id: "scarred-monoliths",
    title: "Scarred Monoliths",
    note: "Case-study separator",
    description: "Three standing forms with excavation-like skin for harder editorial transitions."
  },
  {
    id: "rhizome-column",
    title: "Rhizome Column",
    note: "Interactive object view",
    description: "A vertical growth object that sits between geology, infrastructure, and fungal bloom."
  },
  {
    id: "regrowth-tunnel",
    title: "Regrowth Tunnel",
    note: "Immersive fullscreen section",
    description: "A corridor-like study for deeper spatial scenes and navigable transitions."
  }
];

function usePointerLerp(strength = 0.35): GroupRef {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    const x = state.pointer.x * strength;
    const y = state.pointer.y * strength;
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, y * 0.5, 0.05);
  });

  return group;
}

function layeredTexture({
  colorA = "#28353c",
  colorB = "#8f755e",
  colorC = "#d2c3b4"
}: { colorA?: string; colorB?: string; colorC?: string } = {}) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uTime: { value: 0 },
      colorA: { value: new THREE.Color(colorA) },
      colorB: { value: new THREE.Color(colorB) },
      colorC: { value: new THREE.Color(colorC) }
    },
    vertexShader: `
      varying vec2 vUv;
      varying vec3 vPos;
      void main() {
        vUv = uv;
        vPos = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec2 vUv;
      varying vec3 vPos;
      uniform float uTime;
      uniform vec3 colorA;
      uniform vec3 colorB;
      uniform vec3 colorC;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
      }

      float noise(vec2 p) {
        vec2 i = floor(p);
        vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      float fbm(vec2 p) {
        float v = 0.0;
        float a = 0.5;
        for (int i = 0; i < 5; i++) {
          v += a * noise(p);
          p *= 2.0;
          a *= 0.5;
        }
        return v;
      }

      void main() {
        vec2 p = vUv * 4.0;
        float swirl = fbm(p + vec2(fbm(p + uTime * 0.02), fbm(p - uTime * 0.02)) * 2.0);
        float ridge = smoothstep(0.35, 0.9, abs(sin((vPos.y + swirl * 3.0) * 3.5)));
        vec3 col = mix(colorA, colorB, swirl);
        col = mix(col, colorC, ridge * 0.55);
        gl_FragColor = vec4(col, 1.0);
      }
    `
  });
}

function AnimatedShaderMaterial(props: { colorA?: string; colorB?: string; colorC?: string }) {
  const material = useMemo(() => layeredTexture(props), [props.colorA, props.colorB, props.colorC]);

  useFrame((_, delta) => {
    material.uniforms.uTime.value += delta;
  });

  return <primitive object={material} attach="material" />;
}

function Ground({ radius = 8, y = -1.15 }: { radius?: number; y?: number }) {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, y, 0]}>
      <circleGeometry args={[radius, 128]} />
      <meshStandardMaterial color="#151313" roughness={1} metalness={0.1} />
    </mesh>
  );
}

function Spore({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    ref.current.position.y += Math.sin(state.clock.elapsedTime * 1.2 + position[0] * 2.3 + position[2]) * 0.0009;
    ref.current.rotation.z += 0.003;
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <mesh position={[0, 0.18, 0]}>
        <sphereGeometry args={[0.08, 18, 18]} />
        <meshStandardMaterial color="#e8d7cb" roughness={0.8} />
      </mesh>
      <mesh position={[0, 0.02, 0]}>
        <cylinderGeometry args={[0.015, 0.02, 0.22, 8]} />
        <meshStandardMaterial color="#d4c0b4" roughness={1} />
      </mesh>
    </group>
  );
}

function SporeField({ count = 80, spread = 3.5, ring = false }: { count?: number; spread?: number; ring?: boolean }) {
  const spores = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const angle = (i / count) * Math.PI * 2;
        const r = ring ? 1.9 + Math.sin(i * 13.7) * 0.2 : Math.random() * spread;
        const x = ring ? Math.cos(angle) * r : (Math.random() - 0.5) * spread * 2;
        const z = ring ? Math.sin(angle) * r : (Math.random() - 0.5) * spread * 2;
        const y = ring ? -0.35 + Math.random() * 0.3 : -0.9 + Math.random() * 0.45;
        const scale = 0.7 + Math.random() * 1.2;

        return { position: [x, y, z] as [number, number, number], scale };
      }),
    [count, spread, ring]
  );

  return (
    <group>
      {spores.map((spore, index) => (
        <Spore key={`${spore.position.join("-")}-${index}`} position={spore.position} scale={spore.scale} />
      ))}
    </group>
  );
}

function TemplateA() {
  const group = usePointerLerp(0.45);

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.3}>
        <mesh castShadow position={[0, 0.1, 0]}>
          <sphereGeometry args={[1.2, 96, 96]} />
          <AnimatedShaderMaterial colorA="#26353a" colorB="#7e6758" colorC="#c4b09b" />
        </mesh>
      </Float>
      <SporeField count={46} ring spread={3} />
      <Ground radius={7} y={-1.15} />
    </group>
  );
}

function Monolith({
  position = [0, 0, 0],
  scale = [1, 2.2, 1]
}: {
  position?: [number, number, number];
  scale?: [number, number, number];
}) {
  return (
    <mesh castShadow position={position} scale={scale}>
      <icosahedronGeometry args={[0.9, 5]} />
      <AnimatedShaderMaterial colorA="#302f31" colorB="#afa391" colorC="#0f1215" />
    </mesh>
  );
}

function TemplateB() {
  const group = usePointerLerp(0.3);

  return (
    <group ref={group}>
      <Float speed={1} rotationIntensity={0.18} floatIntensity={0.12}>
        <Monolith position={[-1.4, 0.2, 0.1]} scale={[0.85, 1.7, 0.85]} />
        <Monolith position={[0, 0.3, 0]} scale={[1.1, 2.2, 1.1]} />
        <Monolith position={[1.55, 0.05, 0.25]} scale={[0.95, 1.5, 0.95]} />
      </Float>
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.2, 0]}>
        <circleGeometry args={[8, 128]} />
        <AnimatedShaderMaterial colorA="#17181a" colorB="#3f3633" colorC="#8b7a68" />
      </mesh>
      <SporeField count={32} spread={4.2} />
    </group>
  );
}

function FungalColumn() {
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) {
      return;
    }

    ref.current.rotation.y = state.clock.elapsedTime * 0.1;
  });

  const instances = useMemo(
    () =>
      Array.from({ length: 90 }, () => {
        const angle = Math.random() * Math.PI * 2;
        const radius = 0.9 + Math.random() * 0.55;
        const y = -0.9 + Math.random() * 2.2;
        const scale = 0.25 + Math.random() * 0.8;

        return {
          position: [Math.cos(angle) * radius, y, Math.sin(angle) * radius] as [number, number, number],
          rotation: [Math.random() * 0.4, Math.random() * Math.PI, Math.random() * 0.4] as [number, number, number],
          scale
        };
      }),
    []
  );

  return (
    <group ref={ref}>
      <mesh castShadow>
        <cylinderGeometry args={[0.95, 1.05, 2.8, 48, 24, true]} />
        <AnimatedShaderMaterial colorA="#172028" colorB="#8e765d" colorC="#d7c6b2" />
      </mesh>
      {instances.map((item, index) => (
        <group key={`${item.position.join("-")}-${index}`} position={item.position} rotation={item.rotation} scale={item.scale}>
          <mesh castShadow position={[0, 0.15, 0]}>
            <coneGeometry args={[0.12, 0.22, 5]} />
            <meshStandardMaterial color="#eadfd6" roughness={0.8} />
          </mesh>
          <mesh castShadow>
            <cylinderGeometry args={[0.018, 0.018, 0.26, 8]} />
            <meshStandardMaterial color="#dcc7b7" roughness={1} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function TemplateC() {
  const group = usePointerLerp(0.4);

  return (
    <group ref={group}>
      <Float speed={1.3} rotationIntensity={0.15} floatIntensity={0.15}>
        <FungalColumn />
      </Float>
      <SporeField count={40} spread={4.5} />
      <Ground radius={8} y={-1.4} />
    </group>
  );
}

function TunnelFrame({ z = 0 }: { z?: number }) {
  return (
    <group position={[0, 0, z]}>
      <mesh>
        <boxGeometry args={[3.6, 2.5, 0.08]} />
        <meshStandardMaterial color="#241f22" roughness={1} metalness={0.2} />
      </mesh>
      <mesh position={[0, 0, 0.05]}>
        <boxGeometry args={[2.9, 1.9, 0.06]} />
        <meshStandardMaterial color="#0c0c0d" roughness={1} metalness={0.1} />
      </mesh>
      <mesh position={[0, 1.25, 0.08]}>
        <boxGeometry args={[2.2, 0.12, 0.14]} />
        <meshStandardMaterial emissive="#f4e4d2" emissiveIntensity={0.9} color="#f4e4d2" />
      </mesh>
      <mesh position={[-1.55, 0, 0.08]}>
        <boxGeometry args={[0.08, 2.5, 0.12]} />
        <meshStandardMaterial color="#6d5966" roughness={0.7} metalness={0.3} />
      </mesh>
      <mesh position={[1.55, 0, 0.08]}>
        <boxGeometry args={[0.08, 2.5, 0.12]} />
        <meshStandardMaterial color="#6d5966" roughness={0.7} metalness={0.3} />
      </mesh>
    </group>
  );
}

function TemplateD() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) {
      return;
    }

    group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, state.pointer.x * 0.35, 0.05);
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, state.pointer.x * 0.12, 0.05);
  });

  const carpet = useMemo(
    () =>
      Array.from({ length: 120 }, () => ({
        position: [(Math.random() - 0.5) * 3.6, -1.05 + Math.random() * 0.3, -3.7 + Math.random() * 7.2] as [number, number, number],
        scale: 0.55 + Math.random() * 0.85,
        rotation: [0, Math.random() * Math.PI, 0] as [number, number, number]
      })),
    []
  );

  return (
    <group ref={group}>
      {[0, -2.2, -4.4, -6.6].map((z) => (
        <TunnelFrame key={z} z={z} />
      ))}
      <mesh position={[0, -1.2, -3.3]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[3.6, 8]} />
        <AnimatedShaderMaterial colorA="#1d181b" colorB="#473437" colorC="#bb9477" />
      </mesh>
      {carpet.map((item, index) => (
        <group key={`${item.position.join("-")}-${index}`} position={item.position} rotation={item.rotation} scale={item.scale}>
          <mesh>
            <sphereGeometry args={[0.07, 14, 14]} />
            <meshStandardMaterial color="#f3dfd3" roughness={0.7} />
          </mesh>
          <mesh position={[0, -0.1, 0]}>
            <cylinderGeometry args={[0.012, 0.018, 0.22, 8]} />
            <meshStandardMaterial color="#dbc7b7" roughness={1} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

function Scene({ active }: { active: TemplateId }) {
  return (
    <>
      <color attach="background" args={["#0f0d0e"]} />
      <fog attach="fog" args={["#0f0d0e", 7, 18]} />
      <ambientLight intensity={0.7} />
      <directionalLight position={[4, 6, 3]} intensity={2.2} castShadow />
      <pointLight position={[-4, 2, 4]} intensity={0.9} color="#efddcf" />
      <spotLight position={[0, 6, 0]} intensity={0.8} angle={0.4} penumbra={1} color="#e9cdbd" />

      {active === "orbital-core" ? <TemplateA /> : null}
      {active === "scarred-monoliths" ? <TemplateB /> : null}
      {active === "rhizome-column" ? <TemplateC /> : null}
      {active === "regrowth-tunnel" ? <TemplateD /> : null}

      <ContactShadows position={[0, -1.6, 0]} opacity={0.35} blur={2.5} scale={12} far={4.5} />
      <Environment preset="city" />
      <OrbitControls
        enablePan={false}
        minDistance={active === "regrowth-tunnel" ? 3.5 : 4.2}
        maxDistance={active === "regrowth-tunnel" ? 8 : 8.5}
        minPolarAngle={Math.PI / 3.5}
        maxPolarAngle={Math.PI / 1.8}
      />
    </>
  );
}

function Overlay({
  active,
  setActive
}: {
  active: TemplateId;
  setActive: (templateId: TemplateId) => void;
}) {
  const current = templates.find((template) => template.id === active) ?? templates[0];

  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="pointer-events-auto absolute left-3 top-3 max-w-xs border border-white/12 bg-black/42 p-4 text-stone-100 backdrop-blur-md md:left-5 md:top-5 md:max-w-sm md:p-5">
        <div className="text-[0.68rem] uppercase tracking-[0.24em] text-stone-400">Three.js template pack</div>
        <h2 className="mt-2 text-2xl font-black uppercase leading-tight tracking-[0.08em] md:text-3xl">
          Fungal / extractive scene studies
        </h2>
        <p className="mt-3 text-sm leading-6 text-stone-300">
          Interactive scene templates inspired by geological textures, fungal growth, and damaged landscapes.
        </p>
      </div>

      <div className="pointer-events-auto absolute bottom-3 left-3 right-3 md:bottom-5 md:left-5 md:right-auto">
        <div className="w-full border border-white/12 bg-black/42 p-3 backdrop-blur-md md:w-[420px]">
          <div className="grid gap-2">
            {templates.map((template) => {
              const isActive = template.id === active;

              return (
                <button
                  key={template.id}
                  onClick={() => setActive(template.id)}
                  className={`border px-4 py-3 text-left transition ${
                    isActive ? "border-stone-200/40 bg-white/12" : "border-white/8 bg-white/5 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold uppercase tracking-[0.08em] text-stone-100">{template.title}</div>
                      <div className="mt-1 text-[0.68rem] uppercase tracking-[0.18em] text-stone-400">{template.note}</div>
                    </div>
                    <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-400">{isActive ? "Active" : "Open"}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="pointer-events-auto absolute right-3 top-3 hidden max-w-xs border border-white/12 bg-black/42 p-4 text-stone-100 backdrop-blur-md md:right-5 md:top-5 md:block">
        <div className="text-[0.68rem] uppercase tracking-[0.18em] text-stone-400">Selected</div>
        <h3 className="mt-2 text-xl font-semibold uppercase tracking-[0.08em]">{current.title}</h3>
        <p className="mt-2 text-sm leading-6 text-stone-300">{current.description}</p>
        <div className="mt-3 text-[0.68rem] uppercase tracking-[0.18em] text-stone-400">
          Drag to orbit / move pointer for parallax
        </div>
      </div>
    </div>
  );
}

function TemplateCanvas({
  active,
  camera
}: {
  active: TemplateId;
  camera: { position: [number, number, number]; fov: number };
}) {
  return (
    <Canvas
      camera={camera}
      shadows
      dpr={[1, 1.4]}
      gl={{ antialias: true, powerPreference: "high-performance" }}
    >
      <Suspense fallback={null}>
        <Scene active={active} />
      </Suspense>
    </Canvas>
  );
}

export function PlayWithThreeCanvas() {
  const [active, setActive] = useState<TemplateId>("orbital-core");

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0f0d0e]">
      <TemplateCanvas active={active} camera={{ position: [0, 1.4, 5.8], fov: 42 }} />
      <Overlay active={active} setActive={setActive} />
    </div>
  );
}

export function PlayWithThreeHeaderCanvas() {
  return <TemplateCanvas active="scarred-monoliths" camera={{ position: [0, 1.2, 5.4], fov: 38 }} />;
}

export function PlayWithThreeSidebarCanvas() {
  return <TemplateCanvas active="rhizome-column" camera={{ position: [0, 1.1, 4.8], fov: 36 }} />;
}
