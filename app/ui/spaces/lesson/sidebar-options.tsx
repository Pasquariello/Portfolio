'use client'
import { FolderIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { SidebarContext, SidebarDispatchContext } from "../sidebar-context";

export function SideBarOptions() {

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();
    const dispatch = useContext(SidebarDispatchContext);
    const { updateParams } = useContext(SidebarContext);



    // function handleChange(term) {
    //     const params = new URLSearchParams(searchParams);
    //     if (term) {
    //       params.set('sideBar', term);
    //     } else {
    //       params.delete('sideBar');
    //     }
    //     replace(`${pathname}?${params?.toString()}`);
    //   }
  
    return (
        <div className="flex gap-4">
            <div className="inline-block rounded-full hover:bg-black/25 p-2">
                <FolderIcon 
                  className="w-6 h-6" 
                  onClick={() => {
                    updateParams('files')
                    dispatch({
                      type: 'open',
                      text: 'files',
                    }); 
                    // handleChange('files')
                  }} 
                />
            </div>
            <div className="inline-block rounded-full hover:bg-black/25 p-2">
                <ListBulletIcon 
                  className="w-6 h-6" 
                  onClick={() => {
                    updateParams('lessons')

                    dispatch({
                      type: 'open',
                      text: 'lessons',
                    }); 
                    // handleChange('lessons')
                  }} 
                />
            </div>

        </div>
  
    );
  }

