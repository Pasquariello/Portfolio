'use client'
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useCallback } from "react";

export default function MemberDetails({memberDetails}) {
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

  return (
      <li 
          onClick={(e) => {
              router.push(pathname + '?' + createQueryString('selected', memberDetails.id))
          }}
          key={memberDetails.id}
          className="flex gap-x-6 py-5"
      >
          {memberDetails.admin && <UserCircleIcon className="w-6"  /> }
          {memberDetails.name} 
      </li>
  )
}