// This file defines the route handler for GET and POST requests to /api/hello
import { NextResponse } from 'next/server';
import { joinSpace, leaveSpace} from "@/app/lib/data";


export async function GET() {
  // Handle GET request
  const events = await fetchEvents();
  return NextResponse.json(events);
}

export async function POST(request) {
    console.log('request ----- ', request)
    const { id } = request.query; // Access query parameters
    console.log('ID -----', id)
  // Handle POST request
  const events = await leaveSpace(id);
  return NextResponse.json(events);
}