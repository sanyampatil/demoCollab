import React from 'react'
import sports from '../assets/sports.png'
import smjt from '../assets/smjt.png'
import sevenyfiveears from '../assets/sevenyfiveears.jpg'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const SmallNavbar = () => {
  const { isLoggedIn } = useSelector(state => state?.auth)

  return (
    <div>
      <nav className=' mt-20  bg-red-500'>
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
          <div className='relative flex h-16 items-center justify-between'>
            <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'></div>
            <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-start'>
              <div className='flex flex-shrink-0 items-center'>
                <img
                  className='h-8 w-auto'
                  src='https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500'
                  alt='Your Company'
                />
              </div>
              {/* <div className='hidden sm:ml-6 sm:block'>
                <div className='flex space-x-4'>
                  <Link
                    to='#'
                    className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium'
                    aria-current='page'
                  >
                    Swimming
                  </Link>
                  <Link
                    to='#'
                    className='text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    hostel
                  </Link>
                  <Link
                    to='#'
                    className='text-gray-100 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
                  >
                    Projects
                  </Link>
                </div>
              </div> */}
            </div>
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
              <button
                type='button'
                className='relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
              >
                <span className='absolute -inset-1.5'></span>
                <span className='sr-only'>View notifications</span>
                <svg
                  className='h-6 w-6'
                  fill='none'
                  viewBox='0 0 24 24'
                  // stroke-width='1.5'
                  // stroke='currentColor'
                  aria-hidden='true'
                >
                  <path
                    // stroke-linecap='round'
                    // stroke-linejoin='round'
                    d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                  />
                </svg>
              </button>

              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='relative flex rounded-full  text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                  >
                    {/* <span className='absolute -inset-1.5'></span> */}
                    {/* <span className='sr-only'>Open user menu</span> */}
                    <img
                      className='h-10 w-10 rounded-full'
                      src={sports}
                      alt=''
                    />
                    <img
                      className='h-10 w-10 rounded-full'
                      src={sevenyfiveears}
                      alt=''
                    />
                  </button>
                </div>

                {/* {isLoggedIn && (
                  <div
                    className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabindex='-1'
                  >
                    <Link to='/user/profile'>
                      <Link
                        to='#'
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        tabindex='-1'
                        id='user-menu-item-0'
                      >
                        Your Profile
                      </Link>
                    </Link>

                    <Link
                      to='#'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabindex='-1'
                      id='user-menu-item-1'
                    >
                      Your batch
                    </Link>
                  </div>
                )} */}
              </div>
            </div>
          </div>
        </div>

        <div className='sm:hidden' id='mobile-menu'>
          <div className='space-y-1 px-2 pb-3 pt-2'>
            {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
            <Link
              to='#'
              className='bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium'
              aria-current='page'
            >
              Swimming
            </Link>
            <Link
              to='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              hostel
            </Link>
            <Link
              to='#'
              className='text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium'
            >
              Projects
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default SmallNavbar
