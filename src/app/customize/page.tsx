'use client';

import { useRouter } from 'next/navigation';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CakeModel from '@/components/CakeModel';
import { useState } from 'react';
import { Container, Typography, Select, MenuItem, Button } from '@mui/material';

export default function Customize() {
  const [color, setColor] = useState('#ffcc00');
  const [shape, setShape] = useState('cylinder');
  const [size, setSize] = useState('medium');
  const [flavor, setFlavor] = useState('vanilla');
  const [decoration, setDecoration] = useState('none');
  const router = useRouter();

  const handleCustomize = () => {
    const query = new URLSearchParams({
      color,
      shape,
      size,
      flavor,
      decoration,
    }).toString();
    router.push(`/order?${query}`);
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', mt: 2 }}>
      <Typography variant="h4" gutterBottom>
        Customize Your Cake
      </Typography>
      <Canvas style={{ height: 300 }}>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <CakeModel color={color} shape={shape} size={size} decoration={decoration} />
      </Canvas>
      <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
        Choose Color
      </Typography>
      <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
      <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
        Choose Shape
      </Typography>
      <Select value={shape} onChange={(e) => setShape(e.target.value)}>
        <MenuItem value="cylinder">Cylinder</MenuItem>
        <MenuItem value="cube">Cube</MenuItem>
        <MenuItem value="sphere">Sphere</MenuItem>
      </Select>
      <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
        Choose Size
      </Typography>
      <Select value={size} onChange={(e) => setSize(e.target.value)}>
        <MenuItem value="small">Small</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="big">Big</MenuItem>
        <MenuItem value="xl">XL</MenuItem>
      </Select>
      <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
        Choose Flavor
      </Typography>
      <Select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
        <MenuItem value="vanilla">Vanilla</MenuItem>
        <MenuItem value="chocolate">Chocolate</MenuItem>
        <MenuItem value="strawberry">Strawberry</MenuItem>
      </Select>
      <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
        Choose Decoration
      </Typography>
      <Select value={decoration} onChange={(e) => setDecoration(e.target.value)}>
        <MenuItem value="none">None</MenuItem>
        <MenuItem value="sprinkles">Sprinkles</MenuItem>
        <MenuItem value="fruit">Fruit</MenuItem>
      </Select>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleCustomize}>
        Customize
      </Button>
    </Container>
  );
}
