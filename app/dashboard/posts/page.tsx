import { Metadata } from 'next';
import { getLoggedInUserCommunityMemberId } from '@/app/lib/data';
import { Suspense } from 'react';
import SpacesDropdown from '@/app/ui/posts/spaces-dropdown';
import CreatePostForm from '@/app/ui/posts/create-post-form';
import PostsList from '@/app/ui/posts/post-list';
export const metadata: Metadata = {
  title: 'Posts',
};

export default async function Page({searchParams}) {
  
  const loggedInUserCommunityMemberId = await getLoggedInUserCommunityMemberId();
  const selectedSpaceId = (await searchParams)?.selectedSpace

  return (
    <main className="flex min-h-screen flex-col">
      {/* <div className='flex'>  */}
      <h1 className={`mb-4 text-xl md:text-3xl mr-8`}>
        Posts
      </h1>

      {/* TODO update fallback with skeleton component */}
      <Suspense fallback={<div>Loading...</div>}>
        <SpacesDropdown />
      </Suspense>
      {/* </div> */}

      <div className="flex flex-col gap-4 md:flex-col md:gap-8">

      <div className="lg:col-span-2">
          <CreatePostForm
            spaceId={selectedSpaceId} 
          />
      </div>


      <Suspense 
        // key={selectedSpaceId}
        fallback={<div className='w-full h-[300px] flex-grow bg-blue-50'>Loading...</div>}
      >
        {
          selectedSpaceId && (
              <PostsList loggedInUserCommunityMemberId={loggedInUserCommunityMemberId} selectedSpaceId={selectedSpaceId}/>
          )
        }
      </Suspense>

        
        {/* <PostsPage loggedInUserCommunityMemberId={loggedInUserCommunityMemberId} selectedSpaceId={selectedSpaceId}/> */}
      </div>
    </main>
  );
}
