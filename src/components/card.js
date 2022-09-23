import { FiGithub } from "react-icons/fi"


export default function Card() {
    return (

        <main className="relative bg-gray-50 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
        <div className="absolute inset-0">
          <div className="h-1/3 bg-white sm:h-2/3"></div>
        </div>
        <div className="relative mx-auto max-w-7xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">developer<span className='text-fuchsia-500'>Portfolio</span></h2>
            <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              I've been fortunate enough to have support from the community. Here are some projects i've built for clients in San Antonio using modern web design, development, animation, and marketing tools.
            </p>
          </div>
          <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src="./vwd.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">Article</a>
                  </p>
                  <a href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Viva Web Design</p>
                    <p className="mt-3 text-base text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.
                    </p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src="./bl.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">Article</a>
                  </p>
                  <a href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Buruato Landscaping</p>
                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src="./vp.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">Article</a>
                  </p>
                  <a href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Viva Portraits</p>
                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src="pr2.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">Article</a>
                  </p>
                  <a href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Ponce Remodeling</p>
                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src="./crafty.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">Article</a>
                  </p>
                  <a href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Crafty Wreaths</p>
                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <img 
                  className="h-48 w-full object-cover" 
                  src="./alamo.png" 
                  alt=""
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href="/blog" className="hover:underline">Article</a>
                  </p>
                  <a href="/" className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">Alamo Welding</p>
                    <p className="mt-3 text-base text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.</p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href="/">
                      <span className="sr-only">Github</span>
                      <FiGithub className='text-gray-900 hover:text-gray-500 w-6 h-6' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    )
}