'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation'
import { useContext } from "react";
import { SidebarDispatchContext } from "../sidebar-context";


export function CloseSideBarButton() { 

    // const searchParams = useSearchParams();
    // const pathname = usePathname();
    // const { replace } = useRouter();

    const dispatch = useContext(SidebarDispatchContext);

    // function handleChange() {
    //     const params = new URLSearchParams(searchParams);
      
    //     params.delete('sideBar');
        
    //     replace(`${pathname}?${params?.toString()}`);
    //   }

      return (
        <XMarkIcon 
          onClick={() => {
            dispatch({
              type: 'close',
              // isOpen: false,
              // text: null
            })
          }
            // handleChange
          } 
          className="w-8 h-8 rounded-full hover:bg-black/25" 
        />
      )
}
