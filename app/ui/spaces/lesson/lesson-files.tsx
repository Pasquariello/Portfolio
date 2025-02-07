import { DocumentIcon } from "@heroicons/react/24/outline"
import { fetchLessonFiles } from "@/app/lib/data";

export default async function LessonFiles({course_id, lesson_id  }) {
    const files = await fetchLessonFiles(course_id, lesson_id);

    if(!files || !files.length) {
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