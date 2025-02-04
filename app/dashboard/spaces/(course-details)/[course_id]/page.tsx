import { fetchSingleSpace } from "@/app/lib/data";
import CourseSections from "@/app/ui/spaces/course-accordian/sections-container";
import { CourseProgressBar } from "@/app/ui/spaces/progress-bar";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default async function Page({params}: {
    params: Promise<{ course_id: number }>
  }) {

    const course_id = (await params).course_id;

    const course = await fetchSingleSpace(course_id);

    if (!course) {
        return (
            <div>No Course data</div>
        )
    }
console.log(course);
    const percent_complete = Number((course?.course_percent_completed * 100).toFixed(0));
    const { name, total_lesson_count, total_lessons_completed } = course;
    
    return (
        <div>
            <h3 className="text-3xl md:text-3xl mb-4">{name}</h3>
            
            <div className="my-8 p-8">
                <CourseProgressBar value={percent_complete} complete={total_lessons_completed} total={total_lesson_count} />
            </div>

            <div>
                <h4 className="text-xl md:text-xl mb-4"> Course Content </h4>

                <CourseSections course_id={course_id} course_sections={course.course_sections} />
                    {/* End Accordian */}
            </div>
        </div>
    );
}


// {/* <div id="accordion-collapse" data-accordion="collapse" className="rounded-md" >

// {course.course_sections.map((section, i) => {
//      return (
//         <div key={i}>
//         {/* border-gray-200 */}
//   <h2 id="accordion-collapse-heading-1" className="border-b border-gray-200 bg-gray-200">
//     <button 
//         type="button" 
//         // rounded-t-xl 
//         className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3" 
//         data-accordion-target="#accordion-collapse-body-1" 
//         aria-expanded="true" 
//         aria-controls="accordion-collapse-body-1"
//     >
//       <span>{section.section_name}</span>
//       <svg 
//         data-accordion-icon 
//         className="w-3 h-3 rotate-180 shrink-0" 
//         aria-hidden="true" 
//         xmlns="http://www.w3.org/2000/svg" 
//         fill="none" 
//         viewBox="0 0 10 6"
//       >
//         <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
//       </svg>
//     </button>
//   </h2>
//   <div className="divide-y divide-gray-200">
//   {section.lessons.map((lesson, i) => {
//     console.log('LESSON INFO', lesson)
//         return (
//   <div 
//     key={i}
//     id="accordion-collapse-body-1" 
//     // className="hidden" 
//     className="divider"
//     aria-labelledby="accordion-collapse-heading-1"
//   >
//     <div className="p-5 flex justify-between">
//       <p>{lesson.name}</p>
//       {lesson.progress.status === 'completed' && <CheckCircleIcon className='h-5 w-5 text-green-400'/>}
//     </div>
//   </div>
//  )})}
//  </div>
//   </div>
//      )}
//     )}
// </div> */}