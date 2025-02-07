import { Metadata } from 'next';
import PostsPage from '@/app/ui/posts/posts-page';
import { getLoggedInUserCommunityMemberId } from '@/app/lib/data';
export const metadata: Metadata = {
  title: 'Posts',
};

export default async function Page() {
    const loggedInUserCommunityMemberId = await getLoggedInUserCommunityMemberId();
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col gap-4 md:flex-col md:gap-8">
        <h1 className="text-2xl font-bold">Posts</h1>
        <PostsPage loggedInUserCommunityMemberId={loggedInUserCommunityMemberId} />
      </div>
    </main>
  );
}
