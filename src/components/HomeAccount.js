import React from 'react'
import './HomeAccount.css'

export const HomeAccount = ({ imageUrl, displayName, fullName, myAccount}) => {
    return (
        <div className="homeAccount">
            <img className={`${myAccount && "homeAccount__myAccount"} homeAccount__img`} src={ imageUrl } alt=""/>
            <div className="homeAccount__text">
                <p>{displayName}</p>
                <p>{ fullName }</p>
            </div>
            <button>
                { myAccount?"Switch":"Follow"}
            </button>
        </div>
    )
}
