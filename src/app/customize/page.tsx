"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Button, Typography, MenuItem, Select } from "@mui/material";
import { SketchPicker } from "react-color";
import CakeModel from "@/components/CakeModel";

interface CakeState {
  color: string;
  shape: string;
  size: string;
  flavor: string;
  decoration: string;
}

const shapes = ["Round", "Square", "Heart"];
const sizes = ["Small", "Medium", "Large"];
const flavors = ["Vanilla", "Chocolate", "Strawberry"];
const decorations = ["None", "Candles", "Fruits"];

export default function CustomizePage() {
  const router = useRouter();
  const [cake, setCake] = useState<CakeState>({
    color: "#FFD700",
    shape: "Round",
    size: "Medium",
    flavor: "Vanilla",
    decoration: "None",
  });

  const handleSubmit = () => {
    router.push("/order", { scroll: false, state: cake });
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Customize Your Cake</Typography>
      <CakeModel color={cake.color} shape={cake.shape} decoration={cake.decoration} />

      <Typography>Select Cake Color:</Typography>
      <SketchPicker color={cake.color} onChange={(color) => setCake({ ...cake, color: color.hex })} />

      <Typography>Select Shape:</Typography>
      <Select value={cake.shape} onChange={(e) => setCake({ ...cake, shape: e.target.value })} fullWidth>
        {shapes.map((shape) => (
          <MenuItem key={shape} value={shape}>
            {shape}
          </MenuItem>
        ))}
      </Select>

      <Typography>Select Size:</Typography>
      <Select value={cake.size} onChange={(e) => setCake({ ...cake, size: e.target.value })} fullWidth>
        {sizes.map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>

      <Typography>Select Flavor:</Typography>
      <Select value={cake.flavor} onChange={(e) => setCake({ ...cake, flavor: e.target.value })} fullWidth>
        {flavors.map((flavor) => (
          <MenuItem key={flavor} value={flavor}>
            {flavor}
          </MenuItem>
        ))}
      </Select>

      <Typography>Select Decoration:</Typography>
      <Select value={cake.decoration} onChange={(e) => setCake({ ...cake, decoration: e.target.value })} fullWidth>
        {decorations.map((decoration) => (
          <MenuItem key={decoration} value={decoration}>
            {decoration}
          </MenuItem>
        ))}
      </Select>

      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleSubmit}>
        Proceed to Order
      </Button>
    </Container>
  );
}
