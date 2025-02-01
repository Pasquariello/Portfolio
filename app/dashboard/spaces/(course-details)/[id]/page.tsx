import { fetchSingleSpace } from "@/app/lib/data";
import { CourseProgressBar } from "@/app/ui/spaces/progress-bar";

export default async function Page({params}: {
    params: Promise<{ id: number }>
  }) {

    const course_id = (await params).id;

    const course = await fetchSingleSpace(course_id);

    const percent_complete = Number((course?.course_percent_completed * 100).toFixed(0));
    return (
        <div>
            Course Details Page

            <CourseProgressBar value={percent_complete} />

            <div>
                Course Content

                <div>
                    {course.course_sections.map(section => {
                        return (
                            <div
                                key={section.section_id}
                            >
                                <p>{section.section_name}</p>

                                {section.lessons.map((lesson, i) => {
                                    return (
                                        <div key={i}>
                                            lesson name here
                                        </div>
                                    )
                                })}
                            </div>
                        )
                    })}
                </div>

                { /* Start Accordian */}




<div id="accordion-collapse" data-accordion="collapse">
  <h2 id="accordion-collapse-heading-1">
    <button 
        type="button" 
        className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl 
          
            gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
      <span>What is Flowbite?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div 
    id="accordion-collapse-body-1" 
    // className="hidden" 
    aria-labelledby="accordion-collapse-heading-1"
  >
    <div className="p-5 border border-b-0 border-gray-200">
      <p className="mb-2 text-gray-500">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
      <p className="text-gray-500">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" className="text-blue-600   hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200         gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Is there a Figma file available?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" 
//   className="hidden" 
  aria-labelledby="accordion-collapse-heading-2">
    <div className="p-5 border border-b-0 border-gray-200  ">
      <p className="mb-2 text-gray-500  ">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
      <p className="text-gray-500  ">Check out the <a href="https://flowbite.com/figma/" className="text-blue-600   hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200       gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>What are the differences between Flowbite and Tailwind UI?</span>
      <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" 
//   className="hidden" 
  aria-labelledby="accordion-collapse-heading-3">
    <div className="p-5 border border-t-0 border-gray-200  ">
      <p className="mb-2 text-gray-500  ">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
      <p className="mb-2 text-gray-500  ">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
      <p className="mb-2 text-gray-500  ">Learn more about these technologies:</p>
      <ul className="ps-5 text-gray-500 list-disc  ">
        <li><a href="https://flowbite.com/pro/" className="text-blue-600   hover:underline">Flowbite Pro</a></li>
        <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600   hover:underline">Tailwind UI</a></li>
      </ul>
    </div>
  </div>
</div>








                {/* End Accordian */}
            </div>
        </div>
    );
}