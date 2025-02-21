"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Typography, Button, MenuItem, Select } from "@mui/material";
import { SketchPicker } from "react-color";
import CakeModel from "@/components/CakeModel";

type CakeProps = {
  color: string;
  shape: string;
};

const shapes = ["Round", "Square", "Heart"];

export default function CustomizePage() {
  const router = useRouter();
  const [cake, setCake] = useState<CakeProps>({
    color: "#FFD700",
    shape: "Round",
  });

  const handleChangeColor = (color: any) => {
    setCake((prevCake) => ({ ...prevCake, color: color.hex }));
  };

  const handleChangeShape = (event: any) => {
    setCake((prevCake) => ({ ...prevCake, shape: event.target.value }));
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
      <CakeModel color={cake.color} shape={cake.shape} />

      <Typography mt={3}>Select Cake Color:</Typography>
      <SketchPicker color={cake.color} onChange={handleChangeColor} />

      <Typography mt={3}>Select Shape:</Typography>
      <Select value={cake.shape} onChange={handleChangeShape} fullWidth>
        {shapes.map((shape) => (
          <MenuItem key={shape} value={shape}>
            {shape}
          </MenuItem>
        ))}
      </Select>

      <Button variant="contained" color="primary" onClick={handleSubmit} fullWidth sx={{ mt: 3 }}>
        Proceed to Order
      </Button>
    </Container>
  );
}
