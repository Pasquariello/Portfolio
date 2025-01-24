// This file defines the route handler for GET and POST requests to /api/hello

import { NextResponse } from 'next/server';
import { fetchCircle, rsvpToEvent, fooRSVP} from "@/app/lib/data";
import { searchMembers } from "@/app/lib/data";


export async function GET() {
  // Handle GET request
  const events = await fetchCircle();
  return NextResponse.json(events);
}

export async function POST(request) {
  // Handle POST request
  const data = await request.json();
  return NextResponse.json({ message: 'Hello from POST!', data });
}

export async function PUT(request) {
  console.log('made it here')
  // Handle PUT request
  const data = await request.json();
  console.log('data -----', data);

  const res = await fooRSVP({space_id: data.space_id, event_id: data.event_id});
  console.log('res ---- ', res)
  return NextResponse.json(res);
}