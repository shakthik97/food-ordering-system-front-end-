import { Avatar, Badge, IconButton } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { pink } from '@mui/material/colors';
import "./Navbar.css"

export const Navbar = () => {
  return (
    <div className='px-5 z-50 py-[.8rem] bg-[#e91e63] lg:px-20 flex justify-between'>
        
            <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
                <li className='logo-font-semibold text-gray-300 text-2x1'>
                    Food App
                </li>
            </div>


            <div className='flex-items-center space-x-2 lg:space-x-10 flex'>
                <div className=''>
                    <IconButton>
                        <SearchIcon sx={{fontSize: "1.5rem"}}/>
                    </IconButton>
                </div>
                <div className=''>
                    <Avatar sx={{bgcolor: 'white', color:pink.A400}}></Avatar>
                </div>
                <div>
                    <IconButton>
                        <Badge color='warning' badgeContent = {3}>
                        <ShoppingCartIcon sx={{fontSize: "1.5rem"}}/>
                        </Badge>
                    </IconButton>
                </div>
            </div>
    </div>
  )
}
