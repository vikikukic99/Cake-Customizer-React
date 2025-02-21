import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function RoundCake({ color }) {
  const cakeRef = useRef();

  useFrame(() => {
    cakeRef.current.rotation.y += 0.005; // Slight rotation
  });

  return (
    <mesh ref={cakeRef} position={[0, 0, 0]}>
      <cylinderGeometry args={[1.5, 1.5, 1, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
