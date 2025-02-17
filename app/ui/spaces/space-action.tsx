"use client"
import {leave, join} from './actions';

import { useTransition  } from 'react'
import { LoadingSpinner } from '../loadingSpinner';


export default function SpaceAction({id, is_member}) {
    let [isPending, startTransition] = useTransition();

    const action = (e) => startTransition(() => {
        e.stopPropagation();
        e.preventDefault();
        is_member ? leave(id) : join(id)
    })

    const text = is_member ? 'Leave' : 'join';

    return (
        isPending ? 
            <LoadingSpinner className="!text-blue-500"/> 
        :  (
            <button 
                onClick={action}
                className="bg-transparent !text-blue-500 hover:underline"
            >
                {text}
            </button>
        )
    )
}

