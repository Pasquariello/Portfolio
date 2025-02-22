import {  titillium, roboto} from '@/app/ui/fonts';
import { TextLoop } from './components/text-loop';
import VerticalNav from './components/vertical_nav';

export default async function Page() {

  return (
    <main className="flex min-h-screen h-screen flex-col">
      <div className='flex h-full items-center'>
        <div className='lg:pl-24 w-full'>
            <div className='lg:inline-block text-center' >
              <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light text-center lg:text-left`}>Welcome to my profile!</h2>
              <h1 className={`${titillium.className} text-white text-6xl sm:text-8xl mt-4 mb-8`}>Taylor Pasquariello</h1>
              <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light relative`}><TextLoop/></h2>
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

    {/* <div className="h-400"></div> */}
       {/* <p className='text-black'> hello</p> */}
 
    </main>
  );
}