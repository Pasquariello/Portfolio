import { searchMembers } from "@/app/lib/data";
import MemberDetails from "./memberDetails";

export default async function MemberList({search}) {
  
    const members = await searchMembers(search);
    console.log('members', members);
    return (
        <div className="flex">
            <div role="list" className="flex flex-wrap">
            {
                members?.records?.map(memberDetails => {
                    return (
                        <MemberDetails key={memberDetails.id} memberDetails={memberDetails} />
                    )
                }
            )}
            </div>
        </div>
        
    )
}