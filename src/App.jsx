import React from 'react'
import CategoryList from './components/CategoryList'
import UpperMain from './components/UpperMain'
import Navbar from './components/Navbar'
import BottomMain from './components/BottomMain'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-red-900 w-full overflow-hidden px-24">
        <Navbar />
        <CategoryList />
        <UpperMain />
        <BottomMain /> 
        <Footer />
    </div>
  )
}

export default App