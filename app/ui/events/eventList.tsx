import { fetchEvents } from "@/app/lib/data";
import { Pagination } from "../pagination";
import EventDetails from "./eventDetails";;

export default async function EventList({selectedEvent}) {

    const events = await fetchEvents();
    console.log('events', events);
 
    const eventsByMonth: { name: string, records: [any] } = events?.records?.reduce((accumulator, currentValue) => {
        const isoDate = currentValue?.event_setting_attributes?.starts_at;
        // Create a Date object from the ISO string
        const date = new Date(isoDate);
        // Get the full month name
        const fullMonthName = date.toLocaleString('default', { month: 'long' });
    
        return { 
            ...accumulator,
            [fullMonthName]: {
                name: fullMonthName,
                records: accumulator?.[fullMonthName]?.records?.concat(currentValue) || [currentValue]
            }
        }
    }, {})


    console.log('eventsByMonth', eventsByMonth);

    const renderEventList =  () => eventsByMonth && Object.values(eventsByMonth)?.map((month: any) => {
       return (
            <div className="mb-20" key={month.name}>
                <h3 className="text-3xl md:text-3xl mb-4">{month.name as string}</h3>

                <div className="flex flex-col divide-y-1 divide-y divide-gray-200 border-2 border-gray-200 rounded-xl px-8 bg-white"> 
                    {
                        month?.records?.map(eventDetails => {
                            return  <EventDetails key={eventDetails.id} eventDetails={eventDetails} selected={selectedEvent}/>
                        })
                    }
                </div>
            </div>
       )
    });

    return (
        <div className="flex justify-center">
            <div className="w-4/5">
            
                    {
                    events ? renderEventList() 
                    : <div>Loading</div> // to do: set up skeleton loading here
                    }
          
                <Pagination currentPage={1} per_page={events?.per_page || 10} has_next_page={events?.has_next_page || false} count={events?.count || 100} />
            
            </div>
        </div>
        
    )
}