"use client";
import { Canvas } from "@react-three/fiber";
import { MeshStandardMaterial, Sphere, Cylinder, Torus, Box } from "@react-three/drei";

export default function CakeModel({ color, shape, decoration }) {
    const renderShape = () => {
        switch (shape) {
            case "Round":
                return <Cylinder args={[1, 1, 0.5, 32]} />;
            case "Square":
                return <Box args={[1, 1, 0.5]} />;
            case "Heart":
                return <Torus args={[0.6, 0.3, 16, 100]} />;
            default:
                return <Cylinder args={[1, 1, 0.5, 32]} />;
        }
    };

    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <directionalLight position={[2, 2, 2]} />
            <mesh position={[0, 0, 0]}>
                {renderShape()}
                <meshStandardMaterial color={color} />
            </mesh>
            {decoration !== "None" && (
                <mesh position={[0, 0.5, 0]}>
                    <Sphere args={[0.2, 32, 32]} />
                    <meshStandardMaterial color="red" />
                </mesh>
            )}
        </Canvas>
    );
}
