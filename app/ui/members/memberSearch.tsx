'use client'

import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDebounce } from 'use-debounce'

const MemberSearch = ({ search }: { search?: string }) => {
  const router = useRouter()
  const initialRender = useRef(true)

  const [memberInput, setMemberInput] = useState(search || '')

  const [query] = useDebounce(memberInput, 750)

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false
      return
    }

    if (!query) {
      router.push(`/dashboard/members`)
    } else {
      router.push(`/dashboard/members?search=${query}`)
    }
  }, [query])




  return (
        <div className="flex w-full">
            <input
                className=" rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="memberSearch"
                name="memberSearch"
                placeholder="Search Member"
                required
                value={memberInput}
                onChange={(e) => setMemberInput(e.target.value)}
            />
    </div>
  )
}

export default MemberSearch