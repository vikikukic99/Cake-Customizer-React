"use client";

// import { MeshStandardMaterial } from "three";
import { useRef } from "react";
import { Mesh } from "three";

interface RoundCakeProps {
  color?: string;
}

export default function RoundCake({ color = "#FFD700" }: RoundCakeProps) {
  const cakeRef = useRef<Mesh>(null);

  return (
    <mesh ref={cakeRef}>
      <cylinderGeometry args={[1, 1, 0.5, 32]} />
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}
