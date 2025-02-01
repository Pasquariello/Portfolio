import { fetchCommunityMembers, searchMembers } from "@/app/lib/data";
import MemberDetails from "./memberDetails";

export default async function MemberList({search, loggedInUserCommunityMemberId}) {
  
    const members = await fetchCommunityMembers();
    return (
        <div className="flex">
            <div role="list" className="flex flex-wrap">
            {
                members?.records?.map(memberDetails => {
                    return (
                        <MemberDetails key={memberDetails.community_member_id} memberDetails={memberDetails} loggedInUserCommunityMemberId={loggedInUserCommunityMemberId} />
                    )
                }
            )}
            </div>
        </div>
        
    )
}