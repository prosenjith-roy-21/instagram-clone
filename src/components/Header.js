import { Avatar } from '@material-ui/core'
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined'
import SearchIcon from '@material-ui/icons/Search'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'
import React, { useState } from 'react'
import './Header.css'
import { ProfileDropDownOptions } from './ProfileDropDownOptions'

export const Header = () => {

    const [dropDown, setDropDown] = useState(false)
    
    return (
        <div className="header">
            <div className="header__items">
                <div className="header__logo">
                    <img
                        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
                        alt=""
                    />
                </div>
                <div className="header__search">
                    <SearchIcon/>
                    <input
                        placeholder="Search"
                        type="text"
                    />
                </div>
                <div className="header__options">
                    <HomeOutlinedIcon />
                    <SendOutlinedIcon id="rotate"/>
                    <ExploreOutlinedIcon/>
                    <FavoriteBorderIcon />
                    <Avatar
                        onClick={()=>setDropDown(!dropDown)}
                        id="profile_pic"
                        src="https://www.exberliner.com/downloads/21877/download/18_Booksmart_%C2%A92019%20ANNAPURNA%20PICTURES%2C%20LLC.%20All%20Rights%20Reserved%20%2815%29_PR_1.jpg?cb=6238ce5b1328a73321377838e163da7d&w=660&h="
                    />
                    {dropDown && <ProfileDropDownOptions/>}
                </div>
            </div>
            
        </div>
    )
}
