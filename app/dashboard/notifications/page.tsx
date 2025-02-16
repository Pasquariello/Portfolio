import { fetchNotifications } from '@/app/lib/data';
import { formattedDateString } from '@/app/lib/utils';
import NotificationDetails from '@/app/ui/notifications/notification_details';
import { CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Posts',
};

export default async function Page({searchParams}) {
  
  const notifications = await fetchNotifications();


  // const selectedSpaceId = (await searchParams)?.selectedSpace

  return (
    <main className="">
      <h1 className={`mb-4 text-xl md:text-3xl mr-8`}>
        Notifications
      </h1>


      <div className="flex justify-center">
        <div className="w-4/5 border-2 border-gray-200 rounded-xl 'bg-white'">
          {
                notifications?.records?.map((eventDetails, i) => {


                  return <NotificationDetails key={eventDetails.id} eventDetails={eventDetails} />
                })
            
            }
          </div>
        </div>
      

    </main>
  );
}
