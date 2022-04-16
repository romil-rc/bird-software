import React from 'react'
import '../styles/navbar.css'

const Navbar = () => {

    function Menu(e){
        let list = document.querySelector('ul');
        return e.target.name === "menu-outline" ? (e.target.name = "close-outline", list.classList.remove('hidden'), list.classList.add('block')) : (e.target.name = "menu-outline", list.classList.remove('block'), list.classList.add('hidden'))
    }

    return (
        <nav className='sticky top-0 z-50 bg-[#00215f] flex' id='navbar'>
            <div className='md:flex p-5 md:p-5 w-full md:w-0 flex justify-between'>
                <div><a href='/' className='font-semibold text-3xl tracking-wide'>Merka</a></div>
                <div className="block md:hidden text-3xl cursor-pointer float-right"><ion-icon name="menu-outline" onClick={Menu}></ion-icon></div>
            </div>
            <ul className='md:flex hidden md:justify-center md:flex-grow space-x-10 md:space-x-16 p-5 md:p-5 z-[-1] md:z-auto md:static absolute w-full left-0 top-[60px]' id='nav-ul'>
                <li className='text-center my-6 md:my-0 pl-10 md:pl-0'><a href="/">Home</a></li>
                <li className='text-center my-6 md:my-0'><a href="/">Projects</a></li>
                <li className='text-center my-6 md:my-0'><a href="/">Service</a></li>
                <li className='text-center my-6 md:my-0'><a href="/">Blog</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;