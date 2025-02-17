import { fetchNotifications } from '@/app/lib/data';
import NotificationDetails from '@/app/ui/notifications/notification_details';

export default async function NotificationsList() {
  
  const notifications = await fetchNotifications();

  return (
    <div className="w-4/5 border-2 border-gray-200 rounded-xl bg-white">
        {
            notifications?.records?.map(notification => {
                return <NotificationDetails key={notification.id} eventDetails={notification} />
            })
        }
    </div>
  );
}
