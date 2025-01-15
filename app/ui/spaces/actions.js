'use server'

import { joinSpace, leaveSpace } from "@/app/lib/data";

 
export async function leave(id) {
    console.log('leave')
    await leaveSpace(id);
}

export async function join(id) {
    await joinSpace(id);
}