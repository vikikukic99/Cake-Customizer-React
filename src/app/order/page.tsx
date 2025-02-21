"use client";

import { useRouter } from "next/navigation";
import { Container, Button, Typography } from "@mui/material";
import CakeModel from "@/components/CakeModel";

interface CakeState {
  color: string;
  shape: string;
  size: string;
  flavor: string;
  decoration: string;
}

export default function OrderPage() {
  const router = useRouter();
  const cake = history.state?.state as CakeState || {
    color: "#FFD700",
    shape: "Round",
    size: "Medium",
    flavor: "Vanilla",
    decoration: "None",
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Your Cake Order</Typography>
      <CakeModel color={cake.color} shape={cake.shape} decoration={cake.decoration} />
      <Typography>Color: {cake.color}</Typography>
      <Typography>Shape: {cake.shape}</Typography>
      <Typography>Size: {cake.size}</Typography>
      <Typography>Flavor: {cake.flavor}</Typography>
      <Typography>Decoration: {cake.decoration}</Typography>

      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => router.push("/customize")}>
        Customize Again
      </Button>
    </Container>
  );
}
