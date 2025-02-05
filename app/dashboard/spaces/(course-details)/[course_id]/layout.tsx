import { fetchSingleSpace } from "@/app/lib/data";
import { CourseProgressBar } from "@/app/ui/spaces/progress-bar";

  export default async function Layout({ children, params }: { children: React.ReactNode, params: Promise<{ course_id: number }> }) {


    const course_id = (await params).course_id;

    const course = await fetchSingleSpace(course_id);
    console.log('YIPPIE', course_id);


    console.log('YEHAW', course);

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
         <h3 className="text-3xl md:text-3xl mb-4">{name}</h3>
            
            <div className="my-8 p-8">
                <CourseProgressBar value={percent_complete} complete={total_lessons_completed} total={total_lesson_count} />
            </div> 
            {

            }
        {children}
    </div>
  );
}