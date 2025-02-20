"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Container, Typography, Button } from "@mui/material";
import { useRouter } from "next/navigation";

function OrderContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Store the params in state (Prevents pre-rendering issue)
  const [order, setOrder] = useState({
    color: "",
    shape: "",
    size: "",
    flavor: "",
    decoration: "",
  });

  useEffect(() => {
    setOrder({
      color: searchParams.get("color") || "",
      shape: searchParams.get("shape") || "",
      size: searchParams.get("size") || "",
      flavor: searchParams.get("flavor") || "",
      decoration: searchParams.get("decoration") || "",
    });
  }, [searchParams]);

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

export default function Order() {
  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      <OrderContent />
    </Suspense>
  );
}
