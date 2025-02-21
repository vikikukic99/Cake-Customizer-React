export default function ChocolateDrizzle() {
    return (
      <mesh position={[0, 0.5, 0]}>
        <torusGeometry args={[1.2, 0.1, 16, 100]} />
        <meshStandardMaterial color="#5C3317" />
      </mesh>
    );
  }
  