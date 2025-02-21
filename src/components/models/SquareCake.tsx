"use client";

import { MeshPhysicalMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

interface SquareCakeProps {
  color?: string;
  decoration?: string;
}

export default function SquareCake({ color = "#FFD700" }: SquareCakeProps) {
  const cakeRef = useRef<Mesh>(null);

  return (
    <mesh ref={cakeRef}>
      <boxGeometry args={[1, 1, 0.5]} />
      <MeshPhysicalMaterial color={color} />
    </mesh>
  );
}
