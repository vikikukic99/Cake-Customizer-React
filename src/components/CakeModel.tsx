import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import * as THREE from 'three';


type Props = {
  color: string;
  shape: string;
  size: string;
  decoration: string;
};

export default function CakeModel({ color, shape, size, decoration }: Props) {
  const ref = useRef<Mesh>(null);
  useFrame(() => ref.current && (ref.current.rotation.y += 0.01));
  
  let scale;
switch (size) {
  case 'small':
    scale = new THREE.Vector3(0.7, 0.7, 0.7);
    break;
  case 'medium':
    scale = new THREE.Vector3(1, 1, 1);
    break;
  case 'big':
    scale = new THREE.Vector3(1.3, 1.3, 1.3);
    break;
  case 'xl':
    scale = new THREE.Vector3(1.6, 1.6, 1.6);
    break;
  default:
    scale = new THREE.Vector3(1, 1, 1);
}
  
  let geometry;
  if (shape === 'cube') {
    geometry = <boxGeometry args={[1, 1, 1]} />;
  } else if (shape === 'sphere') {
    geometry = <sphereGeometry args={[0.7, 32, 32]} />;
  } else {
    geometry = <cylinderGeometry args={[1, 0.5, 0.5, 32]} />;
  }
  
  return (
    <mesh ref={ref} scale={scale}>
      {geometry}
      <meshStandardMaterial color={color} />
      {/* Add decorations */}
      {decoration === 'sprinkles' && (
        <mesh position={[0, 0.6, 0]}>
          <sphereGeometry args={[0.05, 16, 16]} />
          <meshStandardMaterial color="red" />
        </mesh>
      )}
      {decoration === 'fruit' && (
        <mesh position={[0, 0.6, 0]}>
          <boxGeometry args={[0.2, 0.1, 0.2]} />
          <meshStandardMaterial color="green" />
        </mesh>
      )}
    </mesh>
  );
}