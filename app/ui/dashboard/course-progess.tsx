'use client'
import { ProgressCircleChildren } from "@/app/components/progressCircle";
import Link from "next/link";

export function CourseProgress({
    id,
    name,
    course_percent_completed,
    variant
  }: {
    id: number;
    name: string;
    course_percent_completed: number;
    variant?: 'default' | 'neutral' | 'warning' | 'success' | 'error';
  }) {  
    return (
    <div className="rounded-xl bg-white p-4 shadow-sm  hover:bg-gray-200 hover:cursor-pointer">

      <div className="self-start mb-2 font-medium text-sm">{name}</div>
      <div className=" flex justify-center mb-2">
        <Link
            href={`/dashboard/spaces/${id}`}
        >
            {/* <div className="self-start mb-2 font-medium text-gray-500">{name}</div> */}
            <ProgressCircleChildren 
                value={course_percent_completed} 
                radius={75} 
                variant={variant}
            />
        </Link>
        </div>
    </div>
    );
  }