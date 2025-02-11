// import { fetchSpaces } from "@/app/lib/data";
import SpaceDetails from "./spaceDetails";
// import { Button } from "../button";
import { Suspense } from "react";


export default async function SpaceList({type}) {
    // const res = await fetchSpaces();

    // const spaces = !type || type === 'all' ? res : res?.filter(space => space.space_type === type);

    // if (!spaces.length) {
    //     return <p>No Groups</p>
    // }

    return (
        <div className="relative overflow-x-auto mt-8">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 table-fixed">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 w-full">
                    <tr>
                        <th scope="col" className="px-6 py-3 lg:w-115">
                            Space name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Type
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Member
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                <Suspense key={type} fallback={<Skeleton />}>
                    <SpaceDetails type={type} />
                </Suspense>
                </tbody>

            </table>
        </div>
    )
}


const Skeleton = () => {

    return Array.from(Array(10)).map((_, i) => {
        return (
            <tr key={i} className="bg-white border-b border-gray-200 animate-pulse">
                <td scope="row" className="px-6 py-4 font-medium text-gray-900">
                <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                </td>
                <td className="px-6 py-4">
                <div className="h-4 bg-gray-300 rounded w-1/2"></div>
                </td>
                <td className="px-6 py-4">
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </td>
                <td className="px-6 py-4">
                <div className="h-4 bg-gray-300 rounded w-1/3"></div>
                </td>
            </tr>
        )
    })
    
}
