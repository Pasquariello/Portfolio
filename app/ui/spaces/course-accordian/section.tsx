'use client'
import { cx } from "@/app/lib/utils";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";

export default function Section({section, course_id}) {
 
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
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


            <div 
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}
            >
                {
                    section.lessons.map((lesson, i) => {
                        return (
                            <div
                                key={lesson.id}
                                className={'bg-white divider [&:not(:last-child)]:border-b hover:bg-blue-50'}

                            >
                            
                                <Link 
                                    href={`/dashboard/spaces/${course_id}/lesson/${lesson.id}`}
                                    key={lesson.id}
                                >
                                        <div className="p-5 flex justify-between">
                                            <p>{lesson.name}</p>
                                            {lesson.progress.status === 'completed' && <CheckCircleIcon className='h-5 w-5 text-green-400'/>}
                                        </div>
                                </Link>
                            </div>
                    )})
                }
            </div>
      </div>
    )



}