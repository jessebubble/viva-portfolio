import { Link } from 'react-router-dom';
import { Player } from '@lottiefiles/react-lottie-player';


export default function Hero() {
  return (
    <>
     <main className="bg-slate-900 ">
      <div className="flex flex-col md:flex-row items-center justify-evenly p-6 md:p-8 lg:p-16">
        <div className="">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight antialiased text-white">
            More Than Just A <span className="block text-indigo-500">Developer</span>
          </h1>
          <p className="tracking-tight antialiased mt-3 md:mt-5 text-white md:max-w-xl text-lg md:text-xl">
            San Antonio native with strong interpersonal and communication skills, dedicated to teamwork and collaboration. 
            From the world of selling insurance to holding a Full Stack Web Development certificate from the University of Texas at San Antonio where I developed skills using modern web technologies.  
          </p>
          <div className="mt-5 flex items-center justify-start pb-6 lg:pb-0">
            <div className='tracking-tight subpixel-antialiased p-2 items-center text-center border border-white bg-transparent rounded text-xl md:text-2xl font-light hover:border-sky-400'>
              <Link to="/contact" className='text-white pr-2 pl-2'>
                Let's Connect 
              </Link>
            </div>
          </div>
        </div>
        <div className=''> 
          <Player
          src='https://assets3.lottiefiles.com/packages/lf20_sUw6TRx8Ys.json'
          className='md:w-96'
          background='transparent'
          loop={true}
          autoplay={true} >
          </Player>
        </div>
      </div> 
    </main>

    <main className="relative bg-slate-900 py-16 sm:py-24">
      <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:items-start lg:gap-24 lg:px-8">
        <div className="relative sm:py-16 lg:py-0">
          <div aria-hidden="true" className="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
            <div className="absolute inset-y-0 right-1/2 w-full rounded-r-3xl bg-slate-100 lg:right-72"></div>
            <svg className="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
              <defs>
                <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
            </svg>
          </div>
          <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:px-0 lg:py-20">
            {/* <!-- Testimonial card--> */}
            <div className="relative overflow-hidden rounded-2xl pt-64 pb-10 shadow-xl">
              <img 
                className="absolute inset-0 h-full w-full object-cover" 
                src="./bubble6.png" 
                alt=""
              />
              <div className="absolute inset-0 bg-yellow-400 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-800 via-indigo-800 opacity-75"></div>
              <div className="relative px-8">
                {/* <div>
                  <img 
                    className="h-12 " 
                    src="./vwd2.png" 
                    alt="logo"
                  />
                </div> */}
                <blockquote className="mt-8">
                  <div className="relative text-lg font-medium text-white md:flex-grow">
                    <svg className="absolute top-0 left-0 h-8 w-8 -translate-x-3 -translate-y-2 transform text-indigo-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative">
                      The passion, drive and energy I see from the startup community here in San Antonio is so contagious 
                      and I'm excited for the opportunity to play a small role in helping these entrepreneurs bring their idea to life.
                    </p>
                  </div>
                  <footer className="mt-4">
                    <p className="text-base font-semibold text-indigo-200">Jesse Hernandez | CEO - Viva Web Design </p>
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
          {/* <!-- Content area --> */}
          <div className="pt-12 sm:pt-16 lg:pt-20">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Independent doesn't mean alone</h2>
            <div className="mt-6 space-y-6 text-gray-500">
              <p className="text-lg">
                My goal as a developer isn't to work for a big tech company. My drive and passion as a developer is give back to the local community 
                by giving small businesses the same level of quality and designs that the big tech companies have.
              </p>
              <p className="text-base leading-7">
                I'm here to play a small part in helping the startup community by creating a platform where they have access to modern web designs, development and animation.
                There is no reason why a small business can't have the same level of quality and design as a big corporation. 
              </p>
              <p className="text-base leading-7">
                The passion, drive and energy I see from the startup community here in San Antonio is so contagious.
                <span className='text-gray-300'> Independent doesn't mean alone</span> is more than just a cathphrase. 
                It's a way of life. It's a way of thinking. It's a way of doing business.
                Let's connect, collaborate and bring your idea to life.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

   </>
  );
}

