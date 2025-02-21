"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Container, Button, Typography, MenuItem, Select } from "@mui/material";
import { SketchPicker } from "react-color";
import dynamic from "next/dynamic";

// Lazy load 3D model to prevent SSR issues
const CakeModel = dynamic(() => import("@/components/CakeModel"), { ssr: false });

const shapes = ["Round", "Square", "Heart"];
const sizes = ["Small", "Medium", "Large"];
const flavors = ["Vanilla", "Chocolate", "Strawberry"];
const decorations = ["None", "Fruits", "Candles", "Sprinkles"];

export default function CustomizePage() {
    const router = useRouter();
    
    // State is initialized on client only to prevent hydration mismatch
    const [cake, setCake] = useState({
        color: "#FFD700",
        shape: "Round",
        size: "Medium",
        flavor: "Vanilla",
        decoration: "None",
    });

    useEffect(() => {
        setCake((prev) => ({ ...prev })); // Ensures React state initializes properly
    }, []);

    const handleSubmit = () => {
        router.push(`/order?color=${cake.color}&shape=${cake.shape}&size=${cake.size}&flavor=${cake.flavor}&decoration=${cake.decoration}`);
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
            <Typography variant="h4">Customize Your Cake</Typography>

            {/* 3D Cake Model */}
            <CakeModel color={cake.color} shape={cake.shape} decoration={cake.decoration} />

            <Typography>Select Cake Color:</Typography>
            <SketchPicker
                color={cake.color}
                onChange={(color) => setCake({ ...cake, color: color.hex })}
            />

            <Typography>Select Shape:</Typography>
            <Select value={cake.shape} onChange={(e) => setCake({ ...cake, shape: e.target.value })} fullWidth>
                {shapes.map((shape) => (
                    <MenuItem key={shape} value={shape}>
                        {shape}
                    </MenuItem>
                ))}
            </Select>

            <Typography>Select Size:</Typography>
            <Select value={cake.size} onChange={(e) => setCake({ ...cake, size: e.target.value })} fullWidth>
                {sizes.map((size) => (
                    <MenuItem key={size} value={size}>
                        {size}
                    </MenuItem>
                ))}
            </Select>

            <Typography>Select Flavor:</Typography>
            <Select value={cake.flavor} onChange={(e) => setCake({ ...cake, flavor: e.target.value })} fullWidth>
                {flavors.map((flavor) => (
                    <MenuItem key={flavor} value={flavor}>
                        {flavor}
                    </MenuItem>
                ))}
            </Select>

            <Typography>Select Decoration:</Typography>
            <Select value={cake.decoration} onChange={(e) => setCake({ ...cake, decoration: e.target.value })} fullWidth>
                {decorations.map((decoration) => (
                    <MenuItem key={decoration} value={decoration}>
                        {decoration}
                    </MenuItem>
                ))}
            </Select>

            <Button variant="contained" sx={{ mt: 3 }} onClick={handleSubmit}>
                Proceed to Order
            </Button>
        </Container>
    );
}
