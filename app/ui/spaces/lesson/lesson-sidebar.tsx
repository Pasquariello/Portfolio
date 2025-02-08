import { SideBarOptions } from "./sidebar-options";
import LessonFiles from "./lesson-files";
import { CloseSideBarButton } from "./close-sidebar-button";
import { Suspense } from "react";


export function LessonSideBar({sideBarTerm, course_id, lesson_id}) {
  
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
    // TODO - figure out <></>
    const  body = displayOptions[sideBarTerm]?.body || <></>;

    return (
        <>
            <div className={`py-1 ${sideBarTerm && 'mr-6'}`}>
                <SideBarOptions />
            </div>
                        
                
            <div 
            className={`px-6 flex-grow h-full transition-all duration-500 ease-in-out ${sideBarTerm ? 'max-w-[400px] w-[400px] opacity-100 border-l' : 'max-w-0 w-0 opacity-0 border-l/0'}`}
            // className={`px-6 border-l max-w-[400px] w-[400px] flex-grow h-full`} hidden={!sideBarTerm}
            >
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl md:text-2xl">{title}</h2>
                   <CloseSideBarButton />
                </div>
                {/* TODO - add loading fallbacks */}
                <Suspense 
                    key={sideBarTerm}
                    fallback={<div>Loading...</div>}
                >
                    { body }
                </Suspense>

            </div>
        </>
          
    );
  }

