import { Metadata } from 'next';
import PostsPage from '@/app/ui/posts/posts-page';

export const metadata: Metadata = {
  title: 'Posts',
};

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex flex-col gap-4 md:flex-col md:gap-8">
        <h1 className="text-2xl font-bold">Posts</h1>
        <PostsPage />
      </div>
    </main>
  );
}
