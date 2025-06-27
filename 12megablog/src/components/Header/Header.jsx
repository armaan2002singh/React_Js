import {Container, LogoutBtn} from '../index'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import React from 'react'

export default function Header() {
  const authStatus = useSelector((state) => state.auth.Status)
  //useNavigate
  const navigate = useNavigate()

  const navItems  = [// array where do have objects.
     {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-3 shadow bg-gray-600'>
      <Container>        
        <nav className='flex'>
          <div className='mr-4 text-black'>
            <Link to="/" className="flex items-center">
                            <img
                                src="https://www.pngmart.com/files/13/Insta-Logo-Transparent-Background.png"
                                className="mr-3 h-16"
                                alt="Logo"
                            />
                        </Link>
          </div>
          <ul className='flex ml-auto'>
            {
              navItems.map((item)=>
                item.active? (
                  <li key={item.name}>
                    <button 
                    onClick={()=> navigate(item.slug)} 
                    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-r-full'>
                      {item.name}
                    </button>
                  </li>
                ) : null
              )
            }

            {authStatus && (
              <li>
                <LogoutBtn/>
              </li>
            )} {/* here we used the && code where if the first thing will be true then will run the second one.*/}
          </ul>
        </nav>
      </Container>
    </header>
  )
}