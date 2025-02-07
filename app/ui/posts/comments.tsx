'use client';

import { memo, useState } from 'react';
import { Button } from '@/app/ui/button';
import { Comment } from '@/app/lib/types';
import { createComment } from '@/app/lib/data';

const Comments = memo(({ 
    postId, 
    comments, 
    onCommentAdd 
}: { 
    postId: number, 
    comments: Comment[], 
    onCommentAdd: (postId: number, comment: Comment) => void 
}) => {
    const [newComment, setNewComment] = useState('');

    const handleCreateComment = async () => {
        if (!newComment?.trim()) return;

        try {
            const response = await createComment(postId, {
                comment: { body: newComment }
            });

            onCommentAdd(postId, response);
            setNewComment('');
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };

    return (
        <div className="mt-6 border-t border-gray-100 pt-6">
            <h4 className="font-semibold mb-4 text-gray-900">Comments</h4>
            <div className="space-y-4">
                {comments?.map(comment => (
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

            <div className="mt-4 flex gap-3">
                <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write a comment..."
                    className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    aria-label="Add a comment"
                />
                <Button
                    onClick={handleCreateComment}
                    className="px-6 whitespace-nowrap"
                >
                    Add Comment
                </Button>
            </div>
        </div>
    );
});

Comments.displayName = 'Comments';

export default Comments;