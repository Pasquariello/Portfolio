import { fetchSingleSpace } from "@/app/lib/data";
import LessonBody from "@/app/ui/spaces/lesson/lesson-body";
import LessonFiles from "@/app/ui/spaces/lesson/lesson-files";
import LessonFooter from "@/app/ui/spaces/lesson/lesson-footer";
import LessonHeader from "@/app/ui/spaces/lesson/lesson-header";
import { LessonSideBar } from "@/app/ui/spaces/lesson/lesson-sidebar";
import LessonVideo from "@/app/ui/spaces/lesson/lesson-video";

import { Suspense } from "react";

export default async function Page({params}: {
    params: Promise<{ lesson_id: number; course_id: number }>
  }) {

    const lesson_id = (await params).lesson_id;
    const course_id = (await params).course_id;

    // const lesson = await fetchLessonData(course_id, lesson_id);
    const course = await fetchSingleSpace(course_id);
    console.log('course', course)
    const lessons = course.course_sections.map(section => {
        return [...section.lessons]
    }).flat(Infinity);

    console.log('lessons', lessons);


    const lessonIndex = lessons.findIndex(lesson => lesson.id === Number(lesson_id));
    const lessonCount = course.total_lesson_count;

    const lesson = lessons.find(lesson => lesson.id ===  Number(lesson_id));

    const next_id = lessons[lessonIndex + 1]?.id;
    const prev_id = lessons[lessonIndex - 1]?.id;

    const percent_complete = Number((course?.course_percent_completed * 100).toFixed(0));
    const { name, total_lesson_count, total_lessons_completed } = course;
    const total_section_count = course.course_sections.length;

    // const hasVideo = !!lesson?.featured_media;
    
    return (
        <>
            <LessonHeader
                percent_complete={percent_complete} 
                name={name} 
                total_lesson_count={total_lesson_count} 
                total_lessons_completed={total_lessons_completed} 
                course_id={course_id} 
            />
            {/* End Header */}

            <div className="flex flex-col h-screen !mb-[-48px]">
                 {/* Start Body  */}
                 <div className="flex flex-grow justify-center">
                    <Suspense fallback={<div>Loading...</div>}>
                        <LessonBody 
                            course_id={course_id}
                            lesson_id={lesson_id}
                            lessonIndex={lessonIndex}
                            lessonCount={lessonCount}
                        />
                  
                        
                            <LessonSideBar>
                                <LessonFiles course_id={course_id} lesson_id={lesson_id}/>
                            </LessonSideBar>
                        
                    </Suspense>
                
                 </div>

                {/* Start Body  */}


                {/* Start  Footer */}
                <LessonFooter 
                    course_id={course_id} 
                    lesson_id={lesson_id} 
                    next_id={next_id} 
                    prev_id={prev_id} 
                    lesson_status={lesson?.progress.status} 
                />
                {/* End Footer */}
            </div>
        </>
    );
}
