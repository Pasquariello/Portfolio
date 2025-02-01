  import { fetchCoursesWithDetails } from '@/app/lib/data';
import { VariantProps } from 'tailwind-variants';
import { CourseProgress } from './course-progess';
  

  export default async function CourseWrapper() {

    // refactor to separate calls per card?
    const courses = await fetchCoursesWithDetails();

    return (
      <div
        className='grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-6 place-items-center'
      >
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
      </div>
    );
  }
  