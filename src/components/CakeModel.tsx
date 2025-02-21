"use client";

import { Canvas } from "@react-three/fiber";
import { useMemo } from "react";
import RoundCake from "@/components/models/RoundCake";
import SquareCake from "@/components/models/SquareCake";
import HeartCake from "@/components/models/HeartCake";

interface CakeProps {
  color?: string;
  decoration?: string;
}

export default function CakeModel({ color = "#FFD700", shape, decoration }: CakeProps) {
  const CakeComponent = useMemo(() => {
    switch (shape) {
      case "Square":
        return SquareCake;
      case "Heart":
        return HeartCake;
      default:
        return RoundCake;
    }
  }, [shape]);

  return (
    <Canvas style={{ height: "200px" }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[0, 2, 5]} intensity={1} />
      <CakeComponent color={color} decoration={decoration} />
    </Canvas>
  );
}
