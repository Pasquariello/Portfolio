import Section from "./section";

export default function CourseSections({course_id, course_sections}) {

 
  return (
      

    <div id="accordion-collapse" data-accordion="collapse" className="rounded-md" >
      {
        course_sections.map((section, i) => { 
          return (
            <Section key={i} section={section} course_id={course_id}/>
          )
        })
      }

    </div>
  )
}