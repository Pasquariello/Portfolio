"use client"
import {leave, join} from './actions';

import { useTransition  } from 'react'
import { LoadingSpinner } from '../loadingSpinner';
import Link from 'next/link';


export default function SpaceAction({id, is_member, type}) {
    let [isPending, startTransition] = useTransition();

    const action = (e) => startTransition(() => {
        e.stopPropagation();
        e.preventDefault();
        is_member ? leave(id) : join(id)
    })

    const text = is_member ? 'Leave' : 'join';
    console.log('type', type)
    return (
        isPending ? 
            <LoadingSpinner className="!text-blue-500"/> 
        :  (
            <div className='flex justify-between'>
            <button 
                onClick={action}
                className="bg-transparent !text-blue-500 hover:underline"
            >
                {text}
            </button>
            {
                (type === 'course' && is_member) && (
                <Link 
                    onClick={(e) => {
                        e.stopPropagation();
                        e.nativeEvent.preventDefault();
                    }}
                    href={`/dashboard/spaces/${id}`}
                    className="!text-blue-500 hover:underline"
                >
                    View Course
                </Link>
                )
            }
            </div>
        )
    )
}

