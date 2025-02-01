'use client'
import { Member } from "@/app/lib/types";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from "react";

const colors = ['bg-pink-500', 'bg-cyan-500', 'bg-zinc-500', 'bg-lime-500', 'bg-rose-400', 'bg-slate-500', 'bg-fuchsia-400', 'bg-purple-400', 'bg-violet-400', 'bg-indigo-500', 'bg-sky-500', 'bg-teal-500', 'bg-emerald-400', 'bg-yellow-500', ' bg-amber-500', ' bg-orange-500', ' bg-red-500', ]

var rand = colors[4] //colors[(Math.random() * colors.length) | 0]

export default function MemberDetails({memberDetails}: {memberDetails: Member}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams()

  
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
    const initials = memberDetails.first_name[0] + memberDetails.last_name[0] 

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
      key={memberDetails.id}
      className="w-3xs flex-none m-6 border-solid rounded-xl shadow-sm bg-white"
      onClick={(e) => {
        router.push(pathname + '?' + createQueryString('selected', memberDetails.id.toString()))
      }}
    >
      {renderAvatar()}
      <div className="p-4 flex flex-col items-center">
          <h3 className="m-2 text-sm font-medium">{memberDetails.name}</h3>
          <p className="mt-2 text-xs/5 text-gray-500">{memberDetails.headline}</p>
      </div>
    </div>
  )
}