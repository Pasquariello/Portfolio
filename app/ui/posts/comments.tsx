
import { Button } from '@/app/ui/button';
import { Comment} from '@/app/lib/types';
import { createComment, fetchComments } from '@/app/lib/data';
import CommentActions from './comment-actions';


export default async function Comments ({ 
    postId, 
}) {
   
    const comments = await fetchComments(postId);

    return (
        <div className="mt-6 border-t border-gray-100 pt-6">
            <h4 className="font-semibold mb-4 text-gray-900">Comments</h4>
            <div className="space-y-4">
                {comments?.records?.map(comment => (
                    <div key={comment.id} className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                        <div className="flex items-center mb-2">
                            <span className="font-medium text-gray-900 mr-2">{comment.author.name}</span>
                            <time className="text-sm text-gray-500" dateTime={comment.created_at}>
                                {new Date(comment.created_at).toLocaleDateString()}
                            </time>
                        </div>
                        <p className="text-gray-700">{comment.body_text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-4 flex flex-col gap-3">
                <CommentActions postId={postId} />
            </div>
        </div>
    );
}

Comments.displayName = 'Comments';

