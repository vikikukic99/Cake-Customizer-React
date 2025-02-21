import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const orders = [
      { id: 1, name: 'Chocolate Cake', size: 'Medium', decoration: 'Sprinkles' },
      { id: 2, name: 'Vanilla Cake', size: 'Large', decoration: 'Fruits' },
    ];
    
    return NextResponse.json({ success: true, orders });
  } catch (err) {  
    console.error('Error fetching orders:', err);
    return NextResponse.json({ success: false, message: 'Failed to fetch orders' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    
    if (!body.name || !body.size) {
      return NextResponse.json({ success: false, message: 'Invalid order data' }, { status: 400 });
    }

    return NextResponse.json({ success: true, message: 'Order created successfully', order: body });
  } catch (err) {
    console.error('Error creating order:', err);
    return NextResponse.json({ success: false, message: 'Failed to create order' }, { status: 500 });
  }
}
