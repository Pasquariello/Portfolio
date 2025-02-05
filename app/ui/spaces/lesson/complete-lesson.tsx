'use client'
import { Button } from "../../button";
import { updateLessonProgress } from "../actions";

export default function CompleteLesson({course_id, lesson_id, current_status}) {
    const COMPLETE = 'completed';
    const INCOMPLETE = 'incomplete';
    
    const buttonProps = {
        [INCOMPLETE]: {
            label: 'Complete Lesson',
            tooltip: 'Mark Lesson as Complete',
            value: COMPLETE,
        },
        [COMPLETE]: {
            label: 'Completed',
            tooltip: 'Mark Lesson as Incomplete',
            value: INCOMPLETE,
        },
    }

    const progress = buttonProps[current_status] || buttonProps[INCOMPLETE];


    return (
        <Button
            className="!bg-[#F7F9FA] !text-blue-500 hover:bg-white hover:underline"
            onClick={() => {
                updateLessonProgress({course_id, lesson_id, progress: progress.value})
            }}
        >
            {progress.label}
        </Button>
    )
}