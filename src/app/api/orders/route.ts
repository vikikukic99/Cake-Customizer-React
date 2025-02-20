import { NextResponse } from 'next/server';

const orders: { color: string; shape: string; size: string; flavor: string; decoration: string }[] = [];

export async function POST(req: Request) {
  try {
    const { color, shape, size, flavor, decoration } = await req.json();

    // Validate the request data
    if (!color || !shape || !size || !flavor || !decoration) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const newOrder = { color, shape, size, flavor, decoration };
    orders.push(newOrder);

    return NextResponse.json({ message: 'Order placed', order: newOrder });
  } catch (error) {
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
