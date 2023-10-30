import React from 'react'
import "../Components/Background.css"
import dp from "../utils/online3.png"

function Person3() {
  return (
    <div id='background3' className='  w-[95%] h-[25%]  rounded-xl flex items-end overflow-hidden'>
    <div className='w-[35%] h-[50%] flex items-end justify-center'>
     <img  className='h-[100%]' src={dp} alt="" />
    </div>
    <div className='w-[65%] h-[50%]  flex flex-col justify-center'>
    <h1 className='font-[Gilroy] text-[1.1vw] font-[600] text-[#FFFFFF]'>Thomas Edward</h1>
    <h2 className='font-[Gilroy] text-[1.1vw] font-[300] text-[#FFFFFF]'>@thewildwithyou</h2>
    
    </div>
  </div>
  )
}

export default Person3
