import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import BookmarkBorderOutlinedIcon from '@material-ui/icons/BookmarkBorderOutlined'
import ChangeHistoryIcon from '@material-ui/icons/ChangeHistory'
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined'
import React from 'react'
import { ProfileDropDownOption } from './ProfileDropDownOption'
import './ProfileDropDownOptions.css'

export const ProfileDropDownOptions = () => {
    return (
        <div className="profileDropDownOptions" >
            <ProfileDropDownOption Icon={ AccountCircleOutlinedIcon } title="Profile" />
            <ProfileDropDownOption Icon={ BookmarkBorderOutlinedIcon } title="Saved" />
            <ProfileDropDownOption Icon={ SettingsOutlinedIcon } title="Settings" />
            <ProfileDropDownOption Icon={ChangeHistoryIcon} title="Switch Accounts" />
            <p>Log Out</p>
        </div>
    )
}
