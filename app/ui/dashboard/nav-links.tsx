'use client';

import {
    UserGroupIcon,
    HomeIcon,
    DocumentDuplicateIcon,
    WrenchScrewdriverIcon,
    UserCircleIcon,
    BellIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect, useState } from 'react';

import { getUnreadCount } from './actions';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
    { name: 'Home', href: '/dashboard', icon: HomeIcon },
    {
        name: 'Events',
        href: '/dashboard/events',
        icon: DocumentDuplicateIcon,
    },
    { name: 'Members', href: '/dashboard/members', icon: UserGroupIcon },
    { name: 'Groups', href: '/dashboard/spaces ', icon: WrenchScrewdriverIcon },
    { name: 'Profile', href: '/dashboard/profile', icon: UserCircleIcon },
    { name: 'Posts', href: '/dashboard/posts', icon: DocumentDuplicateIcon }

];

export default function NavLinks() {
    const pathname = usePathname();

    const [notificationCount, setNotificationCount] = useState(0);

    const getCount = async () => {
        console.log('IN GET COUNT')
        // const res = await fetch(`/api/notifications/count`, {
        //   method: 'GET',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
      
        // });
        const data = await getUnreadCount()
        console.log('data -0-0-0-', data)
        // const data = await res.json();
        // if (data?.new_notifications_count) {
            setNotificationCount(data?.new_notifications_count)
        // }
        console.log('data', data)
      } 
    
      useEffect(() => {
        if (!notificationCount) {
            getCount();
        }
       

        const intervalId = setInterval(() => {
            getCount();
        }, 5000);
    
        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
      }, []);

    return (
        <>
            {links.map((link) => {
                const LinkIcon = link.icon;
                return (
                    <Link
                        key={link.name}
                        href={link.href}
                        className={clsx(
                            'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                            {
                                'bg-sky-100 text-blue-600': pathname === link.href,
                            },
                        )}
                    >
                        <LinkIcon className="w-6" />
                        <p className="hidden md:block">{link.name}</p>
                    </Link>
                );
            })}
            <Link
                href={'/dashboard/notifications'}
                className={clsx(
                    'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
                    {
                        'bg-sky-100 text-blue-600': pathname === '/dashboard/notifications',
                    },
                )}
            >
                <BellIcon className="w-6" />
                <p className="hidden md:block">Notifications</p>
                {notificationCount ? (
                    <div className=" inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 rounded-full -top-2 -end-2 dark:border-gray-900">
                        <p className="">{notificationCount}</p> 
                    </div>
                ): null}
            </Link>
        </>
    );
}
