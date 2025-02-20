import { NextResponse } from "next/server";

// Mock database (temporary storage)
let orders: any[] = [];

export async function GET() {
  return NextResponse.json(orders);
}

export async function POST(req: Request) {
  const newOrder = await req.json();
  orders.push(newOrder);
  return NextResponse.json({ message: "Order saved!", order: newOrder });
}
