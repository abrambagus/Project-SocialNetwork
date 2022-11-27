import React from 'react'
import { channels } from '../constans'
import BigSquare from './BigSquare'
import MediumSquare from './MediumSquare'
import RedSquare from './RedSquare'

const BottomMain = () => {
  return (
    <div className="grid grid-cols-3 mt-12 gap-4">
        <div className="col-span-2"> 
            <div className="grid grid-cols-3 gap-2">
                <div className='col-span-2'>
                    <div className="flex font-poppins text-yellow-100 items-center mb-3">
                        <h1 className="font-semibold text-2xl flex-1">People</h1>
                        <h1 className="font-normal text-sm">View all</h1>
                    </div>
                    <BigSquare 
                        title="User Interface Designer"
                        user="Waseem Ashad"
                        views="16.000 Views"
                        variant="people"
                    />
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <MediumSquare 
                            user="John Stainior"
                        />
                        <MediumSquare 
                            user="John Doe"
                        />
                    </div>
                </div>
                <div className="mt-11">
                    <MediumSquare 
                    user="Michael"
                    />
                    <MediumSquare 
                    user="Ahmed"
                    style="mt-3"
                    />
                    <RedSquare 
                     text1="Show"
                     text2="Your Work"
                     /> 
                </div>
                <div className='col-span-2 mt-12'>
                    <div className="flex font-poppins text-yellow-100 items-center mb-3">
                        <h1 className="font-semibold text-2xl flex-1">Documents</h1>
                        <h1 className="font-normal text-sm">Browse all documents</h1>
                    </div>
                    <BigSquare 
                        title="Mobile ui & ux guide 2013"
                        user="By William"
                        views="16.000 Views"
                    />
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <MediumSquare 
                            title="2013 Marketing trends"
                            views="16.000 Views"
                            variant="documents"
                        />
                        <MediumSquare 
                            title="2013 Marketing trends"
                            views="16.000 Views"
                            variant="documents"
                        />
                    </div>
                </div>
                <div className="mt-[92px]">
                    <MediumSquare 
                    title="HTML 5 and usage"
                    views="16.000 Views"
                    variant="documents"
                    />
                    <MediumSquare 
                    title="How to become an expert"
                    views="16.000 Views"
                    variant="documents"
                    style="mt-3"
                    />
                    <RedSquare 
                     text1="Share"
                     text2="Your Document"
                     /> 
                </div>
            </div>
        </div>
        <div>
            <div className="flex justify-between items-center font-poppins text-yellow-100">    
                <h1 className="font-semibold text-2xl">Channels</h1>
                <h1 className="font-normal text-sm">Browse all channels</h1>
            </div>
            <div className="grid grid-cols-2 gap-3 border-t-2 border-b-2 border-b-yellow-100 
            border-t-yellow-100 my-3 py-4" >
                {channels.map((channel) => (
                    <div key={channel.name} className="w-full h-[200px] bg-yellow-100 relative">
                        <div className="absolute bottom-0 left-0 px-2 pb-2">
                            <h1 className="font-poppins text-red-900 font-normal text-sm"> 
                            {channel.name}
                            </h1>
                        </div>
                    </div>
           
                ))}
            </div>
        </div>
  
    </div>
  )
}

export default BottomMain