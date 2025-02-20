"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Order() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    async function fetchOrder() {
      const res = await fetch("/api/orders"); 
      const data = await res.json();
      setOrder(data.length > 0 ? data[data.length - 1] : null);
    }
    fetchOrder();
  }, []);

  if (!order) return <Typography>Loading your order...</Typography>;

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>
        Your Cake Order
      </Typography>
      <Typography variant="h6">Color: {order.color}</Typography>
      <Typography variant="h6">Shape: {order.shape}</Typography>
      <Typography variant="h6">Size: {order.size}</Typography>
      <Typography variant="h6">Flavor: {order.flavor}</Typography>
      <Typography variant="h6">Decoration: {order.decoration}</Typography>
      <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={() => router.push("/customize")}>
        Customize Again
      </Button>
    </Container>
  );
}
