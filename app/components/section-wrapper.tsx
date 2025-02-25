import { titillium } from "../ui/fonts";

export default function SectionWrapper ({children, id}) {

  const props =  {...(id ? {id} : {})}

  return (
    <div className={`min-h-screen  h-full  px-4 py-12 lg:pl-12 w-full md:w-4/5 lg:3/5 xl:w-8/9 flex flex-col items-stretch`} {...props}>
        {/* <div className='lg:pl-12 w-full md:w-4/5 lg:3/5 xl:w-8/9 h-full'> */}
            {children}
        {/* </div> */}
    </div>
  );
}
    