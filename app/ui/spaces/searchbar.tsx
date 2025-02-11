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
        <div className="w-full max-w-sm min-w-[200px]">      
            <div className="relative">
                <label className="block mb-2 text-md/4 text-gray-500">Filter Group types:</label>
                <select
                    id="space-type-filter"
                    value={value}
                    onChange={(e) => handleChange(e.target.value)}
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded pl-3 pr-8 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md appearance-none cursor-pointer"
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

