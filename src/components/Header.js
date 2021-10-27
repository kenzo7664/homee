import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import { IconContext } from "react-icons";
import Hero from '../images/hero.png'
import card1 from '../images/card4.png'
import card2 from '../images/card1.png'
import card3 from '../images/card2.png'

const Header = () => {
    return (
      <>
        <IconContext.Provider value={{ color: "#FF6634" }}>
          <div className='flex justify-around ms:flex-col ms:p-4 bg-red-200'>
            <div className='mt-10'>
              <h1 className='font-bold text-4xl  md:w-96 '>
                Grow your business with real-time reviews
              </h1>
              <h2 className='text xl  md:w-96'>
                Find out more on what people are saying about your company with
                real time review and data
              </h2>
              <form className='flex flex-row border p-2 bg-white border-grey-100'>
                <input
                  type='text'
                  placeholder='Search for companies'
                  className='border border-none flex-grow'
                />
                <button className='bg-red-500 text-white p-1 rounded-md'>
                  Search
                </button>
              </form>
              <h2 className='text-lg'>
                Already have an account ?
                <a href='#' className='text-red-500 pl-2'>
                  Sign in
                </a>
              </h2>
              <div className='text-sm md:w-96  mt-16 relative'>
                <FaQuoteLeft />A life spent making mistakes is not only more
                honorable, but more useful than a life spent doing nothing.
                <FaQuoteRight className='absolute md:top-10 md:right-24  ' />
              </div>
            </div>
            <div className='relative'>
              <div className='border border-lgray w-full h-full  rounded-full '>
                <div className='border border-lgray w-5/6 h-5/6 m-8 rounded-full'>
                  <div className='border border-lgray w-4/5 h-4/5 m-8 rounded-full'>
                    <div className='border border-lgray w-48 ms:w-3/4 mv:w-5/6 h-48 m-8 rounded-full'></div>
                  </div>
                </div>
              </div>
              <img
                src={Hero}
                alt=''
                className=' z-30 h-full w-full absolute top-0 '
              />
              <img
                src={card1}
                alt=''
                className=' bg-white w-8 rounded-sm z-0 absolute top-20 left-24'
              />
              <img
                src={card2}
                alt=''
                className=' bg-white w-12 rounded-sm z-0 absolute top-24 right-10'
              />
              <img
                src={card3}
                alt=''
                className=' bg-white w-36 rounded-sm z-40 absolute top-60 uv:top-52  '
              />
             
            </div>
          </div>
        </IconContext.Provider>
      </>
    );
}

export default Header
