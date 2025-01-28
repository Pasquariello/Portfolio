import { RevenueChartSkeleton } from "@/app/ui/skeletons";
import SpaceList from "@/app/ui/spaces/spaceList";
import Image from "next/image";
import { Suspense } from "react";

export default async function Page({searchParams}) {

  const searchMe = await searchParams;
  const search = searchMe.search;
  console.log('search ===', search)

  return (
    <div>
        
        <h1 className={`mb-4 text-xl md:text-2xl`}>
          Navigate your Groups
        </h1>
        <div className="flex">
          <div className="mr-8 w-3/5">
            <p className="text-md/5 text-gray-500">Welcome to our page highlighting the programming communities our students and instructors belong to! Here, you'll discover the various groups that foster collaboration, learning, and growth within the world of coding. These communities offer a supportive environment where learners connect with peers, exchange ideas, and engage in discussions about the latest technologies and best practices. From local coding meetups to global developer forums, our members are part of a diverse network that enhances their programming journey. Each group plays an important role in providing mentorship, hands-on experience, and real-world insights, helping our students stay at the forefront of the tech industry. Browse through the different communities to see where our learners and instructors are actively participating, learning, and growing together!</p>
          </div>

          <div className="image-container">
      <Image 
      src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 alt="My Image" width={500} height={300} />
      <div className="image-gradient" />
    </div>
          {/* <Image 
            alt="programming"
            width={400}
            height={400}
            src="https://images.unsplash.com/photo-1523800503107-5bc3ba2a6f81?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          /> */}
          {/* <MemberSearch /> */}
      
        </div>
        <Suspense fallback={<RevenueChartSkeleton />}> 
          <SpaceList />
        </Suspense>
      
  </div>
  );
}