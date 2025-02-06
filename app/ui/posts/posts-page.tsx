'use client';

import { useState, useEffect, memo } from 'react';
import { Post, Comment } from '@/app/lib/types';
import { fetchPosts, createPost, fetchComments, createComment, fetchSpaces } from '@/app/lib/data';
import { Button } from '@/app/ui/button';

// Create a separate component for the post creation form
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
            const newPost = await createPost({
                space_id: spaceId,
                name: postTitle,
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
            });

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

// Create a separate component for comments section
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

export default function PostsPage() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [spaces, setSpaces] = useState<any[]>([]);
    const [selectedSpaceId, setSelectedSpaceId] = useState<number | null>(null);
    const [loading, setLoading] = useState(true);
    const [commentsMap, setCommentsMap] = useState<Record<number, Comment[]>>({});

    useEffect(() => {
        const loadSpaces = async () => {
            try {
                const spacesData = await fetchSpaces();
                setSpaces(spacesData);
                if (spacesData?.length > 0) {
                    setSelectedSpaceId(spacesData[0].id);
                }
            } catch (error) {
                console.error('Error loading spaces:', error);
            }
        };
        loadSpaces();
    }, []);

    useEffect(() => {
        if (selectedSpaceId) {
            loadPosts(selectedSpaceId);
        }
    }, [selectedSpaceId]);

    const loadPosts = async (spaceId: number) => {
        try {
            setLoading(true);
            const response = await fetchPosts(spaceId);
            setPosts(response.records);

            const commentsPromises = response.records.map(post => fetchComments(post.id));
            const commentsResponses = await Promise.all(commentsPromises);

            const newCommentsMap: Record<number, Comment[]> = {};
            commentsResponses.forEach((response, index) => {
                const postId = response.records[0]?.post_id;
                if (postId) {
                    newCommentsMap[postId] = response.records;
                }
            });
            setCommentsMap(newCommentsMap);
        } catch (error) {
            console.error('Error loading posts:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleNewPost = (newPost: Post) => {
        setPosts(prevPosts => [newPost, ...prevPosts]);
    };

    const handleNewComment = (postId: number, newComment: Comment) => {
        setCommentsMap(prev => ({
            ...prev,
            [postId]: prev[postId] ? [...prev[postId], newComment] : [newComment]
        }));
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gray-50">
                <div className="animate-pulse text-lg text-gray-600">Loading...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h1 className="text-2xl font-semibold text-gray-900 mb-4 sm:mb-0">Community Posts</h1>
                    <div className="w-full sm:w-64">
                        <label htmlFor="space-select" className="block text-sm font-medium text-gray-700 mb-2">
                            Select Space
                        </label>
                        <select
                            id="space-select"
                            value={selectedSpaceId || ''}
                            onChange={(e) => setSelectedSpaceId(Number(e.target.value))}
                            className="block w-full px-3 py-2 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        >
                            {spaces.map((space) => (
                                <option key={space.id} value={space.id}>
                                    {space.name}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Create Post Section */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-8">
                            <CreatePostForm onSubmit={handleNewPost} spaceId={selectedSpaceId} />
                        </div>
                    </div>

                    {/* Posts Feed */}
                    <div className="lg:col-span-2 space-y-6">
                        {posts.map(post => (
                            <div key={post.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                                {/* Post Header */}
                                <div className="flex items-center mb-4">
                                    {post.author.avatar_url && (
                                        <img
                                            src={post.author.avatar_url}
                                            alt={`${post.author.name}'s avatar`}
                                            className="w-12 h-12 rounded-full mr-4 border-2 border-gray-100"
                                        />
                                    )}
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                                        <time className="text-sm text-gray-500" dateTime={post.created_at}>
                                            {new Date(post.created_at).toLocaleDateString()}
                                        </time>
                                    </div>
                                </div>

                                {/* Post Title */}
                                {post.display_title && (
                                    <h2 className="text-xl font-bold mb-4 text-gray-900">
                                        {post.display_title}
                                    </h2>
                                )}

                                {/* Post Content */}
                                <div className="mb-6">
                                    {post.tiptap_body?.body ? (
                                        <div className="prose prose-gray max-w-none">
                                            {post.tiptap_body.body.content.map((content, index) => (
                                                <p key={index} className="text-gray-700">
                                                    {content.text || content.content?.[0]?.text}
                                                </p>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="whitespace-pre-wrap text-gray-700">{post.body_plain_text}</p>
                                    )}
                                </div>

                                <Comments 
                                    postId={post.id}
                                    comments={commentsMap[post.id] || []}
                                    onCommentAdd={handleNewComment}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}