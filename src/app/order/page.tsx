"use client";

import React, { useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import CakeModel from "@/components/CakeModel";
import { useRouter } from "next/navigation";

type CakeProps = {
  color: string;
  shape: string;
};

export default function OrderPage() {
  const router = useRouter();
  const [cake, setCake] = useState<CakeProps | null>(null);

  useEffect(() => {
    const storedCake = sessionStorage.getItem("cake");
    if (storedCake) {
      setCake(JSON.parse(storedCake));
    }
  }, []);

  if (!cake) return <Typography>Loading...</Typography>;

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" textAlign="center" mt={5}>
        Your Cake Order
      </Typography>
      <CakeModel color={cake.color} shape={cake.shape} />

      <Typography mt={3}>Color: {cake.color}</Typography>
      <Typography>Shape: {cake.shape}</Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => router.push("/customize")}
        fullWidth
        sx={{ mt: 3 }}
      >
        Customize Again
      </Button>
    </Container>
  );
}
