import { useState } from 'react'
import React from "react";
import Link from "next/link";

const Navbar = () => {
  const [active, setActive] = useState('home')
    const menu = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: 'poem',
            link: '/'
        },
        {
            name: 'Login',
            link: '/'
        },
        {
          name: 'Admin',
          link: '/admin'
        } 
    ]

  return (
    <nav className="flex justify-around py-4 shadow-md bg-white sticky top-0 z-100">
      <h1 className="logo font-bold text-blue-600 text-xl">Blog App</h1>
      <ul className="menu flex gap-5">
        {
            menu.map((item, i) => (
                <li onClick={()=> setActive(item.name)} key={i} className={`capitalize text-lg hover:text-blue-600 font-semibold ${ active == item.name ? 'text-blue-600' : 'text-gray-600' } `}>
                    <Link href={item.link}>
                      <a> {item.name} </a>
                    </Link>
                </li>
            ))
        }
       
      </ul>
    </nav>
  );
};

export default Navbar;
