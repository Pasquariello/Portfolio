import { SideBarOptions } from "./folder-button";
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
            <div className={`flex py-1 ${sideBarTerm && 'mr-6'}`}>
                <SideBarOptions />
            </div>
                        
                
            <div className={`px-6 border-l max-w-[400px] flex-grow h-full`} hidden={!sideBarTerm}>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl md:text-2xl mb-6">{title}</h2>
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

