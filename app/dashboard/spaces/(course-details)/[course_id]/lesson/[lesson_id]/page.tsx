import { fetchLessonData } from "@/app/lib/data";
import CompleteLesson from "@/app/ui/spaces/lesson/complete-lesson";
import LessonVideo from "@/app/ui/spaces/lesson/lesson-video";

export default async function Page({params}: {
    params: Promise<{ lesson_id: number; course_id: number }>
  }) {

    const lesson_id = (await params).lesson_id;
    const course_id = (await params).course_id;

    const lesson = await fetchLessonData(course_id, lesson_id);
    console.log('BRO', lesson)

// const videoId = new URLSearchParams(new URL(lesson.featured_media.url).search).get("v"); // Extract video ID from URL
// const embedUrl = `${lesson.featured_media.provider_url}/${lesson.featured_media.type}/${videoId}?feature=oembed`;
// const videoUrl = lesson.featured_media.url;
// const imageUrl = lesson.featured_media.thumbnail_url;

// // Build the dynamic embed URL
// const embedlyUrl = `//cdn.embedly.com/widgets/media.html?src=${encodeURIComponent(embedUrl)}&url=${encodeURIComponent(videoUrl)}&image=${encodeURIComponent(imageUrl)}&type=text%2Fhtml`;
    const hasVideo = !!lesson?.featured_media;
    
    return (
        <div>
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
           
            <CompleteLesson course_id={course_id} lesson_id={lesson_id} current_status={lesson.progress.status}/>
        </div>
    );
}
