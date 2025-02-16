import { CalendarIcon } from '@heroicons/react/24/outline';
import { fetchHomePagePosts } from '@/app/lib/data';
import Link from 'next/link';
import PostsDetails from '../posts/post-details';

export default async function HomePagePosts() {
  const posts = await fetchHomePagePosts(); // Fetch data inside the component
  console.log('posts ====', posts)
  const chartHeight = 350;

  if (!posts || posts.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
      <div className="w-full md:col-span-4"
      >
        <h2 className={`mb-4 text-xl md:text-2xl`}>
          Recent Posts
        </h2>

        <div className="rounded-xl pt-4 h-100 overflow-y-auto">

          <div className="flex flex-col gap-4">
          {posts?.records?.map(post => (
            <a 
              key={post.id} 
              href={`/dashboard/posts?selectedSpace=${post.space.id}#${post.id}`}
            >
              <div
                className="bg-white hover:bg-blue-50 p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md"
              >
                <PostsDetails post={post}  />

              </div>
            </a>
          ))}
          </div>
        </div>

        <div className="flex items-center pb-2 pt-6">
            <CalendarIcon className="h-5 w-5 text-gray-500" />
            <h3 className="ml-2 text-sm text-gray-500 ">Last 3 weeks</h3>
          </div>
      </div>
  );
}
