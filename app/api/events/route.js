// This file defines the route handler for GET and POST requests to /api/hello

import { NextResponse } from 'next/server';
import { fetchEvents, rsvpToEvent, fooRSVP} from "@/app/lib/data";


export async function GET() {
  // Handle GET request
  const events = await fetchEvents();
  return NextResponse.json(events);
}

export async function POST(request) {
  // Handle POST request
  const data = await request.json();
  return NextResponse.json({ message: 'Hello from POST!', data });
}

export async function PUT(request) {
  // Handle PUT request
  const data = await request.json();

  const res = await fooRSVP({space_id: data.space_id, event_id: data.event_id});
  return NextResponse.json(res);
}