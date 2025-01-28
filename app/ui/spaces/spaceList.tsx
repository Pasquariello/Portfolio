import { fetchSpaces, joinSpace, leaveSpace } from "@/app/lib/data";
import { Card } from "./card";
import { lusitana } from '@/app/ui/fonts';
import { Button } from "../button";
import { Suspense } from "react";
import SpaceDetails from "./spaceDetails";


export default async function SpaceList() {
    
    const spaces = await fetchSpaces();
    if (!spaces.length) {
        return <p>No Groups</p>
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {
                spaces?.map(spaceDetails => {
                    const { id, name, is_member } = spaceDetails;
                    return (
                        <SpaceDetails key={id} spaceDetails={spaceDetails} />
                    )
                }
            )}
        </div>
        
    )
}


// click button
// set loading 
// call api route 
// API route will call join 
   // <div>{spaceDetails.name}</div>
//    <div className="m-6 border-solid rounded-xl bg-white p-2 shadow-sm">
//    <div className="p-4">
//        <h3 className="m-2 text-sm font-medium">{name}</h3>
//        {is_member ? 
//            <form
//                action={async () => {
//                "use server";
//                await leaveSpace(id);
//            }}>
             
//                <Button 
//                    className="outline outline-2 outline-offset-2 bg-transparent outline-blue-500 !text-blue-500 hover:!text-white"
//                >
//                <Suspense fallback="Loading">

//                    Leave
//                    </Suspense>
//                </Button>
             
//            </form> : 
//            <Suspense fallback={<div>Loading</div>}>

//            <form
//                action={async () => {
//                "use server";
//                await joinSpace(id);
//            }}>
//                <Button >Join</Button>
//            </form>
//            </Suspense>
//        }
//    </div>
// </div>