import React from 'react'

const Navbar = () => {
    return (
        <>
         <div className="flex justify-end bg-white text-black">
             <div></div>
             <div className="inline-grid grid-cols-4 gap-x-4">
                 <button className ="p-3">Timeline</button>
                 <button className ="p-3">Peer Review</button>
                 <button className ="p-3">Login</button>
                 <button className ="m-3 border border-red-500 text-red-500">Sign up</button>
             </div>
             
         </div>   
        </>
    )
}

export default Navbar
