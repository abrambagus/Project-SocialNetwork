import React from 'react'

const MediumSquare = ({style, variant, user, views, title}) => (
    <div className={`w-full bg-yellow-100 px-3 h-[219px] relative ${style}`} >
        <div className={`absolute flex ${variant === "documents" ? "flex-col" : "flex-row"} bottom-0 left-0 w-full 
        px-2 pb-2 ${variant === "documents" ? "items-start" : "items-center"}  font-poppins text-red-900 font-normal 
        text-sm`}>
                <h1 className="flex-1">
                {variant === "documents" ? title : user}
            </h1>
            <h1>
                {views}
            </h1>
        </div>
    </div>
  )

export default MediumSquare