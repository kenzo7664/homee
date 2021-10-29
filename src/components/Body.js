import React from 'react'
import reviewcard1 from '../images/bodycard1.png'
import reviewcard2 from '../images/bodycard2.png'
import reviewcard3 from '../images/bodycard3.png'
import reviewcard4 from '../images/bodycard4.png'
import reviewcard5 from '../images/bodycard5.png'
import reviewcard6 from '../images/bodycard6.png'
import mail from '../images/mail.png'

const Body = () => {
    return (
        <>
           <div className="text-black">
                <h1 className='font-bold text-4xl text-center pt-10'>Featured Reviews</h1> 
                <div className='text-sm text-center p-2 '>
                  Here are some of the review been done by some of the employees on this platform.   
                </div>
                <div className="grid grid-cols-1 gap-4 p-32 ms:p-10 mv:p-24 md:grid-cols-2 lg:grid-cols-3 lg:pl-32">
                    <img src={reviewcard1} alt="" />
                    <img src={reviewcard2} alt="" />
                    <img src={reviewcard3} alt="" />
                    <img src={reviewcard4} alt="" />
                    <img src={reviewcard5} alt="" />
                    <img src={reviewcard6} alt="" />
                </div>
           </div> 
           <div className="bg-grwy flex ms:flex-col ms:p-8 justify-around">
               <div className=" pb-20 ">
                   <h1 className="text-xl pt-20 font-bold">Subscribe to our Newsletter</h1>
                   <h1 className="text-sm md:w-96">Get latest update lorem ipsium is that it has a more-or-less normal
                    distribution of letters,as opposed to using content</h1>
                    <form className='flex flex-row border mt-5 bg-white border-grey-100'>
                        <input
                        type='text'
                        placeholder='Enter a valid Email Address'
                        className='border border-none flex-grow'
                        />
                        <button className='bg-red-500 text-white p-1 rounded-md'>
                        Submit
                        </button>
                    </form>
               </div>
               <img src={mail} alt=""  className="p-14"/>
           </div>
        </>
    )
}

export default Body
