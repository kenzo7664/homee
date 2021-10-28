import React from 'react'
import indeed from '../images/indeed.png'
import ebay from '../images/ebay.png'
import linkein from '../images/LinkedIn.png'
import monster from '../images/Monster.png'
import godaddy from '../images/Godaddy.png'
import ad from '../images/ad.png'
import emoticon from '../images/emoticons.png'

const Advert = () => {
    return (
        <>
            <div className="pb-20">
                <div className="grid grid-cols-5 pl-12 pr-10 ms:pl-2 ms:pr-2 ms:grid-cols-2">
                    <img src={ebay} alt="" />
                    <img src={linkein} alt="" />
                   <img src={indeed} alt="" />
                   <img src={godaddy} alt="" />
                   <img src={monster} alt="" />
                </div>
                <div className="grid grid-cols-3 p-20 ms:grid-cols-1 ms:p-10 ms:gap-y-4 mv:p-20 md:gap-x-4">
                    <img src={ad} alt="" />
                    <img src={ad} alt="" />
                    <img src={ad} alt="" />
                </div>
                <div className="bg-lpink ml-28 mr-28 flex justify-around ms:flex-col ms:ml-8 ms:mr-8  mv:ml-20 mv:mr-20 ">
                    <h1 className="text-lg font-semibold pt-20 md:pl-8 md:pb-8 md:w-96 ms:p-8">
                        Get started today sign up
                        and start reveiwing business.
                    </h1>
                    <div className="relative ">
                       <img src={emoticon} alt="" className=" ms:h-20 z-0" />
                       <button className="bg-red-500 z-10 text-white absolute top-20 ms:top-0 ms:right-0 ms:text right-20 p-4  ">Create Free Account</button>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default Advert
