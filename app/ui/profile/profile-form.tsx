'use client';

import { useState } from 'react';
import clsx from 'clsx';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { Interest } from '@/app/lib/types';
import { updateUserInterests } from '@/app/lib/actions';

interface ProfileFormProps {
  communityMemberId: string;
  selectedInterests: number[];
  allInterests: Interest[];
}

export default function ProfileForm({ communityMemberId, selectedInterests, allInterests }: ProfileFormProps) {
  const [selected, setSelected] = useState<number[]>(selectedInterests);
  const [isSaved, setIsSaved] = useState(true);

  const handleInterestToggle = (interestId: number) => {
    setIsSaved(false);
    setSelected((prev) =>
      prev.includes(interestId)
        ? prev.filter((id) => id !== interestId)
        : [...prev, interestId]
    );
  };

  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      if (!communityMemberId) {
        throw new Error('No community member ID found');
      }
      const result = await updateUserInterests(communityMemberId, selected);
      if (result.success) {
        setIsSaved(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-lg bg-gray-50 p-4 md:p-6">
        {/* Profile Info */}
        {/* <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Profile Information</h2>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium">Community Member ID</label>
              <div className="mt-1 p-2 bg-white rounded border">
                {communityMemberId}
              </div>
            </div>
          </div>
        </div> */}

        {/* Interests Section */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Your Interests</h2>
          <p className="text-sm text-gray-600 mb-4">
            Select the topics that interest you the most
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {allInterests.map((interest) => (
              <button
                key={interest.interest_id}
                type="button"
                onClick={() => handleInterestToggle(interest.interest_id)}
                className={clsx(
                  'p-3 rounded-lg border text-left transition-all relative',
                  'hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500',
                  {
                    'bg-blue-50 border-blue-500': selected.includes(interest.interest_id),
                    'bg-white border-gray-200': !selected.includes(interest.interest_id),
                  }
                )}
              >
                <div className="font-medium">{interest.name}</div>
                {selected.includes(interest.interest_id) && (
                  <div className="absolute top-2 right-2">
                    <CheckCircleIcon className="h-6 w-6 text-blue-500" />
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>

        <button
        type="submit"
        disabled={isSaved}
        className={clsx(
          "rounded-lg px-6 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 mt-8",
          {
            "bg-blue-500 hover:bg-blue-600": !isSaved,
            "bg-gray-400": isSaved
          }
        )}
      >
        {isSaved ? 'Saved' : 'Save Changes'}
      </button>
      </div>

     
    </form>
  );
}