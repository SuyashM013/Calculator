import { useState } from 'react'
import Fact from './Cal/Fact'
import './App.css'
import Calcu from './Cal/calcu'

function App() {


  return (
    <div className='bg-slate-300 h-screen'>
      <div className='flex flex-col md:flex-row justify-evenly items-center h-[95%]'>
        <Calcu />
        <Fact />
      </div> 

      <div className='flex items-center justify-center   '>
        <h3 className='bg-slate-200 w-[80%] text-center rounded-2xl p-1'>Made by Suyash Mishra</h3>
      </div>

    </div>
  )
}

export default App
