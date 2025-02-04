  import { fetchCoursesWithDetails } from '@/app/lib/data';
// import { VariantProps } from 'tailwind-variants';
import { CourseProgress } from './course-progess';
import Link from 'next/link';
import { PencilIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
  

  export default async function CourseWrapper() {

    // refactor to separate calls per card?
    const courses = await fetchCoursesWithDetails();
    console.log('courses', courses)
    if (!courses) {
        return (
            <div>
                <p className="mt-2 wrap text-md/5 text-gray-500">
                    <Link 
                        href="/dashboard/spaces?type=course"
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >Register</Link> for Courses to see course porgress
                </p>
            </div>
        )
    }

    return (
        <>
            {
                courses.map((course, i) => {
                    const {id, name, course_percent_completed} = course;
                    const variant_list: any = ['default', 'warning', 'success', 'error', 'neutral'];
                    const incrementor = i >= variant_list.length ? i - (variant_list.length * (Math.floor(i /variant_list.length))) : i;
                    const variant =  variant_list[incrementor] || variant_list[0]
                    return (

                        <CourseProgress
                            key={id}
                            id={id}
                            name={name}
                            course_percent_completed={Number((course_percent_completed * 100).toFixed(0))}
                            variant={variant}
                        />
                    )
                })
            }
        </>
    );
  }
  