import {  titillium, roboto} from '@/app/ui/fonts';
import { TextLoop } from './components/text-loop';
import VerticalNav from './components/vertical_nav';
import '@/app/ui/global.css';
import TechBox from './components/tech-box';


export default async function Page({params}) {

  const techList = [
    {
      title: 'React',
      initColor: '#ffc107',
      icon: (
        <svg viewBox="0 0 128 128">
          <g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
        </svg> 
      )
    },
    {
      title: 'NodeJS',
      initColor: '#009688',
      icon: (
        <svg viewBox="0 0 128 128">
          <path fill="url(#a)" d="M66.958.825a6.07 6.07 0 0 0-6.035 0L11.103 29.76c-1.895 1.072-2.96 3.095-2.96 5.24v57.988c0 2.143 1.183 4.167 2.958 5.24l49.82 28.934a6.07 6.07 0 0 0 6.036 0l49.82-28.935c1.894-1.072 2.958-3.096 2.958-5.24V35c0-2.144-1.183-4.167-2.958-5.24z"></path><path fill="url(#b)" d="M116.897 29.76 66.841.825A8.161 8.161 0 0 0 65.302.23L9.21 96.798a6.251 6.251 0 0 0 1.657 1.43l50.057 28.934c1.42.833 3.076 1.072 4.615.595l52.66-96.925a3.702 3.702 0 0 0-1.302-1.072z"></path><path fill="url(#c)" d="M116.898 98.225c1.42-.833 2.485-2.262 2.958-3.81L65.066.108c-1.42-.238-2.959-.119-4.26.715L11.104 29.639l53.606 98.355c.71-.12 1.54-.358 2.25-.715z"></path><defs><linearGradient id="a" x1="34.513" x2="27.157" y1="15.535" y2="30.448" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse"><stop stop-color="#3F873F"></stop><stop offset=".33" stop-color="#3F8B3D"></stop><stop offset=".637" stop-color="#3E9638"></stop><stop offset=".934" stop-color="#3DA92E"></stop><stop offset="1" stop-color="#3DAE2B"></stop></linearGradient><linearGradient id="b" x1="30.009" x2="50.533" y1="23.359" y2="8.288" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset=".138" stop-color="#3F873F"></stop><stop offset=".402" stop-color="#52A044"></stop><stop offset=".713" stop-color="#64B749"></stop><stop offset=".908" stop-color="#6ABF4B"></stop></linearGradient><linearGradient id="c" x1="21.917" x2="40.555" y1="22.261" y2="22.261" gradientTransform="translate(-129.242 -73.715) scale(6.18523)" gradientUnits="userSpaceOnUse"><stop offset=".092" stop-color="#6ABF4B"></stop><stop offset=".287" stop-color="#64B749"></stop><stop offset=".598" stop-color="#52A044"></stop><stop offset=".862" stop-color="#3F873F"></stop></linearGradient></defs>
        </svg>
      )

    },
    {
      title: 'Python',
      initColor: '#9c27b0',
      icon: (
      <svg viewBox="0 0 128 128">
        <path fill="#FFD845" d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"></path>
      </svg> 
      )

    },
    {
      title: 'NextJS',
      initColor: '#4caf50',
      icon: (
      <svg viewBox="0 0 128 128">
        <path d="M0 51.098V76.86h4.422V56.604L20.73 76.87h27.694v-4.113H30.553v-6.801h14.37v-4.113h-14.37v-6.621h17.87v-4.116H26.13v4.116h.002V76.68L5.527 51.098H0zm85.09.01v4.115h9.03v21.65h4.42v-21.65h8.847v-4.116H85.09zm-31.322.011 20.73 25.764h5.803L69.936 64.01l10.35-12.871-5.79.01-7.459 9.261-7.48-9.29h-5.79zm70.158 14.598c-.761 0-1.445.128-2.051.394-.602.263-1.078.633-1.426 1.108-.35.476-.525 1.032-.525 1.664 0 .77.258 1.384.78 1.847.517.464 1.227.809 2.124 1.036l1.24.312a7.02 7.02 0 0 1 1.026.334 1.91 1.91 0 0 1 .683.461 1.034 1.034 0 0 1 .248.697 1.25 1.25 0 0 1-.283.803 1.77 1.77 0 0 1-.76.535 3.11 3.11 0 0 1-1.132.192 3.24 3.24 0 0 1-1.116-.182 1.902 1.902 0 0 1-.804-.557 1.63 1.63 0 0 1-.352-.931h-1.941c.027.71.216 1.316.566 1.812s.836.873 1.46 1.13c.62.26 1.357.39 2.202.39.875 0 1.619-.136 2.233-.4.617-.27 1.088-.643 1.414-1.118.327-.479.488-1.028.488-1.658 0-.466-.09-.872-.266-1.217a2.726 2.726 0 0 0-.72-.887 4.227 4.227 0 0 0-1.028-.607 7.09 7.09 0 0 0-1.19-.385l-1.02-.25a6.975 6.975 0 0 1-.667-.195 2.82 2.82 0 0 1-.597-.285 1.304 1.304 0 0 1-.43-.418 1.037 1.037 0 0 1-.158-.58 1.21 1.21 0 0 1 .238-.717c.156-.21.385-.376.678-.5a2.771 2.771 0 0 1 1.056-.184c.585 0 1.062.126 1.43.383a1.424 1.424 0 0 1 .623 1.07h1.9a2.775 2.775 0 0 0-.513-1.607c-.333-.466-.792-.833-1.377-1.096-.584-.265-1.26-.394-2.033-.394zm-7.998.144v7.55c-.003.377-.062.697-.176.954a1.25 1.25 0 0 1-.506.584c-.218.133-.488.2-.803.2-.29 0-.546-.057-.771-.17a1.247 1.247 0 0 1-.522-.481 1.474 1.474 0 0 1-.195-.75h-1.963c0 .661.147 1.213.447 1.656a2.768 2.768 0 0 0 1.211 1.002 4.22 4.22 0 0 0 1.72.34c.697 0 1.311-.134 1.835-.4a2.97 2.97 0 0 0 1.236-1.149c.293-.499.444-1.093.448-1.787v-7.549h-1.961zm-53.332.059-8.844 10.982h5.805l5.937-7.38-2.898-3.602zm45.785 8.498c-.324 0-.6.112-.83.336a1.07 1.07 0 0 0-.344.807 1.082 1.082 0 0 0 .344.818c.23.225.506.336.83.336a1.105 1.105 0 0 0 .574-.156c.177-.101.318-.24.428-.416a1.115 1.115 0 0 0 .166-.582 1.097 1.097 0 0 0-.354-.807 1.133 1.133 0 0 0-.814-.336z"></path>
      </svg>
      )

    },

  ]

  return (
    <main 
      className="flex min-h-screen flex-col overflow-hidden"
    >
      <div className='flex min-h-dvh h-dvh items-center'>

      <video 
        autoPlay 
        muted 
        loop
        className='w-full h-dvh'
        style={{
          objectFit: 'cover',
          display: 'block',
          background: 'black',
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
              <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light text-center lg:text-left`}>Welcome to my portfolio</h2>
              <h1 className={`${titillium.className} text-white text-5xl sm:text-8xl mt-4 mb-8 tracking-widest`}>TAYLOR PASQUARIELLO</h1>
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
              <h1 className={`${titillium.className} text-5xl md:text-8xl mt-4 mb-4 text-[#f139bb] font-extrabold lg:tracking-[50]`}>
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
      <div className={`min-h-screen relative px-4 py-12 `} id="resume">


        <div className='flex h-full items-center justify-center xl:justify-start lg:pl-12 w-full '>
          <div className='inline-block w-4/5 lg:3/5 xl:w-4/5'>
            <h1 className={`${titillium.className} text-5xl md:text-8xl mt-4 mb-4 text-[#f139bb] font-extrabold lg:tracking-[50]`}>
                RESUME
            </h1>
            <div className='flex flex-col h-[1px] w-full bg-white'/>
            
            <p className={`${titillium.className} lg:text-left text-white text-lg sm:text-xl font-normal mt-4 tracking-wider leading-8`}>Kin + Carta Notabe Projects</p>
            <div className='px-8'>
              <div className='w-full py-8 lg:w-2/4'>
                <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light text-center lg:text-left`}>Discover Financial Common Component library</h2>

                <p className={`${titillium.className} lg:text-left text-white text-md sm:text-lg font-normal mt-4 tracking-wider leading-8`}>

                In my role, I led the implementation of a proof of concept for a custom component library, similar to frameworks 
                like MUI or Tailwind, but tailored to our needs. The goal was to reduce development time, improve design fidelity, 
                and ensure a consistent look, feel, and development experience across the mobile engineering department. The proof 
                of concept included documentation and a live Storybook sandbox for developers to explore the components. This 
                effort led to the successful launch of a full-featured library, supported by a dedicated team for ongoing maintenance 
                and development, of which I maintained my position as a lead developer helping mentor new team members, and colloaborating with 
                directors, managers, product owners, and design leads

                </p>
              </div>
              <div className='w-full py-4 lg:w-2/4 lg:ml-auto'>
                <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light text-center lg:text-left`}>Redesign Health</h2>
                <p className={`${titillium.className} lg:text-left text-white text-md sm:text-lg font-normal mt-4 tracking-wider leading-8`}>
                  I led two development teams of eight members, collaborating with stakeholders to define project timelines and deliverables. 
                  I structured the CI/CD pipeline and Git flow to improve team efficiency, led feature release planning, and mentored 
                  developers in best practices and agile methods. As a frontend developer, I worked with React, React Native, Tailwind, and 
                  React Native Paper to build user interfaces. I also transcribed Figma designs into components and served as the lead developer 
                  for a Node.js Restful API, Postgres database, and Twilio integration for in-app chat and SMS. Additionally, I integrated AWS 
                  architecture and Cognito authentication for secure and scalable services.
                </p>
              </div>
              <div className='h-20 w-full py-4 lg:w-2/4'>
                <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light text-center lg:text-left`}>Raven Health</h2>
              </div>
              <div className='h-20 w-full py-4 lg:w-2/4 lg:ml-auto'>
                <h2 className={`${roboto.className} text-white text-3xl sm:text-4xl font-light text-center lg:text-left`}>Blue Origin</h2>
              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Tech */}
      <div className={`min-h-screen relative px-4 py-12 `} id="tech">


        <div className='flex h-full items-center justify-center xl:justify-start lg:pl-12 w-full '>
          <div className='inline-block w-4/5 lg:3/5 xl:w-2/5'>
              <h1 className={`${titillium.className} text-5xl md:text-8xl mt-4 mb-4 text-[#f139bb] font-extrabold lg:tracking-[50]`}>
                TECHNOLOGY
              </h1>
              <div className='h-[1px] w-full bg-white mb-4'></div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4"> 
              {
                  techList.map(item => {
                    return <TechBox key={item.title} title={item.title} initColor={item.initColor} icon={item.icon}/>
                  })
                }
              
                 

              </div>
             
          </div>
        </div>
      </div>


          {/* BLOG */}
          <div className={`min-h-screen h-screen relative px-4 py-12 `} id="blog">


            <div className='flex h-full items-center justify-center xl:justify-start lg:pl-12 w-full '>
              <div className='inline-block w-4/5 lg:3/5 xl:w-2/5'>
                  <h1 className={`${titillium.className} text-5xl md:text-8xl mt-4 mb-4 text-[#f139bb] font-extrabold lg:tracking-[50]`}>
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