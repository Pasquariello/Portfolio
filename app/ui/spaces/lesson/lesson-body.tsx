import { fetchLessonData } from "@/app/lib/data";
import LessonVideo from "./lesson-video";

export default async function LessonBody({course_id, lesson_id, lessonIndex, lessonCount  }) {
    const lesson = await fetchLessonData(course_id, lesson_id);
    const hasVideo = !!lesson?.featured_media;
    const hasRichText = !!lesson?.rich_text_body;
 
    return (
        <>
            <div className="flex-grow">
                <div className="flex mb-12">
                    <div>
                        <p className="text-sm md:text-sm text-gray-500">Lesson {lessonIndex + 1} of {lessonCount} </p>
                        <h2 className="text-2xl md:text-2xl">{lesson.name}</h2>
                    </div>
                </div>
                <div 
                    // className="flex flex-col h-full justify-center"
                    className="flex flex-col flex-wrap items-center"

                >
                    {
                        hasVideo &&  (
                            <LessonVideo 
                                thumbnail_url={lesson.featured_media.thumbnail_url} 
                                type={lesson.featured_media.type} 
                                provider_url={lesson.featured_media.provider_url} 
                                url={lesson.featured_media.url}
                            />
                        )
                    }

                    <div>
                    
                    {
                        hasRichText && (
                            <div className="mt-12 mb-12 w-full md:w-200">
                            { 
                                lesson?.rich_text_body?.body?.content?.map( (content, i )=> {
                                    return (
                                        <div
                                            key={i}
                                        >
                                            {content?.type === 'heading' && content?.content.map((value, i) => <h3 key={i} className="text-3xl md:text-3xl mb-4">{value?.text}</h3>)}
                                            {content?.type === 'paragraph' && content?.content.map((value, i) => <p key={i} className="text-sm/6 text-gray-900 my-2">{value?.text}</p>)}
                                        </div>
                                    )

                                })
                            }
                            </div>
                        )

                    }
                    </div>
                    
                </div>

               
            </div>
        </>
    )
}