// This file defines the route handler for GET and POST requests to /api/hello

import { NextResponse } from 'next/server';
import { fetchCircle } from "@/app/lib/data";


export async function GET() {
  // Handle GET request
  const events = await fetchCircle();
  console.log('events', events)
  return NextResponse.json(events);
}

export async function POST(request) {
  // Handle POST request
  const data = await request.json();
  return NextResponse.json({ message: 'Hello from POST!', data });
}