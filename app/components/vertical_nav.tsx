import { HomeIcon, UserGroupIcon, CalendarIcon, WrenchScrewdriverIcon, UserCircleIcon, DocumentDuplicateIcon} from "@heroicons/react/24/outline";

export default function VerticalNav() {

    const links = [
        { name: 'About', href: '/dashboard', icon: HomeIcon },
        { name: 'Resume', href: '/dashboard/members', icon: UserGroupIcon },
        { name: 'Tech', href: '/dashboard/spaces ', icon: WrenchScrewdriverIcon },
        { name: 'Blog', href: '/dashboard/profile', icon: UserCircleIcon },
        { name: 'For Fun', href: '/dashboard/posts', icon: DocumentDuplicateIcon }
    
    ];

    return (
        // <div className="-my-6">

        //     {/* <!-- Item #1 --> */}
        //     <div className="relative pl-8 sm:pl-32 py-6 group">
        //         {/* <!-- Purple label --> */}
        //         <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The origin</div>
        //         {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        //         <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        //             {/* <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2020</time> */}
        //             <div className="text-xl font-bold text-slate-900">Acme was founded in Milan, Italy</div>
        //         </div>
        //         {/* <!-- Content --> */}
        //         {/* <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div> */}
        //     </div>
            
        //     {/* <!-- Item #2 --> */}
        //     <div className="relative pl-8 sm:pl-32 py-6 group">
        //         {/* <!-- Purple label --> */}
        //         <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The milestone</div>
        //         {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        //         <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        //             {/* <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</time> */}
        //             <div className="text-xl font-bold text-slate-900">Reached 5K customers</div>
        //         </div>
        //         {/* <!-- Content --> */}
        //         {/* <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div> */}
        //     </div>
            
        //     {/* <!-- Item #3 --> */}
        //     <div className="relative pl-8 sm:pl-32 py-6 group">
        //         {/* <!-- Purple label --> */}
        //         <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The acquisitions</div>
        //         {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        //         <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        //             {/* <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2022</time> */}
        //             <div className="text-xl font-bold text-slate-900">Acquired various companies, inluding Technology Inc.</div>
        //         </div>
        //         {/* <!-- Content --> */}
        //         {/* <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div> */}
        //     </div>
            
        //     {/* <!-- Item #4 --> */}
        //     <div className="relative pl-8 sm:pl-32 py-6 group">
        //         {/* <!-- Purple label --> */}
        //         <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">The IPO</div>
        //         {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
        //         <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
        //             {/* <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2023</time> */}
        //             <div className="text-xl font-bold text-slate-900">Acme went public at the New York Stock Exchange</div>
        //         </div>
        //         {/* <!-- Content --> */}
        //         {/* <div className="text-slate-500">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div> */}
        //     </div>

        // </div>



<ol className="fixed right-40 border-s border-gray-200 dark:border-gray-700"> 
    {
        links.map(link => {
            return (
                <li 
                    key={link.name}
                    className="flex ms-6 h-30 last:h-0"
                >
                    <h2 className="ml-2 text-white">{link.name}</h2>
            
                    <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-fuchsia-900/35 dark:bg-fuchsia-500">
                        {/* <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                        </svg> */}
                    </span>
                </li>
            )
        })
    }             
</ol>




    )
}
