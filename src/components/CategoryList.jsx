import React from 'react'
import { categories } from '../constans'

const CategoryList = () => {
  return (
    <div className="flex border-t-2 border-b-2 border-t-yellow-100 border-b-yellow-100 py-5">
        {categories.map((category, index) => (
        <h1 key={category.title} className="flex font-poppins text-2xl font-normal text-yellow-100">
            <span className="cursor-pointer">{category.title}</span>
            <span className={`${categories.length - 1 === index ? "hidden" : "flex mx-10"}`}>/</span>
        </h1>
        ))}
        
    </div>
  )
}

export default CategoryList