'use client'
import { XMarkIcon } from "@heroicons/react/24/outline";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from 'next/navigation'


export function CloseSideBarButton() { 

    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();


    function handleChange() {
        const params = new URLSearchParams(searchParams);
      
        params.delete('sideBar');
        
        replace(`${pathname}?${params?.toString()}`);
      }

      return (
        <XMarkIcon onClick={handleChange} className="w-8 h-8" />
      )
}
