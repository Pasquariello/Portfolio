
import { NextResponse } from 'next/server';
import { joinSpace, leaveSpace} from "@/app/lib/data";
import { revalidatePath } from 'next/cache';


export async function GET() {
  // Handle GET request
  const events = await fetchCircle();
  return NextResponse.json(events);
}

export async function POST(req, { params }) {
    // console.log('request ----- ', request)
    // console.log('req.query DUDE -----', req.query);
    const id = (await params).id;
    console.log('SLUG---', id); // 'a', 'b', or 'c'
  // Handle POST request
  const events = await leaveSpace(id);

  return NextResponse.json(events);
}