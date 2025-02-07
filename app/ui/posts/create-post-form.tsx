'use client';

import { memo, useState } from 'react';
import { Button } from '@/app/ui/button';
import { Post } from '@/app/lib/types';
import { createPost } from '@/app/lib/data';

const CreatePostForm = memo(({ onSubmit, spaceId }: { 
    onSubmit: (post: Post) => void, 
    spaceId: number | null 
}) => {
    const [postTitle, setPostTitle] = useState('');
    const [postContent, setPostContent] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!postContent.trim() || !postTitle.trim() || !spaceId) return;

        try {
            const postData = {
                space_id: spaceId,
                name: postTitle,
                is_liking_enabled: true,
                is_comments_enabled: true,
                tiptap_body: {
                    body: {
                        type: "doc",
                        content: [
                            {
                                type: "paragraph",
                                content: [
                                    {
                                        type: "text",
                                        text: postContent
                                    }
                                ]
                            }
                        ]
                    }
                },
                topics: []
            };

            const newPost = await createPost(postData);
            onSubmit(newPost);
            setPostTitle('');
            setPostContent('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Create a New Post</h2>
            
            {/* Post Title Input */}
            <input
                type="text"
                value={postTitle}
                onChange={(e) => setPostTitle(e.target.value)}
                placeholder="Post Title"
                className="w-full p-3 border border-gray-200 rounded-lg mb-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                aria-label="Post title"
            />

            {/* Post Content Textarea */}
            <textarea
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                placeholder="What's on your mind?"
                className="w-full p-3 border border-gray-200 rounded-lg mb-3 min-h-[120px] focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                aria-label="Post content"
            />
            
            <Button 
                type="submit" 
                className="w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 transition-colors"
                disabled={!postTitle.trim() || !postContent.trim()}
            >
                Create Post
            </Button>
        </form>
    );
});

CreatePostForm.displayName = 'CreatePostForm';
export default CreatePostForm;