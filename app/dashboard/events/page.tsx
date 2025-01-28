
import EventList from "@/app/ui/invoices/eventList";
import { EventsDetailsSkeleton, EventsMobileSkeleton, EventsRowsSkeleton, EventsTableSkeleton, TableRowSkeleton } from "@/app/ui/skeletons";
// import { InfoModal } from "@/app/ui/modals";
import { Suspense } from "react";

export default async function Page({searchParams}) {

  const params = await searchParams;
  const { selected }  = params;

  // commented out code below went here
  return (
    <>
    
    {/* <InfoModal isOpen={selected} onClose={closeModal} title={selected?.name}>
      {renderModalBody()}
    </InfoModal> */}
    <Suspense fallback={<EventsRowsSkeleton/>}>
      <EventList selectedEvent={selected} />
    </Suspense>
  </>
  );
}


  // const [selected, setSelected] = useState(null);

  // const closeModal = () => setSelected(null);

  // const renderModalBody = () => {
  //   if (!selected) return; 

  //   const virtual_location_url = selected?.event_setting_attributes?.virtual_location_url;
  //   const in_person_location = selected?.event_setting_attributes?.in_person_location;
  //   const formatted_address =  selected.event_setting_attributes.in_person_location ? JSON.parse(selected.event_setting_attributes.in_person_location)?.formatted_address : null
    

  //   const isoDate = selected.event_setting_attributes?.starts_at;  // Example ISO date string
  //   // Create a Date object from the ISO string
  //   const date = new Date(isoDate);

  //   // Get the day of the month (1-31)
  //   const day = date.getDate();
  //   // Get the month (0-11, so we add 1 to make it human-readable)
  //   const monthIndex = date.getMonth(); // 0 for January, 1 for February, etc.
  //   const months = [
  //     "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  //     "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  //   ];
  //   const monthAbbr = months[monthIndex];

  //   return ( 
  //     <div className="flex text-sm text-gray-500">
  //       <span className="inline-block text-center rounded-md bg-gray-50 px-2 py-2 mr-2 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
  //         <p className="mb-1 text-2xl">{monthAbbr}</p>
  //         <p className="text-lg">{day}</p>
  //       </span>
  //       <div>
  //         <p><span className="text-black font-medium">Going?</span> {selected?.rsvp_status}</p>
  //         <p><span className="text-black font-medium">Locaion:</span>
  //         <a
  //           rel="noopener noreferrer"
  //           target="_blank" 
  //           href={`http://maps.google.com/?q=${formatted_address}` || virtual_location_url || ''}
  //           className='font-medium hover: hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3'
  //         >
  //           {formatted_address || virtual_location_url || ''}
  //         </a>
  //         </p>

  //       </div>
  //     </div>
  //   )
  // }
