 

'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';
import { createNewCommentAction } from './actions';
import { Button } from '@/app/ui/button';

export default function CommentActions({postId}) {
  
    const [newComment, setNewComment] = useState('');


    const handleCreateComment = async () => {
        if (!newComment?.trim()) return;
        try {
            const res = await createNewCommentAction({postId, comment: newComment });
            if (res) {
                setNewComment('');
            }
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };


    return (
       <>
            <input
                type="text"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Write a comment..."
                className="flex-1 p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                aria-label="Add a comment"
            />
            <div>
                <Button
                    onClick={handleCreateComment}
                    className="px-6"
                >
                    Add Comment
                </Button>
            </div>
         </>

    )
}