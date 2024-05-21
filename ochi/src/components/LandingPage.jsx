import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion"

function LandingPage() {
    motion
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-black pt-1'>
        <div className='textstructure mt-40 px-20'>
         {['We Create', 'Eye Opening', 'Presentations'].map((item, index)=>{
         return (
            <div className='masker'>
             <div className='w-fit flex items-end'>
              {index===1 && (
              <motion.div  initial={{width:0}}
               animate={{width:"8vw"}}
                transition={{ease: [0.76, 0, 0.24, 1], duration:1}} 
                className='border-zinc-700 rounded-md w-[8vw] h-[5.3vw] mr-[0.5vw] ml-[0.5vw] relative top-[0.15vw] -bottom-[0.15vw]'>
                    <img src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg" alt="" />
                </motion.div>
                        )}
         <h1 className='uppercase text-[7vw] font-semibold tracking-tighter leading-[6vw]'>{item}</h1>
              </div>
              </div>
                    
                )
            })}  
        </div>
        <div className='border-t mt-28 border-zinc-800 flex justify-between items-center px-16'>
            {["For public and private companies", "From the first pitch to IPO"].map((item, index)=>{
                return(
                    <p className='text-md font-light tracking-tight leading-none mt-2 '>{item}</p>
                )
            })}
            <div className='buttons flex items-center gap-1 mt-2'>
            <button className='bg-black border border-zinc-700 hover:bg-white hover:text-black font-semibold py-1 px-2 rounded-3xl '>START THE PROJECT</button>
            <div className=' rounded-full bg-black border border-zinc-700 hover:bg-white hover:text-black w-9 h-9 flex items-center justify-center'>
                <span className='rotate-45'>
                <FaArrowUpLong/>
                </span>
               
            </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage