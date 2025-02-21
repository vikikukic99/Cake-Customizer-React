import { Canvas } from "@react-three/fiber";
import { Sphere } from "@react-three/drei";

interface RoundCakeProps {
  color: string;
}

export default function RoundCake({ color }: RoundCakeProps) {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere args={[1, 32, 32]} position={[0, 0, 0]} />
    </Canvas>
  );
}
