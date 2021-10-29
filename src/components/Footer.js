import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa'
import { IconContext } from "react-icons";

const Footer = () => {
    return (
        <>
        <IconContext.Provider value={{ color: "#FFF" }}>
         <div className="bg-drkgray flex justify-around pt-20 pb-10 ms:flex-col ms:p-5 ">
             <div className ="flex flex-col">
                 <h1 className="text-white text-sm md:w-96 md:pt-8">
                     This platform for minority groups to express their
                     opinions on employment, workplace experiences and rate employers.
                 </h1>
                 <div className="flex flex-row md:pt-5  ms:hidden    ">
                    <div className="border border-lblack w-8 h-8 rounded-full mr-2 ms:mr-0"><FaFacebookF className ="ml-2 mt-2"/></div>
                    <div className="border border-lblack w-8 h-8 rounded-full mr-2 ms:mr-0"><FaTwitter className="ml-2 mt-2"/></div>
                    <div className="border border-lblack w-8 h-8 rounded-full"><FaLinkedinIn className="ml-2 mt-2"/></div>
                 </div>
                 <span className="text-lwhite text-xs md:pt-20 ms:hidden">Copyright 2021</span>
             </div>
             
             <div className="flex flex-col text-white ms:text-center ms:mt-3">
                <h1 className="font-semibold text lg ">Company</h1>
                <a href="/" className="text-xs font-thin leading-5">About Us</a>
                <a href="/" className="text-xs font-thin leading-5">Contact Us</a>
                <a href="/" className="text-xs font-thin leading-5">Terms</a>
                <a href="/" className="text-xs font-thin">Privacy Policy</a>
             </div>
             <div className="flex flex-col text-white ms:text-center ms:mt-3">
                <h1 className="font-semibold text lg">Features</h1>
                <a href="/" className="text-xs font-thin leading-5">Timeline</a>
                <a href="/" className="text-xs font-thin leading-5">Peer Review</a>
                <a href="/" className="text-xs font-thin leading-5">Create Account</a>
                <a href="/" className="text-xs font-thin">Sign in</a>
             </div>
             <div className="flex flex-col text-white ms:text-center ms:mt-3">
                <h1 className="font-semibold text lg">Contact Us</h1>
                <p className="text-xs font-thin leading-5">inquiry@thaapp.com</p>
                <p className="text-xs font-thin leading-5">1-800-200-300</p>
                <p className="text-xs font-thin leading-5">54, Curragh birin</p>
                <p className="text-xs font-thin">Ireland</p>
             </div>
             <div className="flex flex-row md:pt-5  md:hidden    ">
                    <div className="border border-lblack w-8 h-8 rounded-full mr-2 ms:mr-0"><FaFacebookF className ="ml-2 mt-2"/></div>
                    <div className="border border-lblack w-8 h-8 rounded-full mr-2 ms:mr-0"><FaTwitter className="ml-2 mt-2"/></div>
                    <div className="border border-lblack w-8 h-8 rounded-full"><FaLinkedinIn className="ml-2 mt-2"/></div>
             </div>
             <span className="text-lwhite text-xs md:pt-20 ms:text-right md:hidden">Copyright 2021</span>
         </div>   
        </IconContext.Provider>
        </>
    )
}

export default Footer
