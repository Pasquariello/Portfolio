import {  titillium, roboto} from '@/app/ui/fonts';
import { TextLoop } from './components/text-loop';
import VerticalNav from './components/vertical_nav';

export default async function Page() {

  return (
    <main 
    className="flex min-h-screen flex-col"
    >

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


      <div className='flex h-screen items-center'>
        <div className='lg:pl-24 w-full'>
            <div className='lg:inline-block text-center' >
              <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light text-center lg:text-left`}>Welcome to my profile!</h2>
              <h1 className={`${titillium.className} text-white text-6xl sm:text-8xl mt-4 mb-8`}>Taylor Pasquariello</h1>
              <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light relative`}><TextLoop/></h2>
            </div>
        </div>

        <VerticalNav/>
      </div>


      <div className="h-screen bg-black" id="about">
        <div className='flex h-full items-center'>
        <div className='lg:pl-24 w-full'>
          <div className='lg:inline-block text-center lg:text-right max-w-3/4' >
            <h1 className={`${titillium.className} text-white text-6xl sm:text-8xl mt-4 mb-8`}>Hello!</h1>
            <p className={`${roboto.className} text-center lg:text-left text-white text-3xl sm:text-4xl font-light mt-4`}>
              I've been a developer since 2015, with a passion for solving problems 
              and getting creative. Before jumping into the tech world, I earned a business degree from the 
              University of Colorado at Denver. I’m a full-stack developer, but I’m especially drawn to Frontend 
              development, I’m proficient in React, React Native, NextJS, Node, Python, SQL, and MongoDB. 
              Outside of coding, you’ll usually find me on my bike. I'm an avid cyclist with a love for road cycling, 
              gravel, and cyclocross—my absolute favorite discipline, especially with the fantastic cycling 
              community here in the PNW.
            </p>

          </div>
        </div>

      </div>

        </div>
    {/* <div className="h-400"></div> */}
       {/* <p className='text-black'> hello</p> */}
 
    </main>
  );
}