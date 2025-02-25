import { titillium } from "../ui/fonts";

export default function SectionTitle ({value}) {


  return (
    <h1 className={`${titillium.className} self-start text-5xl md:text-8xl mt-4 mb-4 text-[#f139bb] font-extrabold lg:tracking-[50]`}>
      {value.toUpperCase()}
      <div className='h-[1px] bg-white my-4'/>
    </h1>
  );
}
    