
import { NextResponse } from 'next/server';
import { fetchEvents, rsvpToEvent, fooRSVP} from "@/app/lib/data";


export async function POST(req, { params }) {
    const id = (await params).id;
  // Handle POST request
  
  const events = await joinSpace(id);

  return NextResponse.json(events);
}