"use client";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";

const CakeModel = dynamic(() => import("@/components/CakeModel"), { ssr: false });

export default function OrderPage() {
    const searchParams = useSearchParams();

    const cake = {
        color: searchParams.get("color") || "#FFD700",
        shape: searchParams.get("shape") || "Round",
        size: searchParams.get("size") || "Medium",
        flavor: searchParams.get("flavor") || "Vanilla",
        decoration: searchParams.get("decoration") || "None",
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h2>Your Cake Order</h2>

            {/* 3D Cake Model */}
            <CakeModel color={cake.color} shape={cake.shape} decoration={cake.decoration} />

            <p>Color: {cake.color}</p>
            <p>Shape: {cake.shape}</p>
            <p>Size: {cake.size}</p>
            <p>Flavor: {cake.flavor}</p>
            <p>Decoration: {cake.decoration}</p>
            
            <button onClick={() => window.history.back()}>Customize Again</button>
        </div>
    );
}
