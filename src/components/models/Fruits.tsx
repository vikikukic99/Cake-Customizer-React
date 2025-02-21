export default function Fruits() {
    return (
      <group>
        <mesh position={[0.6, 0.8, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="red" />
        </mesh>
        <mesh position={[-0.6, 0.8, 0]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="yellow" />
        </mesh>
      </group>
    );
  }
  