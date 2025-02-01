'use client'
import { getLoggedInUserEmail } from "@/app/lib/data";
import { CommunityMember, SearchMember } from "@/app/lib/types";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback, useState, useEffect } from "react";

const colors = ['bg-pink-500', 'bg-cyan-500', 'bg-zinc-500', 'bg-lime-500', 'bg-rose-400', 'bg-slate-500', 'bg-fuchsia-400', 'bg-purple-400', 'bg-violet-400', 'bg-indigo-500', 'bg-sky-500', 'bg-teal-500', 'bg-emerald-400', 'bg-yellow-500', ' bg-amber-500', ' bg-orange-500', ' bg-red-500',]

var rand = colors[4] //colors[(Math.random() * colors.length) | 0]

export default function MemberDetails({ memberDetails }: { memberDetails: CommunityMember }) {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [loggedInUserEmail, setLoggedInUserEmail] = useState<string | null>(null);
    const memberName = memberDetails.name;
    console.log(memberDetails.email);

    if (loggedInUserEmail === memberName) {
        return null;
    }

    useEffect(() => {
        const fetchUserEmail = async () => {
            const email = await getLoggedInUserEmail();
            setLoggedInUserEmail(email);
        };
        
        fetchUserEmail();
    }, []);

    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    const createQueryString = useCallback(
        (name: string, value: string) => {
            const params = new URLSearchParams(searchParams.toString())
            params.set(name, value)

            return params.toString()
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
        <div
            key={memberDetails.community_member_id}
            className="w-3xs flex-none m-6 border-solid rounded-xl shadow-sm bg-white"
            onClick={(e) => {
                router.push(pathname + '?' + createQueryString('selected', memberDetails.community_member_id.toString()))
            }}
        >
            {renderAvatar()}
            <div className="p-4 flex flex-col items-center">
                <h3 className="m-2 text-sm font-medium">
                    {memberDetails.email === loggedInUserEmail ? `${memberDetails.name} (You)` : memberDetails.name}
                </h3>
                <p className="mt-2 text-xs/5 text-gray-500">{memberDetails.headline}</p>
            </div>
        </div>
    )
}