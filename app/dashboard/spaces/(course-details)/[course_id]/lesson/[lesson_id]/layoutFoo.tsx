import { fetchSingleSpace } from "@/app/lib/data";
import LessonFooter from "@/app/ui/spaces/lesson/lesson-footer";
import LessonHeader from "@/app/ui/spaces/lesson/lesson-header";
import { CourseProgressBar } from "@/app/ui/spaces/progress-bar";

  export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ course_id: number; lesson_id: number }> }) {


    const course_id = (await params).course_id;
    const lesson_id = (await params).lesson_id;


    const course = await fetchSingleSpace(course_id);


    const lessons = course.course_sections.map(section => {
      return [...section.lessons]
    }).flat(Infinity);

    const lessonIndex = lessons.findIndex(lesson => lesson.id === Number(lesson_id));
    const lessonCount = course.total_lesson_count;
  // const foo = course?.course_section.flat(Infinity).lessons.flat(Infinity)

    const next_id = lessons[lessonIndex + 1]?.id;
    const prev_id = lessons[lessonIndex - 1]?.id;

    if (!course) {
        return (
            <div>No Course data</div>
        )
    }

        const percent_complete = Number((course?.course_percent_completed * 100).toFixed(0));
        const { name, total_lesson_count, total_lessons_completed } = course;
        const total_section_count = course.course_sections.length;

  return (
    <div>
        <LessonHeader 
          percent_complete={percent_complete} 
          name={name} 
          total_lesson_count={total_lesson_count} 
          total_lessons_completed={total_lessons_completed} 
          course_id={course_id} 
        />
        {children}
        
        <LessonFooter course_id={course_id} lesson_id={2} next_id={next_id} prev_id={prev_id} lesson_status={'incomplete'} />
    </div>
  );
}