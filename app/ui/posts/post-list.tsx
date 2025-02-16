

import { fetchPosts } from '@/app/lib/data';
import Comments from './comments';
import PostMenu from './post-menu';
import PostsDetails from './post-details';

export default async function PostsList({ loggedInUserCommunityMemberId, selectedSpaceId }: { loggedInUserCommunityMemberId: number, selectedSpaceId: number }) {

    const posts = selectedSpaceId && await fetchPosts(selectedSpaceId);
        console.log('post page', posts)
    if (!posts || !posts.records.length) {
        return <div>No Posts</div>
    }

    return (
    <div className="lg:col-span-2 space-y-6">

        {posts?.records?.map(post => (
            <div key={post.id} id={String(post.id)} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md">
                <PostsDetails post={post} loggedInUserCommunityMemberId={loggedInUserCommunityMemberId} selectedSpaceId={selectedSpaceId} />


                <Comments postId={post.id} />
            </div> 
            // <PostsDetails post={post} loggedInUserCommunityMemberId={loggedInUserCommunityMemberId} selectedSpaceId={selectedSpaceId} />
        ))}
    </div>
       
    );
}