import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import CompleteLesson from "./complete-lesson"

export default async function LessonFooter({course_id, lesson_id, next_id, prev_id, lesson_status}) {

    return (
        <>
            <div className="sticky w-full bottom-[-48px] bg-[#F7F9FA] border-t border-gray-200">
                <div className="flex justify-center items-center my-6">
                    {
                        prev_id && (
                            <Link
                                href={`/dashboard/spaces/${course_id}/lesson/${prev_id}`}
                            >
                                <ArrowLeftCircleIcon className="h-8 text-blue-500"/>
                            </Link>
                        )
                    }
                
                    <CompleteLesson course_id={course_id} lesson_id={lesson_id} current_status={lesson_status}/>
                    
                    {
                        next_id && (
                            <Link
                                href={`/dashboard/spaces/${course_id}/lesson/${next_id}`}
                            >
                                <ArrowRightCircleIcon className="h-8 text-blue-500"/>
                            </Link>
                        )
                    }
                </div>
            </div> 
        </>
    )
}