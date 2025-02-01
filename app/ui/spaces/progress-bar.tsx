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
    value
    // title,
    // value,
    // type,
  }: {
    value: number // TODO - type this
    // title: string;
    // value: number | string;
    // type?: 'events' | 'customers' | 'pending' | 'collected';
  }) {


  
    return (
        <div>
        <div className="flex justify-between">
            <p>0 Completed of 6 Lessons</p>
            <p>0%</p>
        </div>
        <ProgressBar value={value} />
        </div>
    );
  }