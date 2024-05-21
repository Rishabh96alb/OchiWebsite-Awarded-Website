import React from 'react'

function Cards() {
  return (
    <div className='w-full border-t-[1px] border-zinc-800 flex items-center gap-6 px-10 '>
    <div className='w-[40vw] h-[25vw] bg-[#004D43] rounded-2xl mt-20 flex justify-center items-center text-[6vw] text-[#CDEA68] font-semibold relative'>
    <img src='https://ochi.design/wp-content/uploads/2022/04/logo001.svg'></img>
    <button className='border-[1px] border-[#CDEA68] py-1 px-3 rounded-full text-sm absolute left-[2vw] bottom-[2vw]'>&copy;2019-2022</button>
    </div>
    <div className='w-[25vw] h-[25vw] bg-[#212121] rounded-2xl mt-20 flex justify-center items-center text-[4vw] relative '>Clutch
    <button className='border border-white py-1 px-3 rounded-full text-sm absolute tracking-tight hover:bg-white hover:text-black left-[2vw] bottom-[2vw]'>RATING 5.0 ON CLUTCH</button>
    </div>
    <div className='w-[25vw] h-[25vw] bg-[#212121] rounded-2xl mt-20 flex justify-center items-center relative'>
        <img src='https://ochi.design/wp-content/uploads/2022/04/logo003.png'></img>
    <button className='border border-white py-1 px-3 rounded-full text-sm absolute left-[2vw] bottom-[2vw] tracking-tight hover:bg-white hover:text-black'>BUSINESS BOOTCAMP ALUMNI</button>
    </div>
    </div>
  )
}

export default Cards