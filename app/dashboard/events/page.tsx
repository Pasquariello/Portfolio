
import EventList from "@/app/ui/events/eventList";
import { EventsDetailsSkeleton, EventsMobileSkeleton, EventsRowsSkeleton, EventsTableSkeleton, TableRowSkeleton } from "@/app/ui/skeletons";
// import { InfoModal } from "@/app/ui/modals";
import { Suspense } from "react";

export default async function Page({searchParams}) {

  const params = await searchParams;
  const { selected }  = params;

  return (
    <div>

      <h1 className={`text-xl md:text-3xl mr-8 mb-20`}>
        Upcoming Events
      </h1>
    {/* <InfoModal isOpen={selected} onClose={closeModal} title={selected?.name}>
      {renderModalBody()}
    </InfoModal> */}
    <Suspense fallback={<EventsRowsSkeleton/>}>
      <EventList selectedEvent={selected} />
    </Suspense>
  </div>
  );
}
