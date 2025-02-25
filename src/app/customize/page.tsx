"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Container,
  Button,
  Typography,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { SketchPicker, ColorResult } from "react-color";
import CakeModel from "@/components/CakeModel";

const shapes = ["Round", "Square", "Heart"];
const sizes = ["Small", "Medium", "Large"];
const flavors = ["Vanilla", "Chocolate", "Strawberry"];
const decorations = ["Sprinkles", "Chocolate Drizzle", "Fruits"];

interface CakeProps {
  color: string;
  shape: string;
  size: string;
  flavor: string;
  decoration: string;
}

export default function CustomizePage() {
  const router = useRouter();
  const [cake, setCake] = useState<CakeProps>({
    color: "#FFD700",
    shape: "Round",
    size: "Medium",
    flavor: "Vanilla",
    decoration: "None",
  });

  const handleColorChange = (color: ColorResult) => {
    setCake((prevCake) => ({ ...prevCake, color: color.hex }));
  };

  const handleChange = (event: SelectChangeEvent<string>, field: keyof CakeProps) => {
    setCake((prevCake) => ({ ...prevCake, [field]: event.target.value }));
  };

  const handleSubmit = () => {
    sessionStorage.setItem("cake", JSON.stringify(cake));
    router.push("/order");
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" textAlign="center" mt={5}>
        Customize Your Cake
      </Typography>
      <CakeModel size={cake.size} flavor={cake.flavor}
  color={cake.color} 
  shape={cake.shape} 
  decoration={cake.decoration} 
/>
      <Typography mt={3}>Select Cake Color:</Typography>
      <SketchPicker color={cake.color} onChange={handleColorChange} />

      <Typography mt={3}>Select Shape:</Typography>
      <Select value={cake.shape} onChange={(e) => handleChange(e, "shape")} fullWidth>
        {shapes.map((shape) => (
          <MenuItem key={shape} value={shape}>
            {shape}
          </MenuItem>
        ))}
      </Select>

      <Typography mt={3}>Select Size:</Typography>
      <Select value={cake.size} onChange={(e) => handleChange(e, "size")} fullWidth>
        {sizes.map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>

      <Typography mt={3}>Select Flavor:</Typography>
      <Select value={cake.flavor} onChange={(e) => handleChange(e, "flavor")} fullWidth>
        {flavors.map((flavor) => (
          <MenuItem key={flavor} value={flavor}>
            {flavor}
          </MenuItem>
        ))}
      </Select>

      <Typography mt={3}>Select Decoration:</Typography>
      <Select value={cake.decoration} onChange={(e) => handleChange(e, "decoration")} fullWidth>
        {decorations.map((decoration) => (
          <MenuItem key={decoration} value={decoration}>
            {decoration}
          </MenuItem>
        ))}
      </Select>

      <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth sx={{ mt: 3 }}>
        Proceed to Order
      </Button>
    </Container>
  );
}
