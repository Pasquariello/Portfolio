// 'use client'
import { DocumentIcon } from "@heroicons/react/24/outline"
import { fetchLessonFiles } from "@/app/lib/data";
// import { useEffect, useState } from "react";


export default async function LessonFiles({course_id, lesson_id  }) {
 
    const files = await fetchLessonFiles(course_id, lesson_id);
    // const [files, setFiles] = useState([]);
    

    // const getFiles = async () => {
    //     const res = await fetch(`/api/notifications/count`, {
    //       method: 'GET',
    //       headers: {
    //         'Content-Type': 'application/json'
    //       }
      
    //     });
    //     // const data = await getUnreadCount()
    //     const data = await res.json();
    //     // if (data?.new_notifications_count) {
    //         setNotificationCount(data?.new_notifications_count)
    //     // }
    //     console.log('data', data)
    //   } 
    
    // useEffect(() => {

    // }, [])

    if(!files || !files?.records.length) {
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