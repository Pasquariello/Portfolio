import {  titillium, roboto} from '@/app/ui/fonts';
import { TextLoop } from './components/text-loop';
import VerticalNav from './components/vertical_nav';

export default async function Page() {

  return (
    <main className="flex min-h-screen flex-col bg-black ">
      <div className='flex align-center h-screen items-center'>
        <div className='lg:pl-24 w-full'>
            <div className='flex flex-col lg:items-center text-center lg:inline-block' >
              <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light relative`}>Welcome to my profile!</h2>
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
 
 
    </main>
  );
}