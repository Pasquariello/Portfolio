
import { NextResponse } from 'next/server';
import { joinSpace } from "@/app/lib/data";
import { revalidatePath } from 'next/cache';


export async function POST(req, { params }) {
    const id = (await params).id;
  // Handle POST request
  
  const events = await joinSpace(id);

  return NextResponse.json(events);
}