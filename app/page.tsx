

import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana, titillium, roboto} from '@/app/ui/fonts';
import Image from 'next/image';
import { TextLoop } from './components/text-loop';
import VerticalNav from './components/vertical_nav';

export default async function Page() {
  const texts = ["Software Developer", "Cyclist", "Frontend", "Backend", "Traveler", "Forever Learning", "Photographer", "React", "Node", "NextJS", "Bird Watcher"];

  return (
    <main className="flex min-h-screen flex-col ">
      <div className='flex align-center h-screen items-center -2'>
      <div className='pl-24'>
          <div className='inline-block relative' >
            <h2 className={`${roboto.className} text-white text-4xl font-light relative`}>Welcome to my profile!</h2>
            <h1 className={`${titillium.className} text-white text-8xl mt-4 mb-8`}>Taylor Pasquariello</h1>
            <div className={`${roboto.className} text-white text-4xl font-light relative`}><TextLoop/></div>
          </div>
      </div>

  
        <VerticalNav/>
      </div>


      <video 
        autoPlay 
        muted 
        loop
        style={{
          objectFit: 'cover', 
          width: '100%',
          height: '100%',
          position: 'absolute',
          zIndex: -1,
        }}
      >         
        <source src="./jellies.mp4" type="video/mp4"/>       
      </video>

    <div className="h-400"></div>
 
 
    </main>
  );
}