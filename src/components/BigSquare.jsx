import React from 'react'

const BigSquare = ({title, user, views, variant}) =>  (
    <div className="w-full bg-yellow-100 h-[450px] relative ">
        <div className="absolute bottom-0 left-0 w-full px-2 pb-2">
            <h1 className="font-poppins text-red-900 font-semibold text-2xl">
                {variant === "people" ? user : title}
            </h1>
            <div className="flex items-center font-poppins text-red-900 font-normal text-sm">
                <h1 className="flex-1">
                    {variant === "people" ?  title: user}
                </h1>
                <h1>
                    {views}
                </h1>
            </div>
        </div>
        
    </div>
  )
export default BigSquare