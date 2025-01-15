import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import SpaceList from "@/app/ui/spaces/spaceList";
import { Suspense } from "react";

export default async function Page({searchParams}) {

  const searchMe = await searchParams;
  const search = searchMe.search;
  console.log('search ===', search)

  return (
    <div>
        <div>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="email"
          >
            Space Search
          </label>
          
          {/* <MemberSearch /> */}
        </div>

        <Suspense fallback={<RevenueChartSkeleton />}> 
          <SpaceList />
        </Suspense>
      
  </div>
  );
}