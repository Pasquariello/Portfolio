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
    <div className="rounded-xl bg-white p-4 shadow-sm flex justify-center hover:bg-gray-200 hover:cursor-pointer">
        <Link
            href={`/dashboard/spaces/${id}`}
        >
            <div>{name}</div>
            <ProgressCircleChildren 
                value={course_percent_completed} 
                radius={75} 
                variant={variant}
            />
        </Link>
    </div>
    );
  }