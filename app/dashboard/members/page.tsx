import MemberList from "@/app/ui/members/memberList";
import MemberSearch from "@/app/ui/members/memberSearch";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page({searchParams}) {

  const searchMe = await searchParams;
  const search = searchMe.search;

  return (
    <div>
        <div>
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="email"
          >
            Member Search
          </label>
          <MemberSearch search={search} />
        </div>

        <Suspense fallback={<RevenueChartSkeleton />}> 
          <MemberList search={search} />
        </Suspense>
      
  </div>
  );
}