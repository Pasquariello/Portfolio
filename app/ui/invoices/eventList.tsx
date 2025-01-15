// 'use client'
// import { useEffect, useState } from "react";
import { fetchCircle } from "@/app/lib/data";
import { Pagination } from "../pagination";
import EventDetails from "./eventDetails";


export default async function EventList({selectedEvent}) {
    console.log('selectedEvent', selectedEvent)
    // const [events, setEvents] = useState();
    const events = await fetchCircle();


    const renderEventList =  () => events?.records?.map(eventDetails => {
  
        return (
                <EventDetails key={eventDetails.id} eventDetails={eventDetails} selected={selectedEvent}/>
        )
    });

    return (
        <div className="w-2/3">

            <ul role="list" className="divide-y divide-gray-100">
                {events ? renderEventList() : <div>Loading</div> // to do: set up skeleton loading here
                }
            </ul>
            <Pagination currentPage={1} per_page={events?.per_page || 10} has_next_page={events?.has_next_page || false} count={events?.count || 100} />
        </div>
        
    )
}