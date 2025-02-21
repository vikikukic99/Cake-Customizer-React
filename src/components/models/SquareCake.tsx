import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

export default function SquareCake({ color }) {
  const cakeRef = useRef();

  useFrame(() => {
    cakeRef.current.rotation.y += 0.005;
  });

  return (
    <mesh ref={cakeRef} position={[0, 0, 0]}>
      <boxGeometry args={[2, 1, 2]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
