'use client'

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation'

export function SearchBar() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    const value = searchParams.get('type')?.toString()

    function handleChange(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
          params.set('type', term);
        } else {
          params.delete('type');
        }
        replace(`${pathname}?${params?.toString()}`);
      }
  
    return (
  //     <div className="flex w-full">
  //     <input
  //         className="rounded-md border border-gray-200 bg-white py-[9px] pl-10 text-sm placeholder:text-gray-500"
  //         id="memberSearch"
  //         name="memberSearch"
  //         placeholder="Search Member"
  //         required
  //         value={memberInput}
  //         onChange={(e) => setMemberInput(e.target.value)}
  //     />
  // </div>
        <div className="w-full max-w-sm min-w-[200px]">      
            <div className="relative">
                <label 
                  // className="block mb-2 text-md/4 text-gray-500"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                    Filter Group types:</label>
                <select
                    id="space-type-filter"
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    className=" px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"

                >
                    <option value="all">Show All</option>
                    <option value="basic">Basic</option>
                    <option value="course">Course</option>
                    <option value="event">Event</option>
                    <option value="members">Members</option>
                </select>
            </div>
            </div>

          
    );
  }

