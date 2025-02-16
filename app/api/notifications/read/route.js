import { NextResponse } from 'next/server';
import { fetchMarkNotificationsAsRead } from "@/app/lib/data";

export async function POST(
  request,
  { params }
) {

  const id = params.id  // 312
  const result = await fetchMarkNotificationsAsRead(id);
  return NextResponse.json(result);
}