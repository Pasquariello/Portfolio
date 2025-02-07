'use client'
import { FolderIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";


export function LessonSideBar({children}) {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  
    return (
        <>
            <div className={`"py-1 ${isSideBarOpen && 'mr-6'}`}>
                <FolderIcon className="w-6 h-6" onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
            </div>
                        
                
            <div className={`px-6 border-l max-w-[400px] flex-grow h-full`} hidden={!isSideBarOpen}>
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl md:text-2xl">Files</h2>
                    <XMarkIcon className="w-8 h-8" onClick={() => setIsSideBarOpen(false)}/>
                </div>
                
                {children}

            </div>
        </>
          
    );
  }

