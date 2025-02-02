import { CheckCircleIcon } from "@heroicons/react/24/outline";
import Section from "./section";

export default function CourseSections({course_sections}) {

 
  return (
      

    <div id="accordion-collapse" data-accordion="collapse" className="rounded-md" >
      {
        course_sections.map((section, i) => { 
          return <Section section={section} />
        })
      }

    </div>
  )
}