'use client'
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Section({section, course_id}) {
 
    const [isOpen, setIsOpen] = useState(true);
      
    return (
        <div>
            {/* border-gray-200 */}
            <h2 id="accordion-collapse-heading-1" className="border-b border-gray-200 bg-gray-200">
                <button 
                    type="button" 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 gap-3" 
                    data-accordion-target="#accordion-collapse-body-1" 
                    aria-expanded="true" 
                    aria-controls="accordion-collapse-body-1"
                >
                    <span>{section.section_name}</span>
                    <svg 
                        data-accordion-icon 
                        className="w-3 h-3 rotate-180 shrink-0" 
                        aria-hidden="true" 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 10 6"
                    >
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                    </svg>
                </button>
            </h2>
            <div className="divide-y divide-gray-200">
                {
                    section.lessons.map((lesson, i) => {
                        console.log('LESSON INFO', lesson)
                        return (
                            <Link 
                                href={`/dashboard/spaces/${course_id}/lesson/${lesson.id}`}
                                key={lesson.lesson_id}
                            >
                                <div 
                                    key={i}
                                    id="accordion-collapse-body-1" 
                                    // className="hidden" 
                                    className={`divider ${isOpen ? 'block' : 'hidden'}`}
                                    aria-labelledby="accordion-collapse-heading-1"
                                >
                                    <div className="p-5 flex justify-between">
                                        <p>{lesson.name}</p>
                                        {lesson.progress.status === 'completed' && <CheckCircleIcon className='h-5 w-5 text-green-400'/>}
                                    </div>
                                </div>
                            </Link>
                    )})
                }
            </div>
        </div>
    )

    // <Link 
    // href={`dashboard/spaces/1776810/lesson/1735200`}
    //  key={section.section_id}>


}