'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Button, Typography } from "@mui/material";
import CakeModel from "../../components/CakeModel";

type CakeProps = {
  color: string;
  shape: string;
  size: string;
  flavor: string;
  decoration: string;
};

export default function OrderPage() {
  const router = useRouter();
  const [cake, setCake] = useState<CakeProps | null>(null);

  useEffect(() => {
    const savedCake = sessionStorage.getItem("cake");
    if (savedCake) setCake(JSON.parse(savedCake));
  }, []);

  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4">Your Cake Order</Typography>
      {cake && <CakeModel color={cake.color} shape={cake.shape} decoration={cake.decoration} />}
      <Typography>Color: {cake?.color}</Typography>
      <Typography>Shape: {cake?.shape}</Typography>
      <Typography>Size: {cake?.size}</Typography>
      <Typography>Flavor: {cake?.flavor}</Typography>
      <Typography>Decoration: {cake?.decoration}</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => router.push("/customize")}>
        CUSTOMIZE AGAIN
      </Button>
    </Container>
  );
}