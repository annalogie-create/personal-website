import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai'
import Image from "next/legacy/image"
// import anna from "/anna-bewerbungsbild.jpg"
// import design from "../../public/design.png"
// import erasmus from "/erasmus_viz.png"
// import code from "../../public/code.png"
// import mia from "/team-duckling.jpg"
// import annalogie from "/logo.png"
import {useState} from "react";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const prefix = ''
  return (
    <>
    <div className={darkMode ? 'dark' : ""}>
      <Head>
        <title>Anna Schierholz</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href= {prefix + "/favicon.jpg"} />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-900">
        <section className="bg-white min-h-screen dark:bg-slate-900">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl ml-8 font-raleway dark:text-white"></h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="dark:text-white cursor-pointer text-2xl "/></li>
              <li>
                <a className="bg-gradient-to-r from-purple-800 to-purple-500 text-white px-4 py-2 rounded-2xl ml-8 mr-8 dark:text-white" href="https://www.annalogie.com/">Blog</a>
                </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className='font-raleway text-5xl py-2 text-purple-700 md:text-6xl '>
              Anna Schierholz
            </h2>
            <h3 className= "font-raleway text-2xl py-2 md:text-3xl dark:text-white">
              Problem Solver, Creative and Enthusiast
            </h3>
            <p className='text-md py-5 leading-8 text-gray-800 md:text-xl max-w-l mx-auto dark:text-white'>
              Moin! I&apos;m Anna from Hamburg and I&apos;m currently a M.Sc. Computer Science student at Aarhus University. <br /> Have a look around to see what I&apos;m up to!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
              <a href="https://www.linkedin.com/in/anna-schierholz/"><AiFillLinkedin/></a> 
              <a href="https://github.com/annalogie-create"><AiFillGithub/></a> 
          </div>
          <div className='relative mx-auto rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96'>
            <Image src={prefix + "/anna-bewerbungsbild.jpg"} layout="fill" className='object-cover'/>
          </div>
        </section>
        {/* Card System */}
        <section>
          <div >
            <h3 className="text-3xl py-1 dark:text-white">
              Education and Projects
            </h3>
            <p className='text-md py-2 leading-8 text-gray-800 dark:text-white'>
              In my Master&apos;s degree, I am focusing on Data Science and Human Computer Interaction and am now writing my Master&apos;s thesis in <span className='text-purple-800'>Data Visualization</span>. Courses I especially enjoyed during my studies are  <span className='text-purple-800'>Data mining, Data Visualization, Project Management, Interaction Design and Software Engineering </span>. I also had the opportunity to explore other areas such as Cryptology, Augmented Reality and Graph Theory. In the following, you can see a selection of projects I have worked on. 
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-10">
          <div className='text-center content-center shadow-lg p-10 rounded-xl my-10 bg-purple-100 dark:bg-purple-900 basis-2/5'>
              {/* <Image className="align-middle"src={erasmus} width={500} height={300}/> */}
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">Visualization for Reading</h3>
              <p className='dark:text-white'>
              Currently, I am working on my Master&apos;s thesis in Data Visualization, integrating visualization to help navigate long documents and facilitate different reading styles. 
              </p>
              <h4 className='text-purple-800 py-4 dark:text-purple-200'>Languages/Frameworks</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Typescript</p>
              <p className='text-gray-800 py-1 dark:text-white'>Svelte.js</p>
              <p className='text-gray-800 py-1 dark:text-white'>d3.js</p>
            </div>
            <div className='text-center content-center shadow-lg p-10 rounded-xl my-10 bg-purple-100 dark:bg-purple-900 basis-2/5'>
              <Image className="align-middle"src={prefix + "/erasmus_viz.png"} width={500} height={300}/>
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">Data Visualization of Erasmus Mobility</h3>
              <p className='dark:text-white'>
              For the Data Visualization course in my Master&apos;s, my group developed a visualization showing expected versus real mobility for Erasmus exchanges.
              </p>
              <h4 className='text-purple-800 py-4 dark:text-purple-200'>Languages/Frameworks</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Javascript</p>
              <p className='text-gray-800 py-1 dark:text-white'>Vega lite</p>
              <p className='text-gray-800 py-1 dark:text-white'>Python</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-purple-100 dark:bg-purple-900 basis-2/5'>
              <Image src={prefix + "/team-duckling.jpg"} width={125} height={125}/>
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">Bots for Dice Game</h3>
              <p className='dark:text-white'>
              In 2020, I participated in the Digital Innovation Challenge of the German Informatics Society (&quot;Gesellschaft für Informatik&quot;) where we constructed bots to play the dice game Mia using both explicit and machine learning strategies.
              </p>
              <h4 className='text-purple-800 py-4 dark:text-purple-200'>Languages/Frameworks</h4>
              <p className='text-gray-800 py-1 dark:text-white'>Python</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-purple-100 dark:bg-purple-900 basis-2/5'>
              <Image src={prefix + "/logo.png"} width={600} height={200}/>
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">Blog Annalogie</h3>
              <p className='dark:text-white'>
              I have my own blog and website <a href="https://www.annalogie.com/"><span>Annalogie</span></a>where I share tips for productivity and organization but also books and other things that interest me (in German). 
              </p>
              <h4 className='text-purple-800 py-4 dark:text-purple-200'>Languages/Frameworks</h4>
              <p className='text-gray-800 py-1 dark:text-white'>HTML/CSS</p>
              <p className='text-gray-800 py-1 dark:text-white'>Tailwind.css</p> 
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10 bg-purple-100 dark:bg-purple-900 basis-2/5'>
              {/* <Image src={annalogie} width={600} height={200}/> */}
              <h3 className="text-xl font-medium pt-8 pb-2 dark:text-white">Personal Website</h3>
              <p className='dark:text-white'>
              With this website I mainly wanted to try out tailwind.css to make my websites more responsive. 
              </p>
              <h4 className='text-purple-800 py-4 dark:text-purple-200'>Languages/Frameworks</h4>
              <p className='text-gray-800 py-1 dark:text-white'>HTML/CSS</p>
              <p className='text-gray-800 py-1 dark:text-white'>Tailwind.css</p>
            </div>
          </div>
        </section>
        <section>
        <h2 className="text-2xl text-center font-medium pt-8 pb-4 dark:text-white">Get in touch!</h2>
              <p className='dark:text-white pb-32 text-center'>
                Feel free to contact me on <a href="https://www.linkedin.com/in/anna-schierholz/"><span className='text-purple-800'>LinkedIn</span></a> or shoot me an <a href="mailto:annamaria.schierholz@gmail.com"><span className='text-purple-800'>email</span></a>.
              </p>
        </section>
      </main>
      </div>
    </>
  )
}
