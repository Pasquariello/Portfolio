'use server'

import { joinSpace, leaveSpace, rsvpToEvent, fooRSVPLeave, fooRSVP} from "@/app/lib/data";

 
export async function leave(id) {
    return await fooRSVPLeave(id);
}

export async function rsvp(id) {
    return await fooRSVP(id);
}