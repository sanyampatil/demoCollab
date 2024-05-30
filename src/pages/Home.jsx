import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaArrowRightArrowLeft } from 'react-icons/fa6'
import sports from '../assets/sports.png'
import smjt from '../assets/smjt.png'
import sevenyfiveears from '../assets/sevenyfiveears.jpg'
import About from './About'
import { useSelector } from 'react-redux'
import SmallNavbar from '../components/SmallNavbar'

const Home = () => {
  const { isLoggedIn } = useSelector(state => state?.auth)

  return (
    <>
      {/* <SmallNavbar /> */}
      <section className='  w-full     bg-gray-200 '>
        <div
          className='bg-slate-900
 bg-natural-200 px-6 py-12 text-center dark:bg-neutral-900 md:px-12 lg:text-left   shadow-2xl'
        >
          <div className='w-100 mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-5xl xl:max-w-7xl'>
            <div className='grid items-center gap-12 lg:grid-cols-2 '>
              <div className=' lg:mt-0'>
                <h1
                  className='mt-2 text-white mb-16 text-2xl font-bold tracking-tight md:text-6xl xl:text-4xl leading-7  
'
                >
                  जिल्हा क्रीडा संकुल समिती अंतर्गत
                  <div className=' text-2xl text-blue-500 md:text-6xl xl:text-6xl'>
                    जलतरण तलाव ,
                  </div>
                  यवतमाळ <br />
                  {/* <span className='text-white  text-sm'>for your business</span> */}
                </h1>
                {/* <a
                  className='mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                  href='#!'
                  role='button'
                >
                  Get started
                </a> */}
                <Link to='/batches'>
                  {/* <a
                    className='mb-2 inline-block rounded bg-primary px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] md:mr-2 md:mb-0'
                    data-te-ripple-init
                    data-te-ripple-color='light'
                    href='#!'
                    role='button'
                  >
                    <button
                      type='button'
                      className='text-white flex gap-2 items-center w-full bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2'
                    >
                      सभासद व्हा <FaArrowRight />
                    </button>
                  </a> */}
                </Link>
                {/* <a
                  className='inline-block rounded px-12 pt-4 pb-3.5 text-sm font-medium uppercase leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-500 hover:bg-opacity-10 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-800 dark:hover:bg-opacity-60 text-gray-500'
                  data-te-ripple-init
                  data-te-ripple-color='light'
                  href='#!'
                  role='button'
                >
                  Learn more
                </a>{' '} */}
              </div>
              <div className='mb-12 lg:mb-0'>
                <img
                  src='https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg?cs=srgb&dl=pexels-marctutorials-298692-870170.jpg&fm=jpg'
                  className='w-full h-[100%] rounded-lg shadow-lg dark:shadow-black/20'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className=' h-[90vh] bg-lime-200'>
        <About />
      </div>
    </>
  )
}

export default Home
