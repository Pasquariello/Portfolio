import { fetchLessonData, fetchSingleSpace } from "@/app/lib/data";
import CompleteLesson from "@/app/ui/spaces/lesson/complete-lesson";
import LessonVideo from "@/app/ui/spaces/lesson/lesson-video";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default async function Page({params}: {
    params: Promise<{ lesson_id: number; course_id: number }>
  }) {

    const lesson_id = (await params).lesson_id;
    const course_id = (await params).course_id;

    const lesson = await fetchLessonData(course_id, lesson_id);
    const course = await fetchSingleSpace(course_id);

    const lessons = course.course_sections.map(section => {
        return [...section.lessons]
    }).flat(Infinity);

    console.log('lessons', lessons)

    const lessonIndex = lessons.findIndex(lesson => lesson.id === Number(lesson_id));
    const lessonCount = course.total_lesson_count;
    // const foo = course?.course_section.flat(Infinity).lessons.flat(Infinity)

    const next_id = lessons[lessonIndex + 1]?.id;
    const prev_id = lessons[lessonIndex - 1]?.id;

    console.log('next_id', next_id)
    console.log('prev_id', prev_id)




    // console.log('COURSE_DETAILS', course);
    // console.log('lessons DUDDE', lessons);


// const videoId = new URLSearchParams(new URL(lesson.featured_media.url).search).get("v"); // Extract video ID from URL
// const embedUrl = `${lesson.featured_media.provider_url}/${lesson.featured_media.type}/${videoId}?feature=oembed`;
// const videoUrl = lesson.featured_media.url;
// const imageUrl = lesson.featured_media.thumbnail_url;

// // Build the dynamic embed URL
// const embedlyUrl = `//cdn.embedly.com/widgets/media.html?src=${encodeURIComponent(embedUrl)}&url=${encodeURIComponent(videoUrl)}&image=${encodeURIComponent(imageUrl)}&type=text%2Fhtml`;
    const hasVideo = !!lesson?.featured_media;
    
    return (
        // relative h-screen
        <div className="flex flex-col h-screen !mb-[-48px] items-center">
            <div className="flex-grow">
            <p>Lesson {lessonIndex + 1} of {lessonCount} </p>
            <h2>{lesson.name}</h2>
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
             <div className="sticky w-full bottom-[-48px] bg-[#F7F9FA] border-t border-gray-500">
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
                   
                    <CompleteLesson course_id={course_id} lesson_id={lesson_id} current_status={lesson.progress.status}/>
                    
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
        </div>
    );
}
