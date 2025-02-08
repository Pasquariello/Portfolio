'use server'

import { fetchLessonFiles, fetchUpdateLessonProgress, joinSpace, leaveSpace } from "@/app/lib/data";

 
export async function leave(id) {
    await leaveSpace(id);
}

export async function join(id) {
    await joinSpace(id);
}

export async function updateLessonProgress(data){
    await fetchUpdateLessonProgress(data)
}

export async function getLessonFiles(course_id, lesson_id){
    const res = await fetchLessonFiles(course_id, lesson_id)
    return res;
}