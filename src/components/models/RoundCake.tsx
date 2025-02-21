"use client";

import { MeshStandardMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

interface RoundCakeProps {
  color?: string;
  decoration?: string;
}

export default function RoundCake({ color = "#FFD700", decoration }: RoundCakeProps) {
  const cakeRef = useRef<Mesh>(null);

  return (
    <mesh ref={cakeRef}>
      <cylinderGeometry args={[1, 1, 0.5, 32]} />
      <MeshStandardMaterial color={color} />
    </mesh>
  );
}
