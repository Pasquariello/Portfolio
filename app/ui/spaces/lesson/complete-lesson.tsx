'use client'
import { Button } from "../../button";
import { updateLessonProgress } from "../actions";

export default function CompleteLesson({course_id, lesson_id, current_status}) {
    const COMPLETE = 'completed';
    const INCOMPLETE = 'incomplete'
    
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

    return (
        <Button
            className="mt-12"
            onClick={() => {
                updateLessonProgress({course_id, lesson_id, progress: buttonProps[current_status].value})
            }}
        >
            {buttonProps[current_status].label}
        </Button>
    )
}