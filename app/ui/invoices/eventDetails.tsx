'use client'
// import { UserCircleIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from "react";
import { InfoModal } from '../modals';
import { LoadingSpinner } from '../loadingSpinner';
import { Button } from '../button';
import { rsvpToEvent } from '@/app/lib/data';

export default function EventDetails({eventDetails, selected}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  );

  const topicNames = eventDetails?.topics?.map(topic => topic.name);
  // const isoDate = "2024-12-09T23:00:00.000Z";
  const isoDate = eventDetails?.event_setting_attributes?.starts_at;

  // Create a Date object from the ISO string
  const date = new Date(isoDate);
  
  // Format the date for your local timezone
  const formattedDate = date.toLocaleString("en-US", {
      weekday: "long",  // e.g. "Monday"
      year: "numeric",  // e.g. "2024"
      month: "long",    // e.g. "December"
      day: "numeric",   // e.g. "9"
      hour: "2-digit",  // e.g. "11"
      minute: "2-digit",// e.g. "00"
      second: "2-digit",// e.g. "00"
      hour12: true      // Use 12-hour format (set to false for 24-hour format)
  });




  const renderModalBody = () => {

    // if (selected !== eventDetails.id) return; 

    const virtual_location_url = eventDetails?.event_setting_attributes?.virtual_location_url;
    const in_person_location = eventDetails?.event_setting_attributes?.in_person_location;
    const formatted_address =  eventDetails.event_setting_attributes.in_person_location ? JSON.parse(selected.event_setting_attributes.in_person_location)?.formatted_address : null
    

    const isoDate = eventDetails.event_setting_attributes?.starts_at;  // Example ISO date string
    // Create a Date object from the ISO string
    const date = new Date(isoDate);

    // Get the day of the month (1-31)
    const day = date.getDate();
    // Get the month (0-11, so we add 1 to make it human-readable)
    const monthIndex = date.getMonth(); // 0 for January, 1 for February, etc.
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const monthAbbr = months[monthIndex];

    return ( 

      <div className="flex text-sm text-gray-500">
        <span className="inline-block text-center rounded-md bg-gray-50 px-2 py-2 mr-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
          <p className="mb-1 text-2xl">{monthAbbr}</p>
          <p className="text-lg">{day}</p>
        </span>
        <div>
          <p><span className="text-black font-medium">Going?</span> {eventDetails?.rsvp_status}</p>
          <p><span className="text-black font-medium">Locaion:</span>
          <a
            rel="noopener noreferrer"
            target="_blank" 
            href={`http://maps.google.com/?q=${formatted_address}` || virtual_location_url || ''}
            className='font-medium hover: hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
          >
            {formatted_address || virtual_location_url || ''}
          </a>
          </p>

        </div>
      </div>
    )
  }

  const handleRsvp = async ({space_id, event_id}) => {
    console.log('handleRSVP')
    const res = await fetch(`/api/events`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        space_id,
        event_id
        // Data to be sent in the request body
      })
    });
    const data = await res.json();
    console.log('data', data)

  }

  return (
    <>

      <InfoModal 
        isOpen={selected} 
        onClose={
          () =>  router.push(pathname, { scroll: false })
        }
        title={eventDetails.id}>
          {renderModalBody()}
      </InfoModal>

      <li 
          onClick={(e) => {
              router.push(pathname + '?' + createQueryString('selected', eventDetails.id), { scroll: false })
          }}
          key={eventDetails.id}
          className="flex justify-between gap-x-6 py-5"
      >
          <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{eventDetails?.display_title}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{topicNames?.join(", ")}</p>
              </div>
          </div>
          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm/6 text-gray-900">Host: {eventDetails?.author?.name}</p>
              <p className="mt-1 text-xs/5 text-gray-500">{formattedDate}</p>
          </div>
          {!eventDetails.rsvp_status ? (
              <Button 
                  onClick={(e) => {
                    e.stopPropagation()

                    handleRsvp({space_id: eventDetails.space.id, event_id: eventDetails.id})
                  }}
                  className="outline outline-2 hover:bg-transparent outline-blue-500 hover:!text-blue-500 m-0 margin"
              >
                RSVP
                    {/* {isPending ? <LoadingSpinner className="!text-white"/> : 'Join'} */}
              </Button>
            ) : (
              <Button 
              onClick={(e) => {
                e.stopPropagation()
                handleRsvp({space_id: eventDetails.space.id, event_id: eventDetails.id})
              }}
                  className="outline outline-2 hover:bg-transparent outline-blue-500 hover:!text-blue-500 m-0 margin"
              >
                Leave
                    {/* {isPending ? <LoadingSpinner className="!text-white"/> : 'Join'} */}
              </Button>
            )
          }
      </li>
    </>
  )
}