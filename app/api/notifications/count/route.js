import { NextResponse } from 'next/server';
import { fetchNewNotificationsCount } from "@/app/lib/data";
import { revalidatePath } from 'next/cache';


export async function GET() {
    const notification_count = await fetchNewNotificationsCount();
    revalidatePath('/dashboard/notifications');

    return NextResponse.json(notification_count);
  }