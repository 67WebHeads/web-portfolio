import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <div className="navbar top-0 sticky z-50 bg-white shadow-sm text-zinc-800 h-20 border-r border-s border-gray-200 p-8">
        <div className="flex-none flex md:hidden ">
            <button className="btn btn-square btn-ghost">
                <MenuIcon/>
            </button>
        </div>
        <div className="flex-1">
            <a className="text-xl">{'</>'}</a>
        </div>
        <div className="hidden md:flex md:flex-none">
            <ul className='flex items-center justify-center gap-4 '>
                <li><a href="">About</a></li>
                <li><a href="">Services</a></li>
                <li><a href="">Works</a></li>
                <li><a href="">Contact Us!</a></li>
            </ul>
            {/* <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path> </svg>
            </button> */}
        </div>
    </div>
  )
}

export default Navbar