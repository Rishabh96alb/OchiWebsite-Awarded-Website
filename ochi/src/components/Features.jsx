import React from 'react'

function Features() {
  return (
    <div className='w-full py-20'>
        <div className='w-full px-10 border-b-[1px] py-10 border-zinc-900'>
            <h1 className='text-[4vw] tracking-tight'>Featured projects</h1>
        </div>
        <div className='cards w-full mt-20 px-8 flex items-center justify-center gap-12'>
            <div className='w-[45vw] h-[35vw] overflow-hidden rounded-2xl hover:scale-105'>
            <div className='cardcontainer  '>
                <img src='https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png'></img>
            </div>
            
            </div>
            <div className='w-[45vw] h-[35vw] bg-slate-500 overflow-hidden rounded-2xl hover:scale-105'>
            <div className='cardcontainer'>
                <img src='https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg'></img>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Features