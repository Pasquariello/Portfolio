import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import { lusitana } from '@/app/ui/fonts';
import { fetchLessonData } from '@/app/lib/data';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestEventsSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import LatestInvoices from '@/app/ui/dashboard/latest-invoices';
import { ProgressBar } from '@/app/components/progressBar';
import CourseWrapper from '@/app/ui/dashboard/courses';

export default async function Page() {
    // const data =  await fetchCourseSections();
    // const data2 = await fetchLessonData();
    // console.log('data ===', data);
    // console.log('data === lessons', data[0].lessons);
    // console.log('data === 2', data2);

    // const data3 = await fetchCourses();
    // console.log('data === 3', data3);



  return (
    <main>
      <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Dashboard Number 2
      </h1>

      {/* Start */}
        <Suspense fallback={<CardsSkeleton />}>
            <CourseWrapper />
        </Suspense>
      {/* End */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        <Suspense fallback={<RevenueChartSkeleton />}>
          <RevenueChart />
        </Suspense>
        <Suspense fallback={<LatestEventsSkeleton />}>
          <LatestInvoices />
        </Suspense>
      </div>
    </main>
  );
}