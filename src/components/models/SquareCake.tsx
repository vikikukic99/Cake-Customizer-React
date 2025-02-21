"use client";

// import { MeshStandardMaterial } from "three";
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
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  );
}
