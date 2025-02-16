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

            if (!selectedSpaceId) {
                console.log("HERE ")
                params.set('selectedSpace', spaces[0].id);
                replace(`${pathname}?${params?.toString()}`);
            }
    
    
      
    }, [selectedSpaceId]);

    console.log('spaces', spaces)

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
        <div className='flex flex-wrap gap-2'>  
              {
            spaces.map((space) => {
                return (
                    <div 
                        key={space.id} 
                        className={`border-2 border-blue-500 py-2 px-4 rounded-full inline-block hover:bg-blue-50 hover:cursor-pointer active:bg-blue-100 ${selectedSpaceId === String(space.id) ? 'bg-blue-500 text-white hover:text-black' : 'bg-white'}`}
                        onClick={() => handleChange(space.id)}
                    >
                        {space.name}
                    </div>
                )
            })
        }
        </div>

        // <select
        //     id="space-select"
        //     value={selectedSpaceId || ''}
        //     onChange={(e) => handleChange(e.target.value)}
        //     className=" px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
        // >
            
        //     {
        //         spaces.map((space) => {
        //             return (
        //                 <option key={space.id} value={space.id}>
        //                     {space.name}
        //                 </option>
        //             )
        //         })
        //     }
        // </select>

    )
}