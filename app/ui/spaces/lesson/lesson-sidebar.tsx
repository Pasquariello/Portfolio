'use client'
import { SideBarOptions } from "./sidebar-options";
import LessonFiles from "./lesson-files";
import { CloseSideBarButton } from "./close-sidebar-button";
import { Suspense, useContext } from "react";
import { SidebarContext } from "../sidebar-context";


export function LessonSideBar({course_id, lesson_id}) {
    const sideBarSettings = useContext(SidebarContext);
    
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
    
    const title = displayOptions[sideBarSettings.text]?.title || '';
    // TODO - figure out <></>
    const  body = displayOptions[sideBarSettings.text]?.body || <></>;

    return (
        <>
            <div className={`py-1 ${sideBarSettings.isOpen && 'mr-6'}`}>
                <SideBarOptions />
            </div>
                        
                
            <div 
            className={`px-6 flex-grow h-full transition-all duration-500 ease-in-out ${sideBarSettings.isOpen ? 'max-w-[400px] w-[400px] opacity-100 border-l' : 'max-w-0 w-0 opacity-0 border-l/0'}`}
            // className={`px-6 border-l max-w-[400px] w-[400px] flex-grow h-full`} hidden={!sideBarTerm}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-2xl">{title}</h2>
                   <CloseSideBarButton />
                </div>
                {body}
                {/* TODO - add loading fallbacks */}
                {/* <Suspense 
                    // key={sideBarTerm}
                    fallback={<div>Loading...</div>}
                > */}
                {/* </Suspense> */}

            </div>
        </>
          
    );
  }

