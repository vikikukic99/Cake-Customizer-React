"use client";

import { MeshStandardMaterial } from "@react-three/drei";
import { useRef } from "react";
import { Mesh } from "three";

interface HeartCakeProps {
  color?: string;
  decoration?: string;
}

export default function HeartCake({ color = "#FFD700", decoration }: HeartCakeProps) {
  const cakeRef = useRef<Mesh>(null);

  return (
    <mesh ref={cakeRef}>
      <shapeGeometry />
      <MeshStandardMaterial color={color} />
    </mesh>
  );
}
