import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Shape } from "three";

export default function HeartCake({ color }) {
  const cakeRef = useRef();

  useFrame(() => {
    cakeRef.current.rotation.y += 0.005;
  });

  const heartShape = new Shape();
  heartShape.moveTo(0, 0.4);
  heartShape.bezierCurveTo(0, 0.6, -0.4, 0.8, -0.8, 0.4);
  heartShape.bezierCurveTo(-1.2, 0, -0.8, -0.8, 0, -1);
  heartShape.bezierCurveTo(0.8, -0.8, 1.2, 0, 0.8, 0.4);
  heartShape.bezierCurveTo(0.4, 0.8, 0, 0.6, 0, 0.4);

  const extrudeSettings = { depth: 0.5, bevelEnabled: false };

  return (
    <mesh ref={cakeRef} position={[0, 0, 0]}>
      <extrudeGeometry args={[heartShape, extrudeSettings]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
