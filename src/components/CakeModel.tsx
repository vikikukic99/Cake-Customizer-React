import { Canvas } from "@react-three/fiber";
import { Sphere, Cylinder, Torus } from "@react-three/drei";

interface CakeProps {
  color: string;
  shape: string;
  decoration?: string;
}

export default function CakeModel({ color, shape, decoration }: CakeProps) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {shape === "Round" && <Sphere args={[1, 32, 32]} position={[0, 0, 0]} />}
      {shape === "Square" && <Cylinder args={[1, 1, 1, 4]} position={[0, 0, 0]} />}
      {shape === "Heart" && <Torus args={[0.5, 0.2, 16, 100]} position={[0, 0, 0]} />}
      {/* Future logic for applying decoration can be added here */}
    </Canvas>
  );
}
