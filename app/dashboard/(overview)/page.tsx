import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestEventsSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import LatestEvents from '@/app/ui/dashboard/latest-events';
import CourseWrapper from '@/app/ui/dashboard/courses';
import Link from 'next/link';
import { PencilSquareIcon } from '@heroicons/react/24/outline';

export default async function Page() {
   
  return (
    <main>
      {/* Start */}
            <div className="flex items-baseline">
                <h2 className={`mb-4 mr-6 text-xl md:text-2xl`}>
                    Course Progress
                </h2>

                <Link
                    href="/dashboard/spaces?type=course"
                    className="flex font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >
                    Register
                    <PencilSquareIcon className='h-6 w-6 ml-1'/>
                </Link> 
            </div>

        <div 
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12"
            // className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 place-items-center"
        >
            <Suspense fallback={<CardsSkeleton />}>
                <CourseWrapper />
            </Suspense>
        </div>
      {/* End */}
      {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-12">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div> */}
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestEventsSkeleton />}>
          <LatestEvents />
        </Suspense>
      </div>
    </main>
  );
}