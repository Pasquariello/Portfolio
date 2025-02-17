import NotificationsList from '@/app/ui/notifications/notifications_list';
import { Metadata } from 'next';
import { Suspense } from 'react';
export const metadata: Metadata = {
  title: 'Notifications',
};

export default async function Page() {
  
  return (
    <main className="">
      <h1 className={`mb-4 text-xl md:text-3xl mr-8 mb-20`}>
        Notifications
      </h1>

      <div className="flex justify-center">
        <Suspense fallback={<div>Loading...</div>}>
          <NotificationsList />
        </Suspense>
      </div>
    </main>
  );
}
