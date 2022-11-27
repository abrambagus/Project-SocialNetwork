import React from 'react'

const Navbar = () => {
  return (
      <nav className="flex items-center justify-between pt-4 pb-6">
        <div>
            <h1 className="font-poppins text-4xl text-yellow-100">
                <span className="font-bold">Social</span>
                <span className="font-light">Network</span>
            </h1>
        </div>
        <div className="relative">
            <input type="search" id="search" className="p-2 pr-10 bg-yellow-100 w-[600px]" placeholder="Find..." />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-red-900" fill="none" 
                stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path 
                stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7
                    0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
        </div>
        <div >
            <button type="button" className="text-red-900 flex items-center bg-yellow-100 font-medium text-sm 
            px-5 py-2.5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                className="w-3 h-3 mr-2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>
                Upload
            </button>
        </div>
        <div className='flex items-center'>
            <div className="bg-yellow-100 px-5 py-[14px] justify-center mr-2 items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                stroke="currentColor" className="w-3 h-3">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
            </div>
            <h2 className="font-poppins font-normal text-yellow-100">
                <span className="text-lg">Waseem</span> <br/>
                <span className="text-sm">Arshad</span>
            </h2>"
        </div>
    </nav>
  )
}

export default Navbar