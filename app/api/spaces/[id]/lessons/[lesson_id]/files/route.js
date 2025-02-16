
import { NextResponse } from 'next/server';
import { fetchLessonFiles } from "@/app/lib/data";

export async function GET(
  request,
  { params }
) {
  const {id, lesson_id} = params  // 312
  
  // Handle GET request
  const files = await fetchLessonFiles(id, lesson_id);
  return NextResponse.json(files);
}
