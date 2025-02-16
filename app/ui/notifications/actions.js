import { fetchMarkNotificationsAsRead, fetchNewNotificationsCount} from "@/app/lib/data";

export async function markAsRead(id) {
    return await fetchMarkNotificationsAsRead(id);
}
