import { fetchCommunityMembers, getMatchingInterests, searchMembers } from "@/app/lib/data";
import MemberDetails from "./memberDetails";
import { CommunityMemberSearchResult, MemberSearchResult } from "@/app/lib/types";

export default async function MemberList({ search, loggedInUserCommunityMemberId, matchingInterests }) {
    let members: MemberSearchResult | CommunityMemberSearchResult;
    if (search) {   
        members = await searchMembers(search) as MemberSearchResult;
    } else {
        members = await fetchCommunityMembers() as CommunityMemberSearchResult;
    }
    return (
        <div className="flex">
            <div role="list" className="flex flex-wrap">
                {
                    members?.records?.map(memberDetails => {
                        const matchingInterest = matchingInterests.find(
                            match => match.community_member_id === memberDetails.community_member_id
                        );
                        return (
                            <MemberDetails 
                                key={memberDetails.community_member_id} 
                                memberDetails={memberDetails}
                                loggedInUserCommunityMemberId={loggedInUserCommunityMemberId}
                                matchingInterest={matchingInterest}
                            />
                        )
                    }
                    )}
            </div>
        </div>

    )
}