// 'use client'
import { FolderIcon, ListBulletIcon, XMarkIcon } from "@heroicons/react/24/outline";
// import { useState } from "react";
import { FolderButton } from "./folder-button";
import LessonFiles from "./lesson-files";


export function LessonSideBar({sideBarTerm, course_id, lesson_id}) {
    console.log('sideBarTerm ====', sideBarTerm);
    // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
    const displayOptions = {
        files: {
            title: 'Files',
            body: <LessonFiles course_id={course_id} lesson_id={lesson_id}/>,
        },
        lessons: {
            title: 'Lessons',
            body: <div>List of Lessons here</div>,
        },
    }
    
    const title = displayOptions[sideBarTerm]?.title || '';
    const  body = displayOptions[sideBarTerm]?.body || <></>;


    return (
        <>
            <div className={`flex py-1 ${sideBarTerm && 'mr-6'}`}>
            {/* <div className={`flex py-1 mr-6`}> */}
                {/* RENAME */}
                <FolderButton />
                {/* <FolderIcon className="w-6 h-6" onClick={() => setIsSideBarOpen(!isSideBarOpen)} /> */}
            </div>
                        
                
            <div className={`px-6 border-l max-w-[400px] flex-grow h-full`} hidden={!sideBarTerm}>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl md:text-2xl">{title}</h2>
                    {/* TODO - move into its own component */}
                    <XMarkIcon className="w-8 h-8" 
                    // onClick={() => setIsSideBarOpen(false)}
                    />
                </div>

                {
                   sideBarTerm && displayOptions[sideBarTerm].body
                }

            </div>
        </>
          
    );
  }

