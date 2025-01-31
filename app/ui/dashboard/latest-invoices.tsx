import { ArrowPathIcon, CheckCircleIcon, MapIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
import { fetchEvents, fetchLatestInvoices } from '@/app/lib/data';
import { formattedDateString } from '@/app/lib/utils';

export default async function LatestInvoices() {

  const events = await fetchEvents(5)
//   console.log('events main dashboard', events)

  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`mb-4 text-xl md:text-2xl`}>
        Upcoming Events
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        {/* NOTE: Uncomment this code in Chapter 7 */}

        <div className="bg-white px-6">
          {events?.records?.map((event, i) => {

            const formattedDate = formattedDateString(event?.event_setting_attributes?.starts_at);


            const { location_type } = event?.event_setting_attributes
  
            const locaitonMap = {
              in_person: {
                type: 'In Person',
                icon: MapIcon
              },
              live_stream: {
                type: 'Virtual',
                icon: VideoCameraIcon
              },
            };


            const Icon = locaitonMap[location_type].icon;
            const locationDisplayName = locaitonMap[location_type].type
            
            const renderIcon = () => (
                Icon ? <Icon className="h-5 w-5 text-black flex-none" /> : null
              )


            return (
              <div
                key={event.id}
                className={clsx(
                  'flex flex-row items-center justify-between py-4',
                  {
                    'border-t': i !== 0,
                  },
                )}
              >
                <div className="flex items-center">
                
                    <div className="w-[32px]">
                    {event.rsvped_event && (
                        <CheckCircleIcon className='h-5 w-5 text-green-400 mr-1'/>
                    )}
                    </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {event.display_title}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {formattedDate}
                    </p>
                  </div>
                </div>
                {/* <p
                  className={`truncate text-sm font-medium md:text-base`}
                >
                    going
                </p> */}
                <div className='flex mt-2'>
                    <p className="text-xs/5 text-gray-500 flex mr-4">{locationDisplayName}</p>
                    {renderIcon()} 
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}
