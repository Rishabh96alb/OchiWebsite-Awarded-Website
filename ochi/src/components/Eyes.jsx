import React, { useEffect, useState } from 'react'

function Eyes() {
    const[rotate, setRotate]=useState(0)

    useEffect(() => {
      window.addEventListener("mousemove",(e)=>{
       let mouseX = e.clientX
       let mouseY = e.clientY

       let deltaX = mouseX-window.innerWidth/2;
       let deltaY = mouseY-window.innerHeight/2;

       var angle=Math.atan2(deltaY, deltaX) * (180/Math.PI)
       setRotate(angle-180)
      })
    })
    
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className='w-full relative h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='h-[12vw] absolute  top-[16vw] left-1/2 -translate-x-[50%] -translate-y-[50%] flex items-center gap-4 '>
         <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center '>
            <div className='w-[9vw] h-[9vw] rounded-full bg-black relative'>
                <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-[9vw] h-[1vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-4 h-4 bg-white rounded-full relative flex '>
                    </div>
                </div>
            </div>
            </div> 
         <div className='w-[15vw] h-[15vw] rounded-full bg-white flex items-center justify-center'>
         <div className='w-[9vw] h-[9vw] rounded-full bg-black relative'>
         <div style={{transform: `translate(-50%, -50%) rotate(${rotate}deg)`}} className='line w-[9vw] h-[1vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
                    <div className='w-4 h-4 bg-white rounded-full'></div>
                </div>
         </div>
         </div>   
        </div>
        </div>
    </div>
  )
}

export default Eyes