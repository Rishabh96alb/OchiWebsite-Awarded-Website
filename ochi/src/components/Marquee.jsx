import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 bg-[#004D43] rounded-tl-2xl rounded-tr-2xl '>
    <div className='border-t-2 border-b-2 flex whitespace-nowrap uppercase overflow-hidden leading-none tracking-tighter gap-5'>
    <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:8 }} className='text-[16vw] leading-none font-semibold pb-2 tracking-tighter '>we are ochi</motion.h1>
    <motion.h1 initial={{x:"0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:"linear", duration:8 }} className='text-[16vw] leading-none font-semibold pb-2 tracking-tighter '>we are ochi</motion.h1>
    </div>
    </div>
  )
}

export default Marquee