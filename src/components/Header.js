import React, { useState, useEffect }  from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import { IconContext } from "react-icons";
import Data from '../Data';
import card1 from '../images/card4.png';
import card2 from '../images/card1.png'
import card3 from '../images/card2.png'
import '../assets/small.css'

const Header = () => {
  const [people] = useState(Data);
  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
      
    }, 3000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

    return (
      <>
        <IconContext.Provider value={{ color: "#FF6634" }}>
          <div className='flex justify-around ms:flex-col ms:p-4 md:pl-1 bg-red-200'>
            <div className='mt-10'>
              <h1 className='font-bold text-4xl  md:w-96 '>
                Grow your business with real-time reviews
              </h1>
              <h2 className='text xl  md:w-96'>
                Find out more on what people are saying about your company with
                real time review and data
              </h2>
              <form className='flex flex-row border w-auto p-2 bg-white border-grey-100'>
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
                <a href='/' className='text-red-500 pl-2'>
                  Sign in
                </a>
              </h2>
              <div className='text-sm md:w-96  mt-16 relative'>
                
                {
                  people.map((quot, quotIndex)=>{
                   const {id, quote} = quot
                  
                   let pos = 'nextSlide'
                  if(quotIndex === index){
                    pos = 'activeSlide'
                  }
                  if(
                    quotIndex === index -1 || 
                    (index === 0 && quotIndex === people.length -1)
                  ){
                    pos ='lastSlide'
                  }
                  return (
                    // <article className={pos} key={id}>
                    <div className={pos}  key={id}>
                      <FaQuoteLeft />
                      <span className=''>{quote}</span>
                      <FaQuoteRight  />
                    </div>
                    // </article>
                  );
                })}
               
              </div>
            </div>
            <div className='relative'>
              <div className='border border-lgray w-auto h-auto  rounded-full '>
                <div className='border border-lgray w-auto h-auto m-8 rounded-full'>
                  <div className='border border-lgray w-auto h-auto m-8 rounded-full relative'>
                    <div className='border border-lgray w-48 ms:w-3/4 mv:w-auto h-48 m-8 rounded-full relative'>
                      {people.map((person,personIndex) => {
                  const {id, image} = person;

                  let position = 'nextSlide'
                  if(personIndex === index){
                    position = 'activeSlide'
                  }
                  if(
                    personIndex === index -1 || 
                    (index === 0 && personIndex === people.length -1)
                  ){
                    position ='lastSlide'
                  }
                  return (
                    <article className = {position} key ={id}>
                      <img src={image} alt='' className='person-img'/>
                    </article>
                  )
                })}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                
              </div>
              
              
              
              
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
