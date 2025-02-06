'use client';

import { useState, useEffect } from 'react';
import { Post, Comment } from '@/app/lib/types';
import { fetchPosts, createPost, fetchComments, createComment } from '@/app/lib/data';
import { Button } from '@/app/ui/button';

// Assuming we have one space for now
const SPACE_ID = 1558609; // Replace with your actual space ID

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [newPostContent, setNewPostContent] = useState('');
    const [commentsMap, setCommentsMap] = useState<Record<number, Comment[]>>({});
    const [newComments, setNewComments] = useState<Record<number, string>>({});
    console.log(posts);
    useEffect(() => {
        loadPosts();
    }, []);

    const loadPosts = async () => {
        try {
            setLoading(true);
            const response = await fetchPosts(SPACE_ID);
            setPosts(response.records);

            // Pre-fetch comments for all posts
            const commentsPromises = response.records.map(post => fetchComments(post.id));
            const commentsResponses = await Promise.all(commentsPromises);

            const newCommentsMap: Record<number, Comment[]> = {};
            commentsResponses.forEach((response, index) => {
                newCommentsMap[response.records[0]?.post_id] = response.records;
            });
            setCommentsMap(newCommentsMap);
        } catch (error) {
            console.error('Error loading posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreatePost = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!newPostContent.trim()) return;

        try {
            const newPost = await createPost({
                space_id: SPACE_ID,
                body: newPostContent,
                is_comments_enabled: true,
                is_liking_enabled: true
            });

            setPosts(prevPosts => [newPost, ...prevPosts]);
            setNewPostContent('');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleCreateComment = async (postId: number) => {
        const commentContent = newComments[postId];
        if (!commentContent?.trim()) return;

        try {
            const newComment = await createComment(postId, {
                comment: { body: commentContent }
            });

            setCommentsMap(prev => ({
                ...prev,
                [postId]: [...(prev[postId] || []), newComment] as Comment[]
            }));
            setNewComments(prev => ({
                ...prev,
                [postId]: ''
            }));
        } catch (error) {
            console.error('Error creating comment:', error);
        }
    };

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>;
    }

    return (
        <div className="max-w-2xl mx-auto p-4">
            {/* Create Post Form */}
            <form onSubmit={handleCreatePost} className="mb-8 bg-white p-4 rounded-lg shadow">
                <textarea
                    value={newPostContent}
                    onChange={(e) => setNewPostContent(e.target.value)}
                    placeholder="What's on your mind?"
                    className="w-full p-2 border rounded-lg mb-2 min-h-[100px]"
                />
                <Button type="submit">Post</Button>
            </form>

            {/* Posts List */}
            <div className="space-y-6">
                {posts.map(post => (
                    <div key={post.id} className="bg-white p-4 rounded-lg shadow">
                        {/* Post Header */}
                        <div className="flex items-center mb-4">
                            {post.author.avatar_url && (
                                <img
                                    src={post.author.avatar_url}
                                    alt={post.author.name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                            )}
                            <div>
                                <h3 className="font-semibold">{post.author.name}</h3>
                                <p className="text-sm text-gray-500">
                                    {new Date(post.created_at).toLocaleDateString()}
                                </p>
                            </div>
                        </div>

                        {/* Post Title */}
                        {post.display_title && (
                            <h2 className="text-xl font-bold mb-4">
                                {post.display_title}
                            </h2>
                        )}

                        {/* Post Content */}
                        <div className="mb-4">
                            { post.tiptap_body?.body ? (
                                <div className="prose max-w-none">
                                    {post.tiptap_body.body.content.map((content, index) => (
                                        <p key={index}>{content.text || content.content?.[0]?.text}</p>
                                    ))}
                                </div>
                            ) : (
                                <p className="whitespace-pre-wrap">{post.body_plain_text}</p>
                            )}
                        </div>

                        {/* Comments Section */}
                        <div className="mt-4 border-t pt-4">
                            <h4 className="font-semibold mb-2">Comments</h4>

                            {/* Comments List */}
                            <div className="space-y-3">
                                {commentsMap[post.id]?.map(comment => (
                                    <div key={comment.id} className="bg-gray-50 p-2 rounded">
                                        <div className="flex items-center mb-1">
                                            <span className="font-medium mr-2">{comment.author.name}</span>
                                            <span className="text-sm text-gray-500">
                                                {new Date(comment.created_at).toLocaleDateString()}
                                            </span>
                                        </div>
                                        <p>{comment.body_text}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Add Comment Form */}
                            <div className="mt-3 flex gap-2">
                                <input
                                    type="text"
                                    value={newComments[post.id] || ''}
                                    onChange={(e) => setNewComments(prev => ({
                                        ...prev,
                                        [post.id]: e.target.value
                                    }))}
                                    placeholder="Write a comment..."
                                    className="flex-1 p-2 border rounded"
                                />
                                <Button
                                    onClick={() => handleCreateComment(post.id)}
                                >
                                    Comment
                                </Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
