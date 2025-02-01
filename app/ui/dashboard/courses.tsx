import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/fonts';
  import { fetchCoursesWithDetails } from '@/app/lib/data';
import { ProgressBar } from '@/app/components/progressBar';
import { ProgressCircle, ProgressCircleChildren, progressCircleVariants } from '@/app/components/progressCircle';
import { VariantProps } from 'tailwind-variants';
  
  const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    events: InboxIcon,
  };
  
  export default async function CourseWrapper() {

    // refactor to separate calls per card?
    const courses = await fetchCoursesWithDetails();
    // const courses =  [
    //     {
    //         id: 1,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 2,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 3,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 4,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 5,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 6,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 7,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 8,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 9,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 10,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 11,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 12,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },

    //     {
    //         id: 13,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 14,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 15,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 16,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 17,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 18,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 19,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 20,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 21,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 22,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    //     {
    //         id: 23,
    //         name: 'Test 1',
    //         course_percent_completed: 0.34
    //     },
    // ]
    
    return (
      <div
        className='grid grid-cols-4 gap-6 '
      >
  
        {
            courses.map((course, i) => {
                const {id, name, course_percent_completed} = course;
                const variant_list: any = ['default', 'neutral', 'warning', 'success', 'error'];
                const incrementor = i >= variant_list.length ? i - (variant_list.length * (Math.floor(i /variant_list.length))) : i;
                const variant =  variant_list[incrementor] || variant_list[0]
                return (
                   <CourseProgress
                        key={id}
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
  
  export function CourseProgress({
    name,
    course_percent_completed,
    variant
  }: {
    name: string;
    course_percent_completed: number;
    variant?: 'default' | 'neutral' | 'warning' | 'success' | 'error';
  }) {  
    return (
        <div>
            <div>{name}</div>
            <ProgressCircleChildren 
                value={course_percent_completed} 
                radius={75} 
                variant={variant}
            />
        </div>
    );
  }
  