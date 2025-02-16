'use server'
import { fetchNewNotificationsCount} from "@/app/lib/data";
import { revalidatePath } from 'next/cache';


export async function getUnreadCount() {
    revalidatePath('/dashboard/notifications');
    return await fetchNewNotificationsCount();
}

