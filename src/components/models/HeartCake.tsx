import { Canvas } from "@react-three/fiber";
import { Torus } from "@react-three/drei";
import { MutableRefObject } from "react";

interface HeartCakeProps {
  color: string;
  cakeRef: MutableRefObject<HTMLDivElement | null>;
}

export default function HeartCake({ color, cakeRef }: HeartCakeProps) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Torus args={[0.5, 0.2, 16, 100]} position={[0, 0, 0]} />
    </Canvas>
  );
}
