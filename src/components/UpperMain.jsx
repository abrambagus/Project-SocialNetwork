import React from 'react'
import { activities } from '../constans'
import BigSquare from './BigSquare'
import MediumSquare from './MediumSquare'
import RedSquare from './RedSquare'

const UpperMain = () => {
  return (
    <div className="grid grid-cols-3 mt-12 gap-4">
        <div className="col-span-2"> 
            <div className="grid grid-cols-3 gap-2">
                <div className='col-span-2'>
                    <div className="flex font-poppins text-yellow-100 items-center mb-3">
                        <h1 className="font-semibold text-2xl flex-1">Videos</h1>
                        <h1 className="font-normal text-sm">Browse all videos</h1>
                    </div>
                    <BigSquare 
                        title="How to improve your skills"
                        user="Waseem Ashad"
                        views="16.000 Views"
                        variant="videos"
                    />
                    <div className="grid grid-cols-2 gap-2 mt-3">
                        <MediumSquare 
                            user="Michael"
                            views="16.000 Views"
                        />
                        <MediumSquare 
                            user="Michael"
                            views="16.000 Views"
                        />
                    </div>
                </div>
                <div className="mt-11">
                    <MediumSquare 
                    user="Michael"
                    views="16.000 Views"
                    />
                    <MediumSquare 
                    user="Ahmed"
                    views="16.000 Views"
                    style="mt-3"
                    />
                     <RedSquare 
                     text1="Upload"
                     text2="Your Own Video"
                     /> 
                </div>
            </div>
        </div>
        <div>
            <div className="flex justify-between items-center font-poppins text-yellow-100">    
                <h1 className="font-semibold text-2xl">Activity</h1>
                <h1 className="font-normal text-sm">View timeline / Filter activities</h1>
            </div>
            <div className="border-t-2 border-b-2 border-b-yellow-100 border-t-yellow-100 my-3 py-6" >
                {activities.map((activity, index) => (
                    <div key={index} className={`flex items-start ${activities.length -1 === index ? "mb-0" : "mb-4"}`}>
                        <div className="min-w-[100px] h-[92px] bg-yellow-100" />
                        <div className="font-poppins text-yellow-100 font-normal text-sm ml-2">
                            <h1 className='font-semibold text-xl'>{activity.user}</h1>
                            <h1 className='font-normal text-base'>{activity.comment}</h1>
                            <h1 className='font-light text-sm'>{activity.comment}</h1>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default UpperMain