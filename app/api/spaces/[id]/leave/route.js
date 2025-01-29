
import { NextResponse } from 'next/server';
import { joinSpace, leaveSpace} from "@/app/lib/data";
import { revalidatePath } from 'next/cache';


export async function GET() {
  // Handle GET request
  const events = await fetchEvents();
  return NextResponse.json(events);
}

export async function POST(req, { params }) {

    const id = (await params).id;
  // Handle POST request
  const events = await leaveSpace(id);

  return NextResponse.json(events);
}