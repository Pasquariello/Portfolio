import { fetchCommunityMembers, searchMembers } from "@/app/lib/data";
import MemberDetails from "./memberDetails";

export default async function MemberList({search}) {
  
    const members = await fetchCommunityMembers();
    console.log('members', members);
    return (
        <div className="flex">
            <div role="list" className="flex flex-wrap">
            {
                members?.records?.map(memberDetails => {
                    return (
                        <MemberDetails key={memberDetails.community_member_id} memberDetails={memberDetails} />
                    )
                }
            )}
            </div>
        </div>
        
    )
}