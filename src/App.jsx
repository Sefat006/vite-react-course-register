

import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Courses from './Components/Courses/Courses'

function App() {

  //courses er map er moddhe shob gular handle parameter call korte hobe as well as function eo
  const [bookmarks, setBookmarks] = useState([]);//bookmark title/name paste korbe tai useState([array])
  const handleBookmarks = (courses) =>{
    const newBookmarks = [...bookmarks, courses];
    setBookmarks(newBookmarks);
  }

  const [creditHour, setCreditHour] = useState(0);//creditHour number count korbe tai useState(0)
  const handleCreditHour = (time) =>{
    setCreditHour(creditHour+time);
  }

  const [prices, setPrices] = useState(0);//creditHour number count korbe tai useState(0)
  const handlePrices = (price) =>{
    setPrices(prices+price);
  }
  return (
    <div className='space-y-7'>
      <h1 className='text-4xl font-bold'>Course Registration</h1>
      <div className='sm:flex md:flex'>
          <div>
              <Courses 
              handleBookmarks={handleBookmarks} 
              handleCreditHour={handleCreditHour} 
              handlePrices={handlePrices}
              ></Courses>
          </div>
          <div className='mt-10'>
              <Bookmarks 
              bookmarks={bookmarks}
              prices={prices}
              creditHour={creditHour}
              ></Bookmarks>
          </div>
      </div>
    </div>
  )
}

export default App
