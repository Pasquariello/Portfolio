// /api/headless/v1/search/community_members

// This file defines the route handler for GET and POST requests to /api/hello

import { NextResponse } from 'next/server';
import { searchMembers } from "@/app/lib/data";



// export async function GET() {
//   // Handle GET request
//   const events = await searchMembers();
//   console.log('events', events)
//   return NextResponse.json(events);
// }

export async function POST(request) {

  const body = await request.json();

  const members = await searchMembers(body);
  return NextResponse.json(members);
}