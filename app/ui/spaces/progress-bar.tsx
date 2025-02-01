// buildCourseDetails

import { ProgressBar } from '@/app/components/progressBar';
import { buildCourseDetails } from '@/app/lib/data';
import { lusitana } from '@/app/ui/fonts';
import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
  } from '@heroicons/react/24/outline';


  

export async function CourseProgressBar({
    value,
    complete,
    total,
  }: {
    value: number; // TODO - type this
    complete: number;
    total: number;
  }) {
  
    return (
        <div>
            <div className="flex justify-between mb-4">
                <p>Completed {complete} of {total} Lessons</p>
                <p>{value}%</p>
            </div>
            <ProgressBar variant="violet" value={value} />
        </div>
    );
  }