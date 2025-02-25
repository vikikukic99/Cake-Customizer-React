import { useState, useEffect } from "react";

export function useOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data.orders))
      .catch((err) => console.error("Error fetching orders:", err));
  }, []);

  return orders;
}
