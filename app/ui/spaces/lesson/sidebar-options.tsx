'use client'
import { FolderIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation'

export function SideBarOptions() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    function handleChange(term) {
        const params = new URLSearchParams(searchParams);
        if (term) {
          params.set('sideBar', term);
        } else {
          params.delete('sideBar');
        }
        replace(`${pathname}?${params?.toString()}`);
      }
  
    return (
        <div className="flex gap-4">
            <div className="inline-block rounded-full hover:bg-black/25 p-2">
                <FolderIcon className="w-6 h-6" onClick={() => handleChange('files')} />
            </div>
            <div className="inline-block rounded-full hover:bg-black/25 p-2">
                <ListBulletIcon className="w-6 h-6" onClick={() => handleChange('lessons')} />
            </div>

        </div>
  
    );
  }

