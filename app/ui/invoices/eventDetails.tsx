'use client'
// import { UserCircleIcon } from "@heroicons/react/24/outline";
// import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// import { useCallback } from "react";
// import { InfoModal } from '../modals';
import { LoadingSpinner } from '../loadingSpinner';
import { Button } from '../button';
import { rsvpToEvent } from '@/app/lib/data';
import {rsvp, leave} from './actions';

import {
  MapIcon, 
  VideoCameraIcon,
  CalendarIcon, CheckCircleIcon
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { formattedDateString } from '@/app/lib/utils';

export default function EventDetails({eventDetails, selected}) {
  // const router = useRouter();
  // const pathname = usePathname();
  // const searchParams = useSearchParams()

  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  // const createQueryString = useCallback(
  //   (name: string, value: string) => {
  //     const params = new URLSearchParams(searchParams.toString())
  //     params.set(name, value)

  //     return params.toString()
  //   },
  //   [searchParams]
  // );

  const topicNames = eventDetails?.topics?.map(topic => topic.name);
  // const isoDate = "2024-12-09T23:00:00.000Z";
  // const isoDate = eventDetails?.event_setting_attributes?.starts_at;

  // // Create a Date object from the ISO string
  // const date = new Date(isoDate);
  
  // // Format the date for your local timezone
  // const formattedDate = date.toLocaleString("en-US", {
  //     weekday: "long",  // e.g. "Monday"
  //     year: "numeric",  // e.g. "2024"
  //     month: "long",    // e.g. "December"
  //     day: "numeric",   // e.g. "9"
  //     hour: "2-digit",  // e.g. "11"
  //     minute: "2-digit",// e.g. "00"
  //     second: "2-digit",// e.g. "00"
  //     hour12: true      // Use 12-hour format (set to false for 24-hour format)
  // });

  const formattedDate = formattedDateString(eventDetails?.event_setting_attributes?.starts_at);


  // location_type: "live_stream", "in_person"
  const { location_type } = eventDetails?.event_setting_attributes
  
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



  const renderModalBody = () => {

    // if (selected !== eventDetails.id) return; 

    const virtual_location_url = eventDetails?.event_setting_attributes?.virtual_location_url;
    const in_person_location = eventDetails?.event_setting_attributes?.in_person_location;
    const formatted_address =  eventDetails?.event_setting_attributes?.in_person_location ? JSON.parse(selected?.event_setting_attributes?.in_person_location)?.formatted_address : null
    

    const isoDate = eventDetails?.event_setting_attributes?.starts_at;  // Example ISO date string
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

  // const handleRsvp = async ({space_id, event_id}) => {
  //   console.log('handleRSVP')
  //   const res = await fetch(`/api/events`, {
  //     method: 'PUT',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       space_id,
  //       event_id
  //       // Data to be sent in the request body
  //     })
  //   });
  //   const data = await res.json();
  //   console.log('data', data)

  // }

  // enum EventType { INPERSON, VIRTAL }

  // const iconMap = {
  //   INPERSON: BanknotesIcon,
  //   VIRTAL: UserGroupIcon,
  // };

  const renderIcon = () => (
    Icon ? <Icon className="h-5 w-5 text-black mr-4 flex-none" /> : null
  )

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 10000); // Default duration is 3 seconds

    return () => clearTimeout(timer);
  }, [isVisible]);


  return (

    <>

{isVisible ? (
  <div style={{ position: 'absolute', bottom: 8, right: 8, zIndex: 1}} className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md" role="alert">
  <div className="flex">
    <div className="py-1"><svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z"/></svg></div>
    <div>
      <p className="font-bold">Successfully RSVP'd</p>
      <p className="text-sm">Mark your Calendar! You have Successfully RSVP'd to this event!</p>
    </div>
  </div>
</div>
) : null }

    <div
      className="py-8"
    >
      <div className='flex justify-between items-center'>
        <p className="text-md/6 font-semibold text-gray-900 mr-4">{eventDetails?.name}</p>
        
        {eventDetails.rsvped_event && (
          <div className='flex items-center'>
              <CheckCircleIcon className='h-5 w-5 text-green-400 mr-1'/>
              <p className="text-sm/6 font-semibold text-gray-900">Going</p>
            </div> 
        )}
      </div>
      <div
          key={eventDetails.id}
          className="flex justify-between gap-x-6 items-center"
      >

          <div className="w-1/3">
              <p className="mt-2 text-xs/5 text-gray-500"><span className="text-black font-medium">Host:</span>{' '}{eventDetails?.author?.name}</p>
              <p className="mt-2 wrap text-xs/5 text-gray-500"><span className="text-black font-medium">Tags:</span>{' '}{topicNames?.join(", ")}</p>
          </div>
          <div className="w-1/3">
              <div className='flex mt-2'>
                <CalendarIcon className='h-5 w-5 text-black mr-4 flex-none'/>
                <p className="text-xs/5 text-gray-500">{formattedDate}</p>
              </div>
              <div className='flex mt-2'>
                {renderIcon()} 
              <p className="text-xs/5 text-gray-500 flex">{locationDisplayName}</p>
              </div>
          </div>
          {!eventDetails.rsvped_event  ? (
              <Button 
                  onClick={async (e) => {
                    e.stopPropagation()
                    const res = await rsvp(eventDetails.id);
                    console.log('res --- ', res)

                    if (res.success) {
                      setIsVisible(true);
                      console.log('made it')
                    }

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
                leave(eventDetails.id)
              }}
                  className="outline outline-2 hover:bg-transparent outline-blue-500 hover:!text-blue-500 m-0 margin"
              >
                Leave
                    {/* {isPending ? <LoadingSpinner className="!text-white"/> : 'Join'} */}
              </Button>
            )
          }
      </div>
    </div>
    </>
  )
}