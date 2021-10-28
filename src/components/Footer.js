import React from 'react'
import {FaFacebookF,FaTwitter,FaLinkedinIn} from 'react-icons/fa'

const Footer = () => {
    return (
        <>
         <div className="bg-drkgray flex justify-around pt-20 pb-20 ">
             <div className ="flex flex-col">
                 <h1 className="text-white text-sm md:w-96">
                     This platform for minority groups to express their
                     opinions on employment, workplace experiences and rate employers.
                 </h1>
                 <div className="flex flex-row ">
                    <div className="border border-lblack w-8 h-8 rounded-full mr-2"><FaFacebookF className ="ml-2 mt-2"/></div>
                    <div className="border border-lblack w-8 h-8 rounded-full mr-2"><FaTwitter className="ml-2 mt-2"/></div>
                    <div className="border border-lblack w-8 h-8 rounded-full"><FaLinkedinIn className="ml-2 mt-2"/></div>
                 </div>
                 <span className="text-lwhite text-xs">Copyright 2021</span>
             </div>
             <div className="flex flex-col text-white">
                <h1 className="font-semibold text lg">Company</h1>
                <a href="#" className="text-xs font-thin">About Us</a>
                <a href="#" className="text-xs font-thin">Contact Us</a>
                <a href="#" className="text-xs font-thin">Terms</a>
                <a href="#" className="text-xs font-thin">Privacy Policy</a>
             </div>
             <div className="flex flex-col text-white">
                <h1 className="font-semibold text lg">Features</h1>
                <a href="#" className="text-xs font-thin">Timeline</a>
                <a href="#" className="text-xs font-thin">Peer Review</a>
                <a href="#" className="text-xs font-thin">Create Account</a>
                <a href="#" className="text-xs font-thin">Sign in</a>
             </div>
             <div className="flex flex-col text-white">
                <h1 className="font-semibold text lg">Contact Us</h1>
                <a href="#" className="text-xs font-thin">inquiry@thaapp.com</a>
                <a href="#" className="text-xs font-thin">1-800-200-300</a>
                <a href="#" className="text-xs font-thin">54, Curragh birin</a>
                <a href="#" className="text-xs font-thin">Ireland</a>
             </div>
         </div>   
        </>
    )
}

export default Footer
