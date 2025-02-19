'use client';

import { useRouter } from "next/navigation";


export default function PressableRow({children, url}) {

    const router = useRouter()
    return (
        <tr className="bg-white border-b border-gray-200 hover:bg-blue-50" onClick={(e) =>  {
            e.preventDefault();
            e.stopPropagation();
            router.push(url)
        }}>
            {children}
        </tr>
    )
}

