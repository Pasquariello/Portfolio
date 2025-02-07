import { fetchLessonData } from "@/app/lib/data";
import LessonVideo from "./lesson-video";

export default async function LessonBody({course_id, lesson_id, lessonIndex, lessonCount  }) {
    const lesson = await fetchLessonData(course_id, lesson_id);
    const hasVideo = !!lesson?.featured_media;

    return (
        <>
            <div className="flex-grow">
                <div className="flexborder mb-4">
                    <div>
                        <p className="text-sm md:text-sm text-gray-500">Lesson {lessonIndex + 1} of {lessonCount} </p>
                        <h2 className="text-2xl md:text-2xl">{lesson.name}</h2>
                    </div>
                </div>
                <div className="flex h-full justify-center">
                    {
                        hasVideo &&  (
                            <LessonVideo 
                                thumbnail_url={lesson.featured_media.thumbnail_url} 
                                type={lesson.featured_media.type} 
                                provider_url={lesson.featured_media.provider_url} 
                                url={lesson.featured_media.url}
                            />
                        )
                    }
                </div>
            </div>
        </>
    )
}