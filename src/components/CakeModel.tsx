import React from "react";
import { Canvas } from "@react-three/fiber";
import { Sphere, Cylinder, Torus } from "@react-three/drei";

type CakeProps = {
  color: string;
  shape: string;
};

const CakeModel: React.FC<CakeProps> = ({ color, shape }) => {
  const renderCakeShape = () => {
    switch (shape) {
      case "Heart":
        return <Torus args={[1, 0.4, 16, 100]} position={[0, 0.5, 0]} />;
      case "Square":
        return <Cylinder args={[1, 1, 1, 4]} position={[0, 0.5, 0]} />;
      default:
        return <Sphere args={[1, 32, 32]} position={[0, 0.5, 0]} />;
    }
  };

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 2, 2]} />
      <mesh>
        {renderCakeShape()}
        <meshStandardMaterial color={color} />
      </mesh>
    </Canvas>
  );
};

export default CakeModel;
