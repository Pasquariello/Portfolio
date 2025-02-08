import { Metadata } from 'next';
import ProfileForm from '@/app/ui/profile/profile-form';
import { fetchMemberInterests, getLoggedInUserCommunityMemberId, fetchAllInterests } from '@/app/lib/data';
import { Interest } from '@/app/lib/types';

export const metadata: Metadata = {
  title: 'Profile',
};

export default async function ProfilePage() {
  const loggedInUserCommunityMemberId = await getLoggedInUserCommunityMemberId();

  const [selectedInterests, allInterests] = await Promise.all([
    fetchMemberInterests(loggedInUserCommunityMemberId?.toString()),
    fetchAllInterests()
  ]);

  return (
    <main className="flex min-h-screen flex-col">
      <h1 className={`mb-4 text-xl md:text-2xl mr-8`}>
        Profile
      </h1>
      <div className="flex flex-col gap-4 md:flex-col md:gap-8">
        <ProfileForm 
          communityMemberId={loggedInUserCommunityMemberId?.toString()} 
          selectedInterests={selectedInterests as number[]}
          allInterests={allInterests as Interest[]}
        />
      </div>
    </main>
  );
} 