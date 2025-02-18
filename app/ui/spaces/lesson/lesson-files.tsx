'use client'
import { DocumentIcon } from "@heroicons/react/24/outline"
// import { fetchLessonFiles } from "@/app/lib/data";
import { useEffect, useState } from "react";


export default function LessonFiles({course_id, lesson_id  }) {
 
    // const files = await fetchLessonFiles(course_id, lesson_id);
    const [files, setFiles] = useState<any>();
    

    const getFiles = async () => {
        // /Users/taylorpasquariello/Cascadian/Circle/nextjs-dashboard/app/api/spaces/[id]/lessons/[lesson_id]/files/routes.js
        const res = await fetch(`/api/spaces/${course_id}/lessons/${lesson_id}/files`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          }
      
        });
        const data = await res.json();
        setFiles(data);
            } 
    
    useEffect(() => {
        getFiles();
    }, [])

    if(!files || !files?.records?.length) {
       return <p> No Files</p>
    }

    return (
        <ul>
            {
                files?.records?.map(file => {
                    return (
                        <li key={file.id}>
                            <div className="flex items-center">
                                <DocumentIcon className="w-5 h-5 mr-2" />
                                <p className="text-md">{file.filename}</p>
                            </div>
                            <p className="text-sm text-gray-500">{ Math.ceil(file.byte_size / 1024)} KB</p>
                        </li>
                    )
                })
            }    
        </ul>
    )
}