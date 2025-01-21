import { searchMembers } from "@/app/lib/data";
import MemberDetails from "./memberDetails";

export default async function MemberList({search}) {
  
    const members = await searchMembers(search);

    return (
        <div className="w-2/3">
            <ul role="list" className="divide-y divide-gray-100">
            {
                members?.records?.map(memberDetails => {
                    return (
                        <MemberDetails key={memberDetails.id} memberDetails={memberDetails} />
                    )
                }
            )}
            </ul>
        </div>
        
    )
}