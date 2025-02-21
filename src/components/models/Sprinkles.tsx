export default function Sprinkles() {
    return (
      <group>
        <mesh position={[0.5, 0.6, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        <mesh position={[-0.5, 0.6, 0]}>
          <sphereGeometry args={[0.05, 8, 8]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
    );
  }
  