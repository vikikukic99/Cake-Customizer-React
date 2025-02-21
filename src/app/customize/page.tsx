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
import { SketchPicker } from "react-color";
import CakeModel from "@/components/CakeModel";

const shapes = ["Round", "Square", "Heart"];
const sizes = ["Small", "Medium", "Large"];
const flavors = ["Vanilla", "Chocolate", "Strawberry"];
const decorations = ["Sprinkles", "Chocolate Drizzle", "Fruits"];

export default function CustomizePage() {
  const router = useRouter();
  const [cake, setCake] = useState({
    color: "#FFD700",
    shape: "Round",
    size: "Medium",
    flavor: "Vanilla",
    decoration: "None",
  });

  const handleColorChange = (color: any) => {
    setCake((prevCake) => ({ ...prevCake, color: color.hex }));
  };

  const handleChangeShape = (event: SelectChangeEvent<string>) => {
    setCake((prevCake) => ({ ...prevCake, shape: event.target.value }));
  };

  const handleChangeSize = (event: SelectChangeEvent<string>) => {
    setCake((prevCake) => ({ ...prevCake, size: event.target.value }));
  };

  const handleChangeFlavor = (event: SelectChangeEvent<string>) => {
    setCake((prevCake) => ({ ...prevCake, flavor: event.target.value }));
  };

  const handleChangeDecoration = (event: SelectChangeEvent<string>) => {
    setCake((prevCake) => ({ ...prevCake, decoration: event.target.value }));
  };

  const handleSubmit = () => {
    router.push("/order");
    sessionStorage.setItem("cake", JSON.stringify(cake));
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" textAlign="center" mt={5}>
        Customize Your Cake
      </Typography>
      <CakeModel color={cake.color} shape={cake.shape} decoration={cake.decoration} />
      <Typography mt={3}>Select Cake Color:</Typography>
      <SketchPicker color={cake.color} onChange={handleColorChange} />

      <Typography mt={3}>Select Shape:</Typography>
      <Select value={cake.shape} onChange={handleChangeShape} fullWidth>
        {shapes.map((shape) => (
          <MenuItem key={shape} value={shape}>
            {shape}
          </MenuItem>
        ))}
      </Select>

      <Typography mt={3}>Select Size:</Typography>
      <Select value={cake.size} onChange={handleChangeSize} fullWidth>
        {sizes.map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </Select>

      <Typography mt={3}>Select Flavor:</Typography>
      <Select value={cake.flavor} onChange={handleChangeFlavor} fullWidth>
        {flavors.map((flavor) => (
          <MenuItem key={flavor} value={flavor}>
            {flavor}
          </MenuItem>
        ))}
      </Select>

      <Typography mt={3}>Select Decoration:</Typography>
      <Select value={cake.decoration} onChange={handleChangeDecoration} fullWidth>
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
