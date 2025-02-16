

import Comments from './comments';
import PostMenu from './post-menu';

export default async function PostsDetails({ loggedInUserCommunityMemberId, selectedSpaceId, post }: { loggedInUserCommunityMemberId?: number, selectedSpaceId?: number, post: any }) {

 
   return (
        <>
            {/* Post Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
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
                {(post.author.community_member_id === loggedInUserCommunityMemberId  && selectedSpaceId) && (
                    <PostMenu 
                        spaceId={selectedSpaceId!} 
                        postId={post.id} 
                    />
                )}
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
        </>
    );
}