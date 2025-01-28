"use client"
import { lusitana } from '@/app/ui/fonts';
import { Button } from "../button";
import { useState } from "react";

import {leave, join} from './actions';

import { useTransition  } from 'react'
import { LoadingSpinner } from '../loadingSpinner';


export default function SpaceDetails({spaceDetails}) {
    let [isPending, startTransition] = useTransition();

    const { id, name, is_member } = spaceDetails;
    

    const leaveMe = () => {
        startTransition(() => {
            leave(id);
        });

    }

    const joinMe = () => {
        startTransition(() => {
            join(id);
        });

    }

    return (
        <div className="m-6 border-solid rounded-xl p-2 shadow-sm flex justify-center bg-white">
            <div className="p-4 flex flex-col items-center">
                <h3 className="m-2 text-sm font-medium">{name}</h3>
                {is_member ?                     
                        <Button 
                            onClick={leaveMe}
                            className="outline outline-2 bg-transparent outline-blue-500 !text-blue-500 hover:!text-white"
                        >
                            {isPending ? <LoadingSpinner className="!text-black"/> : 'Leave'}
                        </Button>
                        
                    : <Button 
                        onClick={joinMe}
                        className="outline outline-2 hover:bg-transparent outline-blue-500 hover:!text-blue-500 m-0 margin"
                    >
                         {isPending ? <LoadingSpinner className="!text-white"/> : 'Join'}
                    </Button>
                }
            </div>
        </div>

    )
}

