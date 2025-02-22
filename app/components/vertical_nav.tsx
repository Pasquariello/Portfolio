'use client'
import { HomeIcon, UserGroupIcon, WrenchScrewdriverIcon, UserCircleIcon, DocumentDuplicateIcon} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRef } from "react";

export default function VerticalNav() {

    const links = [
        { name: 'About', href: '#about', icon: HomeIcon },
        { name: 'Resume', href: '#resume', icon: UserGroupIcon },
        { name: 'Tech', href: '/dashboard/spaces ', icon: WrenchScrewdriverIcon },
        { name: 'Blog', href: '/dashboard/profile', icon: UserCircleIcon },
        { name: 'For Fun', href: '/dashboard/posts', icon: DocumentDuplicateIcon }
    
    ];

    return (
        <ol className="hidden xl:block fixed right-40 border-s border-gray-700"> 
            {
                links.map(link => {
                    return (

                        <Link
                            key={link.name}
                            href={link.href}
                            className="flex ms-6 h-30 last:h-0 hover:underline text-white"
                            // scroll={false}
                            // onClick={() => scrollToSection1(link.href)}
                        >
                        <li 
                           
                            className="flex"
                        >
                            <h2 className="ml-2 text-white ">{link.name}</h2>
                    
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-cyan-900/35 bg-cyan-500 hover:cursor-pointer hover:animate-pulse">
                                {/* <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg> */}
                            </span>
                        </li>
                        </Link>
                    )
                })
            }             
        </ol>
    )
}
