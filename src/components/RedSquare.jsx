import React from 'react'

const RedSquare = ({text1, text2}) => (
    <div className={`w-full flex bg-yellow-100 p-[2px] h-[219px] relative mt-3`} >
        <div className="flex justify-center items-center bg-red-900 w-[100%] h-[100%]">
            <div className="bg-yellow-100 p-[2px] h-[50px] w-[50px] rounded-full mr-3">
                <div className="flex justify-center items-center bg-red-900 w-[100%] h-[100%] rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
                    stroke="currentColor" className="w-5 h-5 text-yellow-100">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                    </svg>
                </div>
            </div>
            <div className="font-poppins text-yellow-100 text-base font-normal">
                <h1>{text1}</h1>
                <h1>{text2}</h1>
            </div>
        </div>
    </div>
  )

export default RedSquare