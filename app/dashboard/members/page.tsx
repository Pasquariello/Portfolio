import { getLoggedInUserCommunityMemberId, getMatchingInterests } from "@/app/lib/data";
import MemberList from "@/app/ui/members/memberList";
import MemberSearch from "@/app/ui/members/memberSearch";
import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import { Suspense } from "react";

export default async function Page({searchParams}) {

  const params = await searchParams;
  const search = params.search;
  const loggedInUserCommunityMemberId = await getLoggedInUserCommunityMemberId();
  const matchingInterests = await getMatchingInterests(loggedInUserCommunityMemberId);
  
  return (
    <div>
       <h1 className={`mb-4 text-xl md:text-2xl mr-8`}>
        Explore and Connect with Other Members
      </h1>
        <div className="mb-2">
          <label
            className="mb-3 mt-5 block text-xs font-medium text-gray-900"
            htmlFor="email"
          >
            Member Search
          </label>
          <MemberSearch search={search} />
        </div>

        <Suspense fallback={<RevenueChartSkeleton />}> 
          <MemberList search={search} loggedInUserCommunityMemberId={loggedInUserCommunityMemberId} matchingInterests={matchingInterests} />
        </Suspense>
      
  </div>
  );
}