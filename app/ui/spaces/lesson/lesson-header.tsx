import { ChevronLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { CourseProgressBar } from "../progress-bar"

export default async function LessonHeader({course_id, name, percent_complete, total_lessons_completed, total_lesson_count  }) {

    return (
      <>
        <div className="flex items-center mb-2">
            <Link
                href={`/dashboard/spaces/${course_id}`}
            >
                <ChevronLeftIcon className="w-8 h-8 mr-2"/>
            </Link>
            <h3 className="text-3xl md:text-3xl">{name}</h3>
        </div>

        <div className="mt-2 mb-6 p-8">
            <CourseProgressBar value={percent_complete} complete={total_lessons_completed} total={total_lesson_count} />
        </div>
      </>
    )
}