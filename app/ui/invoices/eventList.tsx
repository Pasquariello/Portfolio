'use client'
import { useEffect, useState } from "react";


export default function EventList({handleOnSelect}) {

    const [events, setEvents] = useState([]);

  useEffect(() => {
    // Calling the GET route
    const fetchData = async () => {
      const response = await fetch('/api/events');
      const data = await response.json();
      setEvents(data)
    };
    fetchData();
  }, []);

    return (
        <ul role="list" className="divide-y divide-gray-100 w-2/3">
            {
                events?.records?.map(eventDetails => {
                    console.log('eventDetails', eventDetails)
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

                    return (
                            <li 
                                onClick={(e) => handleOnSelect(e, eventDetails)}
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
                            </li>
                    )
                })
            }
        </ul>
        
    )
}