import React from 'react'
import './ProfileDropDownOption.css'

export const ProfileDropDownOption = ({ Icon, title }) => {
    return (
        <div className="profileDropDownOption">
            <Icon />
            <p>{title}</p>
        </div>
    )
}
