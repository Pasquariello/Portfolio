'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect } from 'react';

export default function SpacesSelect({spaces}) {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter(); 

    const selectedSpaceId = searchParams.get('selectedSpace')
    


    useEffect(() => {
            const params = new URLSearchParams(searchParams);
       
            params.set('selectedSpace', spaces[0].id);
    
            replace(`${pathname}?${params?.toString()}`);
    
      
    }, []);


    function handleChange(term: string) {
        const params = new URLSearchParams(searchParams);
        if (term) {
          params.set('selectedSpace', term);
        } else {
          params.delete('selectedSpace');
        }
        replace(`${pathname}?${params?.toString()}`);
      }

    return (
        <select
            id="space-select"
            value={selectedSpaceId || ''}
            onChange={(e) => handleChange(e.target.value)}
            className=" px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        >
            {
                spaces.map((space) => {
                    return (
                        <option key={space.id} value={space.id}>
                            {space.name}
                        </option>
                    )
                })
            }
        </select>

    )
}