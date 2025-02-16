'use client'
// import { UserCircleIcon } from "@heroicons/react/24/outline";
// import { usePathname, useRouter, useSearchParams } from 'next/navigation'
// import { useCallback } from "react";
// import { InfoModal } from '../modals';
import { LoadingSpinner } from '../loadingSpinner';
import { Button } from '../button';
import { rsvpToEvent } from '@/app/lib/data';

import { markAsRead } from './actions';

import {
  MapIcon, 
  VideoCameraIcon,
  CalendarIcon, CheckCircleIcon,
  EnvelopeOpenIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { formattedDateString } from '@/app/lib/utils';

export default function NotificationDetails({eventDetails}) {

    const formattedDate = formattedDateString(eventDetails?.created_at);


    const titleOptions = {
      comment: `${eventDetails?.actor_name} ${eventDetails?.display_action} ${eventDetails?.notifiable_title}`,
      event_reminder: `Upcoming Event: ${eventDetails?.notifiable_title}`,
      rsvp: `RSVP'd to Group: ${eventDetails?.notifiable_title}`,
      profile_confirmed: `${eventDetails?.actor_name} ${eventDetails?.display_action}`,
    }

    const title = titleOptions[eventDetails?.action] || titleOptions.comment;
    const hasRead = eventDetails?.read_at //? 'yes' : 'no';

    const handleMarkMessageAsRead = async () => {
        markAsRead(eventDetails.id);
    }

    const initials = (str) => {
        return str.split(' ').map(word => word.charAt(0)).join('');
      }


      
    return (
        <div
            className={`p-10 w-full ${!hasRead && 'bg-rose-100 active:bg-rose-200'} border-b last:border-b-0 justify-between flex items-center hover:cursor-pointer`} 
            onClick={handleMarkMessageAsRead}
        >
                <div className="flex items-center">
             
                    {
                    eventDetails.actor_image ? (
                        <img
                            src={eventDetails.actor_image}
                            className="w-12 h-12 rounded-full mr-4 border-2 border-gray-100"
                        />
                    ) : (
                        <div
                        className="flex w-12 h-12 rounded-full mr-4 border-2 border-gray-100 bg-violet-500 justify-center items-center"
                        >
                            <p className="text-white text-small">{initials(eventDetails.actor_name)}</p>
                        </div>
                    )
                
                    } 
                    <div>
                        <p className="text-md/6 font-semibold text-gray-900 mr-4">{title}</p>
                        <div className='flex items-center'>
                            <CalendarIcon className='h-5 w-5 text-black mr-4 flex-none'/>
                            <p className="text-xs/5 text-gray-500">{formattedDate}</p>
                        </div>
                    </div>

                </div>
                    
                {hasRead ? <EnvelopeOpenIcon className='h-5 w-5 text-green-400 mr-1'/> : <EnvelopeIcon className='h-5 w-5 text-rose-400 mr-1'/> }

                    
            
            
        </div>
  )
}