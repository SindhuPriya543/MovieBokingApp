import React from 'react'
import TCS_logo from '../images/TCS_Logo.png'

import User_logo from '../images/user_logo.png'
export const Header = () => {
  return (
    <header className='fixed top-0 w-full h-16 bg-neutral-600 bg-opacity-75'>
        <div className='container mx-auto px-3 flex items-center'>
            
            <div>
                <img src ={TCS_logo} width = {70}/>
            </div>
            <div className='ml-auto items-center gap-5'>
                <div>
                    <input type = 'text' placeholder='Search' className='bg-transparent px-4 py-1 outline-none border-none'/>
                </div>
                <div className='w-8 h-8 rounded-full overflow-hidden cursor-pointer' >
                    <img src = {User_logo} width='w-full h-full'/>
                 </div>
            </div>
        </div>

        
    </header>
  )
}
