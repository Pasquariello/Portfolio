import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';
  import { lusitana } from '@/app/ui/fonts';
  import { fetchCoursesWithDetails } from '@/app/lib/data';
import { ProgressBar } from '@/app/components/progressBar';
import { ProgressCircle, ProgressCircleChildren } from '@/app/components/progressCircle';
  
  const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    events: InboxIcon,
  };
  
  export default async function CourseWrapper() {

    // refactor to separate calls per card?
    const courses = await fetchCoursesWithDetails();
 
    
    return (
      <>
  
        {
            courses.map(course => {
                return (
                    <div key={course.id}>
                        <div>{course.name}</div>
                        <ProgressCircleChildren value={course.course_percent_completed * 100}/>
                    </div>
                )
            })
        }
      </>
    );
  }
  
  export function Card({
    title,
    value,
    type,
  }: {
    title: string;
    value: number | string;
    type: 'events' | 'customers' | 'pending' | 'collected';
  }) {
    const Icon = iconMap[type];
  
    return (
      <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
        <div className="flex p-4">
          {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>
        <p
          className={`${lusitana.className}
            truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
        >
          {value}
        </p>
      </div>
    );
  }
  