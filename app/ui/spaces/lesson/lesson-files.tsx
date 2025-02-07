// 'use client'
import { DocumentIcon } from "@heroicons/react/24/outline"
import { fetchLessonFiles } from "@/app/lib/data";
// import { useEffect, useState } from "react";
// import { getLessonFiles } from "../actions";

export default async function LessonFiles({course_id, lesson_id  }) {
    // const [files, setFiles] = useState()
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //           const response = await getLessonFiles(course_id, lesson_id)
    //         //   const jsonData = await response.json();
    //           console.log('jsonData', response)
    //           setFiles(response);
    //         } catch (error) {
    //           console.error('Error fetching data:', error);
    //         }
    //       };
      
    //       fetchData();
    // }, [])

    const files = await fetchLessonFiles(course_id, lesson_id);

    if(!files || !files?.records.length) {
       return <p> No Files</p>
    }

    return (
        <ul className="mt-6">
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