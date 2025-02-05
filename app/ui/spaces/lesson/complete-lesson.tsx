'use client'
import { useState } from "react";
import { Button } from "../../button";
import { updateLessonProgress } from "../actions";

export default function CompleteLesson({course_id, lesson_id, current_status}) {

    const [isHovered, setIsHovered] = useState(false);

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
        <>

        <div className="relative inline-block">
            {/* Tooltip */}
            {isHovered && (
            <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-max p-2 bg-black text-white text-sm rounded shadow-lg opacity-90">
                {progress.tooltip}
            </div>
            )}

            {/* Button */}
            <Button
            // className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 transition"
                className="!bg-[#F7F9FA] !text-blue-500 hover:bg-white hover:underline"
                onClick={() => {
                    updateLessonProgress({course_id, lesson_id, progress: progress.value})
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {progress.label}
            </Button>
        </div>

        {/* <Button
            className="!bg-[#F7F9FA] !text-blue-500 hover:bg-white hover:underline"
            onClick={() => {
                updateLessonProgress({course_id, lesson_id, progress: progress.value})
            }}
        >
            {progress.label}
        </Button>
         <div data-tooltip="tooltip"
         className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none">
         {progress.tooltip}
       </div> */}
       </>
    )
}