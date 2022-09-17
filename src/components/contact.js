import Nav from './navbar';
import Footer from './footer';

export default function Contact() {
  return (
    <>
    <Nav />

    <main className='bg-slate-100 p-6 md:p-10 lg:p-16 border-b-2 border-gray-900'>
      <div className='flex flex-col items-center justify-center'>
        <div className="lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 antialiased">
            More Than Just A <span className='text-fuchsia-600'>Freelancer</span>
          </h2>
          <p className="mt-1 max-w-2xl text-xl text-indigo-600">
            I bring the following to every project:
          </p>
        </div>
        <div className="mt-10 ">
          <div className="flex flex-col items-center md:grid md:grid-cols-2 gap-6 md:gap-10">
            <div className=''>
              <div className=''>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Communication</p>
              </div>
              <dd className="mt-1 ml-16 text-base tracking-tight antialiased text-gray-600">
                Strong interpersonal and communication skills are essential to any project. I will keep you updated on the progress of your project and will be available to answer any questions you may have. 
              </dd>
            </div>
            <div className=''>
              <div className=''>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Transparency</p>
              </div>
              <dd className="mt-1 ml-16 text-base tracking-tight antialiased text-gray-600">
                The future is transparency! Dedication to transparency is a core value of mine. I will always be upfront and honest with you about the progress of your project and will never over-promise or under-deliver.
              </dd>
            </div>
            <div className=''>
              <div className=''>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Collaboration</p>
              </div>
              <dd className="mt-1 ml-16 text-base tracking-tight antialiased text-gray-600">
                100% of my work is dedicated to teamwork and flexible collaboration. My goal is to bring your idea to life by understanding your needs and providing you with a solution that meets your requirements.
              </dd>
            </div>            
            <div className=''>
              <div className=''>
                <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-indigo-500 text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900">Results Driven</p>
              </div>
              <dd className="mt-1 ml-16 text-base tracking-tight antialiased text-gray-600">
                I'm a results-driven developer with a passion for creating beautiful functional websites and am committed to providing you with a solution that will help you achieve your goals and grow your business.
              </dd>
            </div>
          </div>
        </div>
      </div>
    </main>

    <main className='bg-slate-700 bg-heroPattern p-6 md:p-10 lg:p-16'>
      <div className='flex flex-col items-center justify-center'>
        <div className="md:text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white antialiased">
            Let's <span className='text-rose-500'>Connect</span>
          </h2>
          <p className="mt-1 max-w-2xl md:text-2xl text-white">
            Independent doesn't mean alone
          </p>
        </div>
        <div className='mt-10 w-full'>
          <div className='flex flex-col-reverse items-center gap-4 md:gap-8'>
            <form 
              className='flex flex-col gap-4 bg-sky-50 border-2 border-rose-500 rounded-xl p-4 md:p-8 lg:p-16' 
              action='#' 
              method='POST' >
              <div> 
                <input 
                  name='firstname' 
                  id='firstname' 
                  placeholder='First and Last Name'
                  className='bg-transparent placeholder-slate-400 text-white border-b-2 border-rose-400 text-lg p-2.5' 
                  required   
                />
              </div>
              <div>
                <input 
                  type='email' 
                  name='email' 
                  id='email' 
                  placeholder='Your Email'
                  className='bg-transparent placeholder-slate-400 text-white border-b-2 border-rose-400 text-lg p-2.5' 
                  required />
              </div>
              <div>
                <input 
                  name='message' 
                  id='message' 
                  placeholder='Your Message'
                  className='bg-transparent placeholder-slate-400 text-white border-b-2 border-rose-400 text-lg p-2.5' 
                  required />
              </div>
              <button  
                className='tracking-tight antialiased p-2 border-2 border-rose-500 bg-transparent text-xl md:text-2xl font-light text-rose-500  hover:bg-rose-100'>
                Submit
              </button>
            </form>
            <div className='flex items-center justify-center'> 
              <img 
                src="./bubble6.png" 
                alt="portrait"
                className="lg:skew-y-3 bg-rose-500 rounded-3xl md:w-96"             
              /> 
            </div>
          </div>
        </div>
      </div> 
    </main>

    <Footer />
    </>
  );
}