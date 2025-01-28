'use server'

import { joinSpace, leaveSpace, rsvpToEvent, fooRSVPLeave, fooRSVP} from "@/app/lib/data";

 
export async function leave(id) {
    console.log('leave TAYLOR 009900')
    return await fooRSVPLeave(id);
}

export async function rsvp(id) {
    console.log('rsvp')
    return await fooRSVP(id);
}