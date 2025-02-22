import {  titillium, roboto} from '@/app/ui/fonts';
import { TextLoop } from './components/text-loop';
import VerticalNav from './components/vertical_nav';
import '@/app/ui/global.css';


export default async function Page() {

  return (
    <main 
    className="flex min-h-screen flex-col overflow-hidden"
    >

  


      <div className='flex min-h-screen items-center border-2 border-rose-500'>

      <video 
        autoPlay 
        muted 
        loop
        className='h-full w-full'
        style={{
          objectFit: 'cover', 
          // width: '100%',
          // height: '100%',
          position: 'absolute',
          zIndex: -1,
        }}
      >         
        <source src="./jellies.mp4" type="video/mp4"/>       
      </video>

        <div className='lg:pl-24 w-full'>
            <div className='lg:inline-block text-center' >
              <h2 className={`${roboto.className} text-white text-2xl sm:text-4xl font-light text-center lg:text-left`}>Welcome to my portfolio</h2>
              <h1 className={`${titillium.className} text-white text-6xl sm:text-8xl mt-4 mb-8 tracking-widest`}>TAYLOR PASQUARIELLO</h1>
              <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light relative`}><TextLoop/></h2>
            </div>
        </div>

        <VerticalNav/>
      </div>

      <div className='image-test'>
      <div className={`min-h-screen h-screen relative px-4 py-12 `} id="about">
  
          {/* <svg className="absolute max-h-screen h-150 -z-10 top-[20%] bottom-0 left-12" id="sw-js-blob-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" version="1.1">
              <defs> 
                  <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                      <stop id="stop1" stopColor="rgba(127.544, 15.709, 251.775, 1)" offset="0%"/>
                      <stop id="stop2" stopColor="rgba(250.446, 2.952, 255, 0.83)" offset="100%"/>
                  </linearGradient>
              </defs>
          <path fill="url(#sw-gradient)" d="M18,-32.3C21.6,-25.7,21.7,-17.8,24.7,-11.2C27.8,-4.7,33.9,0.5,35,6.3C36.2,12.1,32.4,18.4,26.8,21.3C21.3,24.2,14,23.6,7.1,26.9C0.1,30.2,-6.5,37.4,-13.5,38.7C-20.6,40,-28,35.4,-31.5,28.7C-34.9,22.1,-34.4,13.5,-36,5C-37.5,-3.6,-41.2,-12,-38.4,-17.2C-35.5,-22.4,-26.2,-24.3,-18.7,-29.2C-11.2,-34.1,-5.6,-41.9,0.8,-43.1C7.2,-44.3,14.4,-38.9,18,-32.3Z" width="100%" height="100%" transform="translate(50 50)" style={{transition: '0.3s'}} strokeWidth="0"/>
          </svg> */}

        <div className='flex h-full items-center justify-center xl:justify-start lg:pl-12 w-full '>
          <div className='inline-block w-4/5 lg:3/5 xl:w-2/5'>
              <h1 className={`${titillium.className} text-8xl mt-4 mb-4 text-[#f139bb] font-extrabold lg:tracking-[50]`}>
                ABOUT
              </h1>
              <div className='h-[1px] w-full bg-white'></div>
            <p className={`${titillium.className} lg:text-left text-white text-lg sm:text-xl font-normal mt-4 tracking-wider leading-8`}>
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


      {/* Resume */}
      <div className={`min-h-screen h-screen relative px-4 py-12 `} id="resume">


        <div className='flex h-full items-center justify-center xl:justify-start lg:pl-12 w-full '>
          <div className='inline-block w-4/5 lg:3/5 xl:w-2/5'>
              <h1 className={`${titillium.className} text-8xl mt-4 mb-4 text-[#f139bb] font-extrabold lg:tracking-[50]`}>
                RESUME
              </h1>
              <div className='h-[1px] w-full bg-white'></div>
            <p className={`${titillium.className} lg:text-left text-white text-lg sm:text-xl font-normal mt-4 tracking-wider leading-8`}>
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


      {/* Tech */}
      <div className={`min-h-screen h-screen relative px-4 py-12 `} id="tech">


        <div className='flex h-full items-center justify-center xl:justify-start lg:pl-12 w-full '>
          <div className='inline-block w-4/5 lg:3/5 xl:w-2/5'>
              <h1 className={`${titillium.className} text-8xl mt-4 mb-4 text-[#f139bb] font-extrabold lg:tracking-[50]`}>
                TECHNOLOGY
              </h1>
              <div className='h-[1px] w-full bg-white'></div>
            <p className={`${titillium.className} lg:text-left text-white text-lg sm:text-xl font-normal mt-4 tracking-wider leading-8`}>
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


          {/* BLOG */}
          <div className={`min-h-screen h-screen relative px-4 py-12 `} id="blog">


            <div className='flex h-full items-center justify-center xl:justify-start lg:pl-12 w-full '>
              <div className='inline-block w-4/5 lg:3/5 xl:w-2/5'>
                  <h1 className={`${titillium.className} text-8xl mt-4 mb-4 text-[#f139bb] font-extrabold lg:tracking-[50]`}>
                    BLOG
                  </h1>
                  <div className='h-[1px] w-full bg-white'></div>
                <p className={`${titillium.className} lg:text-left text-white text-lg sm:text-xl font-normal mt-4 tracking-wider leading-8`}>
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

 
    </main>
  );
}