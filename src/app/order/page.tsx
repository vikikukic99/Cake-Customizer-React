"use client";

import React, { Suspense, useEffect, useState } from "react";
import { Container, Typography, Button } from "@mui/material";
import CakeModel from "@/components/CakeModel";
import { useRouter } from "next/navigation";
import { useOrders } from "@/services/useOrders";

interface CakeProps {
  color: string;
  shape: string;
  size: string;
  flavor: string;
  decoration: string;
}

export default function OrderPage() {
  const router = useRouter();
  const orders = useOrders();
  const [cake, setCake] = useState<CakeProps | null>(null);

  useEffect(() => {
    const storedCake = sessionStorage.getItem("cake");
    if (storedCake) {
      try {
        const parsedCake: CakeProps = JSON.parse(storedCake);
        setCake(parsedCake);
      } catch (error) {
        console.error("Error parsing cake data:", error);
      }
    }
  }, []);
  

  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      <Container maxWidth="sm">
        <Typography variant="h4" textAlign="center" mt={5}>
          Your Cake Orders
        </Typography>

        {cake && (
          <>
            <CakeModel size={cake.size} flavor={cake.flavor}
  color={cake.color} 
  shape={cake.shape} 
  decoration={cake.decoration} 
/>
            <Typography mt={3}>Color: {cake.color}</Typography>
            <Typography>Shape: {cake.shape}</Typography>
            <Typography>Size: {cake.size}</Typography>
            <Typography>Flavor: {cake.flavor}</Typography>
            <Typography>Decoration: {cake.decoration}</Typography>
          </>
        )}

        <Typography variant="h5" mt={5}>Previous Orders:</Typography>
        {orders.length === 0 ? (
          <Typography mt={3}>No orders yet.</Typography>
        ) : (
          orders.map((order) => (
            <Typography key={order.id}>
              {order.name} - {order.size} - {order.decoration}
            </Typography>
          ))
        )}

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
    </Suspense>
  );
}
