'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Button, Typography, MenuItem, Select } from "@mui/material";
import { SketchPicker } from "react-color";
import CakeModel from "../../components/CakeModel";

const shapes = ["Round", "Square", "Heart"];
const sizes = ["Small", "Medium", "Large"];
const flavors = ["Vanilla", "Chocolate", "Strawberry"];
const decorations = ["None", "Candles", "Sprinkles", "Chocolate Drizzle", "Fruits"];

type CakeProps = {
  color: string;
  shape: string;
  size: string;
  flavor: string;
  decoration: string;
};

export default function CustomizePage() {
  const router = useRouter();
  const [cake, setCake] = useState<CakeProps>({
    color: "#FFD700",
    shape: "Round",
    size: "Medium",
    flavor: "Vanilla",
    decoration: "None",
  });

  const handleSubmit = () => {
    sessionStorage.setItem("cake", JSON.stringify(cake));
    router.push("/order");
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Customize Your Cake</Typography>
      <CakeModel color={cake.color} shape={cake.shape} decoration={cake.decoration} />
      <Typography>Select Cake Color:</Typography>
      <SketchPicker color={cake.color} onChange={(c) => setCake({ ...cake, color: c.hex })} />
      <Typography>Select Shape:</Typography>
      <Select value={cake.shape} onChange={(e) => setCake({ ...cake, shape: e.target.value })} fullWidth>
        {shapes.map((shape) => (
          <MenuItem key={shape} value={shape}>{shape}</MenuItem>
        ))}
      </Select>
      <Typography>Select Size:</Typography>
      <Select value={cake.size} onChange={(e) => setCake({ ...cake, size: e.target.value })} fullWidth>
        {sizes.map((size) => (
          <MenuItem key={size} value={size}>{size}</MenuItem>
        ))}
      </Select>
      <Typography>Select Flavor:</Typography>
      <Select value={cake.flavor} onChange={(e) => setCake({ ...cake, flavor: e.target.value })} fullWidth>
        {flavors.map((flavor) => (
          <MenuItem key={flavor} value={flavor}>{flavor}</MenuItem>
        ))}
      </Select>
      <Typography>Select Decoration:</Typography>
      <Select value={cake.decoration} onChange={(e) => setCake({ ...cake, decoration: e.target.value })} fullWidth>
        {decorations.map((decoration) => (
          <MenuItem key={decoration} value={decoration}>{decoration}</MenuItem>
        ))}
      </Select>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={handleSubmit}>
        PROCEED TO ORDER
      </Button>
    </Container>
  );
}
