// import {leave, join} from './actions';
// import { useTransition  } from 'react'
import { LoadingSpinner } from '../loadingSpinner';
import { fetchSpaces } from '@/app/lib/data';
import SpaceAction from './space-action';
import Link from 'next/link';
import PressableRow from './pressable-row';


export default async function SpaceDetails({type}) {

    const res = await fetchSpaces();

    const spaces = !type || type === 'all' ? res : res?.filter(space => space.space_type === type);
    
    if (!spaces || !spaces.length) {
       return (
        <tr className="bg-white border-b border-gray-200">
            <td scope="row" colSpan={4} className="px-6 py-4 font-medium text-gray-900 whitespace-wrap">
                No Spaces under this type yet..
            </td>
        </tr>
       )
    }

    
    return spaces?.map(spaceDetails => {
        return (
            <PressableRow 
                key={spaceDetails.id}  
                url={`/dashboard/posts?selectedSpace=${spaceDetails.id}`}
            >
                
                <td scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-wrap">
                    {spaceDetails.name} 
                </td>
                <td className="px-6 py-4">
                    {spaceDetails.space_type}
                </td>
                <td className="px-6 py-4">
                    {spaceDetails.is_member ? 'Yes' : 'No'}
                </td>
                <td className="px-6 py-4">
                    <SpaceAction id={spaceDetails.id} is_member={spaceDetails.is_member} />
                </td>
            </PressableRow>
        )  
    }


    )
}

