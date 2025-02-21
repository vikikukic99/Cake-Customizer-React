"use client";

import { MeshStandardMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

interface SquareCakeProps {
  color?: string;
}

export default function SquareCake({ color = "#FFD700" }: SquareCakeProps) {
  const cakeRef = useRef<Mesh>(null);

  return (
    <mesh ref={cakeRef}>
      <boxGeometry args={[1, 1, 0.5]} />
      <MeshStandardMaterial color={color} />
    </mesh>
  );
}
