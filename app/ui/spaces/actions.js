'use server'

import { fetchUpdateLessonProgress, joinSpace, leaveSpace } from "@/app/lib/data";

 
export async function leave(id) {
    await leaveSpace(id);
}

export async function join(id) {
    await joinSpace(id);
}

export async function updateLessonProgress(data){
    console.log('PRESSED ME', data)
    await fetchUpdateLessonProgress(data)
    
}