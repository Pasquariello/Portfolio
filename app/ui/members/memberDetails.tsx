'use client'
import { CommunityMember, SearchMember } from "@/app/lib/types";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState } from "react";

const colors = ['bg-pink-500', 'bg-cyan-500', 'bg-zinc-500', 'bg-lime-500', 'bg-rose-400', 'bg-slate-500', 'bg-fuchsia-400', 'bg-purple-400', 'bg-violet-400', 'bg-indigo-500', 'bg-sky-500', 'bg-teal-500', 'bg-emerald-400', 'bg-yellow-500', ' bg-amber-500', ' bg-orange-500', ' bg-red-500',]

var rand = colors[4]

export default function MemberDetails({ memberDetails, loggedInUserCommunityMemberId, matchingInterest }: { memberDetails: CommunityMember, loggedInUserCommunityMemberId: number, matchingInterest: any }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [showModal, setShowModal] = useState(false);

    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams?.toString())
            params.set(name, value)
            return params?.toString()
        },
        [searchParams]
    )

    const renderAvatar = () => {
        const initials = memberDetails.name.split(' ').map(word => word[0]).join('');

        return memberDetails.avatar_url ? (
            <Image
                src={memberDetails.avatar_url}
                width={256}
                height={256}
                className="rounded-t-xl"
                alt="Screenshots of the dashboard project showing desktop version"
            />
        ) : (
            <div className={`${rand} size-[256px] rounded-t-xl flex justify-center items-center`}>
                <h2 className="text-white">{initials}</h2>
            </div>
        )
    }

    return (
        <>
            <div
                key={memberDetails.community_member_id}
                className="w-3xs flex-none m-6 border-solid rounded-xl shadow-sm bg-white"
                onClick={(e) => {
                    router.push(pathname + '?' + createQueryString('selected', memberDetails?.community_member_id?.toString()))
                }}
            >
                {renderAvatar()}
                <div className="p-4 flex flex-col items-center">
                    <h3 className="m-2 text-sm font-medium">
                        {memberDetails.community_member_id === loggedInUserCommunityMemberId ? `${memberDetails.name} (You)` : memberDetails.name}
                    </h3>
                    <p className="mt-2 text-xs/5 text-gray-500">{memberDetails.headline}</p>
                    {matchingInterest && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowModal(true);
                            }}
                            className="mt-3 text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                            {matchingInterest.matchingCount} matching interests
                        </button>
                    )}
                </div>
            </div>

            {showModal && (
                <div className="fixed inset-0 bg-black/25 z-50 flex items-center justify-center">
                    <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative">
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <h3 className="text-xl font-semibold mb-4">You both like</h3>
                        <div className="max-h-96 overflow-y-auto">
                            {matchingInterest?.matchingInterests.map((interest: string, index: number) => (
                                <div key={index} className="py-2 px-4 hover:bg-gray-50 rounded-lg">
                                    <p className="text-gray-800">{interest}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}