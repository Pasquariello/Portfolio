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
    
        <Link
            href={`/dashboard/spaces/${id}`}
            className="hover:cursor-pointer"
        >
            <div>{name}</div>
            <ProgressCircleChildren 
                value={course_percent_completed} 
                radius={75} 
                variant={variant}
            />
        </Link>
    );
  }