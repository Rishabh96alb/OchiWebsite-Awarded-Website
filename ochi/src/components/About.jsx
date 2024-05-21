import React from 'react'

function About() {
  return (
    <div className='w-full bg-[#CDEA68] p-20 rounded-tl-2xl rounded-tr-2xl '>
        <h1 className='text-black text-[4vw] tracking-tight font-medium leading-[4vw]'>
        Ochi is a strategic partner for fast-growing tech businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
        </h1>
        <div className='w-full mt-20 pt-2 border-t-[1px] border-[#677043] flex gap-5 '>
            <div className='w-1/2'>
                <h1 className='text-black text-[4vw] tracking-tight'>Our approach:</h1>
                <button className='rounded-3xl bg-black text-white text-md py-3 px-4 flex items-center gap-7 tracking-tight' >READ MORE
                <div className='w-2 h-2 rounded-full bg-white'></div>
                </button>
                </div>
        <div className='w-1/2 h-[30vw] rounded-2xl overflow-hidden '>
        <img src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default About